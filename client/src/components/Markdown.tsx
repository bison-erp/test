import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "./Link";
import { parseBlocks, parseInline, type Block, type Inline } from "@/content/markdown";

function renderInline(nodes: Inline[]): React.ReactNode[] {
  return nodes.map((node, i) => {
    switch (node.type) {
      case "text":
        return <React.Fragment key={i}>{node.text}</React.Fragment>;
      case "strong":
        return <strong key={i} className="font-semibold text-foreground">{renderInline(node.children)}</strong>;
      case "em":
        return <em key={i}>{renderInline(node.children)}</em>;
      case "link":
        return (
          <Link key={i} href={node.href} title={node.title} className="text-primary font-medium underline decoration-accent/60 underline-offset-4 hover:text-accent">
            {renderInline(node.children)}
          </Link>
        );
    }
  });
}

const inline = (text: string) => renderInline(parseInline(text));

function renderBlock(block: Block, key: number, faqTitle?: string): React.ReactNode {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2 key={key} id={block.id} className="font-serif-classic text-2xl md:text-3xl tracking-wide font-light text-primary pt-6 scroll-mt-28">
          {inline(block.text)}
        </h2>
      ) : (
        <h3 key={key} id={block.id} className="font-serif-classic text-xl tracking-wide text-foreground pt-2 scroll-mt-28">
          {inline(block.text)}
        </h3>
      );
    case "paragraph":
      return (
        <p key={key} className="font-sans-modern text-base text-foreground/80 leading-relaxed">
          {inline(block.text)}
        </p>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag key={key} className={`font-sans-modern text-base text-foreground/80 leading-relaxed space-y-2 pl-6 ${block.ordered ? "list-decimal" : "list-disc"} marker:text-accent`}>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <div key={key} className="overflow-x-auto border border-border">
          <table className="w-full text-left font-sans-modern text-sm">
            <thead className="bg-primary/5">
              <tr>
                {block.header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-primary">{inline(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-border">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 text-foreground/80 align-top">{inline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote key={key} className="border-l-2 border-accent bg-accent/5 px-6 py-4 font-serif-classic text-lg italic text-foreground/90">
          {inline(block.text)}
        </blockquote>
      );
    case "faq":
      return (
        <section key={key} className="space-y-4 pt-6" aria-labelledby={faqTitle ? "faq" : undefined}>
          {faqTitle && (
            <h2 id="faq" className="font-serif-classic text-2xl md:text-3xl tracking-wide font-light text-primary scroll-mt-28">
              {faqTitle}
            </h2>
          )}
          <div className="divide-y divide-border border-y border-border">
            {block.items.map((item, i) => (
              <details key={i} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-classic text-lg text-foreground">
                  <h3 className="font-normal">{inline(item.question)}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-3 pt-3">{item.blocks.map((b, j) => renderBlock(b, j))}</div>
              </details>
            ))}
          </div>
        </section>
      );
  }
}

interface MarkdownProps {
  source: string;
  /** H2 displayed above :::faq blocks. */
  faqTitle?: string;
  className?: string;
}

export default function Markdown({ source, faqTitle, className = "space-y-5" }: MarkdownProps) {
  const blocks = parseBlocks(source);
  return <div className={className}>{blocks.map((block, i) => renderBlock(block, i, faqTitle))}</div>;
}
