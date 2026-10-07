// Small, dependency-free Markdown subset used by page and blog content.
// Blocks: ## / ### headings, paragraphs, - and 1. lists, | tables |, > quotes,
// and :::faq fences (### question + answer paragraphs, rendered as FAQ + FAQPage schema).
// Inline: **bold**, *italic*, [anchor](/path "link title").

export type Inline =
  | { type: "text"; text: string }
  | { type: "strong"; children: Inline[] }
  | { type: "em"; children: Inline[] }
  | { type: "link"; href: string; title?: string; children: Inline[] };

export type Block =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  | { type: "faq"; items: { question: string; blocks: Block[] }[] };

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

export function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      i++;
      continue;
    }
    if (trimmed === ":::faq") {
      const inner: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") inner.push(lines[i++]);
      i++;
      const items: { question: string; blocks: Block[] }[] = [];
      let current: { question: string; lines: string[] } | null = null;
      const flush = () => current && items.push({ question: current.question, blocks: parseBlocks(current.lines.join("\n")) });
      for (const l of inner) {
        const m = l.match(/^###\s+(.*)$/);
        if (m) {
          flush();
          current = { question: m[1].trim(), lines: [] };
        } else if (current) current.lines.push(l);
      }
      flush();
      blocks.push({ type: "faq", items });
      continue;
    }
    const heading = trimmed.match(/^(#{2,3})\s+(.*)$/);
    if (heading) {
      const text = heading[2].trim();
      blocks.push({ type: "heading", level: heading[1].length as 2 | 3, text, id: slugify(text) });
      i++;
      continue;
    }
    if (trimmed.startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++]);
      const header = splitRow(rows[0]);
      const body = rows.slice(1).filter((r) => !/^\|?\s*:?-{2,}/.test(r.trim()));
      blocks.push({ type: "table", header, rows: body.map(splitRow) });
      continue;
    }
    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const m = ordered ? t.match(/^\d+\.\s+(.*)$/) : t.match(/^[-*]\s+(.*)$/);
        if (m) items.push(m[1]);
        else if (t && items.length && /^\s{2,}/.test(lines[i])) items[items.length - 1] += " " + t;
        else break;
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    if (trimmed.startsWith(">")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) parts.push(lines[i++].trim().replace(/^>\s?/, ""));
      blocks.push({ type: "quote", text: parts.join(" ") });
      continue;
    }
    const parts: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t || /^(#{2,3})\s/.test(t) || t.startsWith("|") || t.startsWith(">") || t === ":::faq" || /^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t)) break;
      parts.push(t);
      i++;
    }
    blocks.push({ type: "paragraph", text: parts.join(" ") });
  }
  return blocks;
}

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let buffer = "";
  let i = 0;
  const pushText = () => {
    if (buffer) out.push({ type: "text", text: buffer });
    buffer = "";
  };
  while (i < text.length) {
    if (text[i] === "[") {
      const m = text.slice(i).match(/^\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/);
      if (m) {
        pushText();
        out.push({ type: "link", href: m[2], title: m[3], children: parseInline(m[1]) });
        i += m[0].length;
        continue;
      }
    }
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end > i + 2) {
        pushText();
        out.push({ type: "strong", children: parseInline(text.slice(i + 2, end)) });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === "*" && text[i + 1] !== " ") {
      const end = text.indexOf("*", i + 1);
      if (end > i + 1) {
        pushText();
        out.push({ type: "em", children: parseInline(text.slice(i + 1, end)) });
        i = end + 1;
        continue;
      }
    }
    buffer += text[i++];
  }
  pushText();
  return out;
}

export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

function blockText(block: Block): string {
  switch (block.type) {
    case "paragraph":
    case "quote":
      return plainText(block.text);
    case "list":
      return block.items.map(plainText).join(" ; ");
    case "table":
      return block.rows.map((r) => r.map(plainText).join(" – ")).join(" ; ");
    case "heading":
      return block.text;
    default:
      return "";
  }
}

export function extractFaq(body: string): { question: string; answer: string }[] {
  return parseBlocks(body)
    .filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq")
    .flatMap((b) => b.items.map((item) => ({ question: item.question, answer: item.blocks.map(blockText).join(" ") })));
}

/** Approximate reading time in minutes. */
export function readingTime(body: string): number {
  return Math.max(1, Math.round(plainText(body).split(/\s+/).length / 220));
}
