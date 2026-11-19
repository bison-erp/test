"""SEO audit of the built site (dist/public): broken internal links, links
without a title, FR/EN cross-links outside the language switcher, canonical,
hreflang reciprocity, one H1 per page, images without alt, duplicate titles.
Usage: python3 scripts/audit-site.py dist/public"""
import collections, html, os, re, sys

root = sys.argv[1] if len(sys.argv) > 1 else "dist/public"
SITE = "https://acropolis-real-estate.com"
pages = {}
for d, _, files in os.walk(root):
    for f in files:
        if f.endswith(".html") and f != "404.html":
            rel = os.path.relpath(os.path.join(d, f), root)[:-5]
            pages["/" if rel == "index" else "/" + rel] = open(os.path.join(d, f), encoding="utf-8").read()

is_fr = lambda p: p == "/fr" or p.startswith("/fr/")
problems = collections.Counter()
titles = collections.defaultdict(list)

def report(kind, *info):
    problems[kind] += 1
    print(kind, *info)

for url, s in pages.items():
    body = s[s.index('<div id="root">'):]
    for m in re.finditer(r"<a\b([^>]*)>", body):
        attrs = m.group(1)
        href = re.search(r'href="([^"]*)"', attrs)
        if not href:
            continue
        h = html.unescape(href.group(1))
        if 'title="' not in attrs:
            report("no-title", url, h)
        if h.startswith("/"):
            target = h.split("#")[0].split("?")[0]
            if target not in pages:
                report("broken", url, h)
            if "hreflang" not in attrs.lower() and is_fr(target) != is_fr(url):
                report("cross-language", url, h)
    titles[re.search(r"<title>(.*?)</title>", s).group(1)].append(url)
    canonical = re.search(r'rel="canonical" href="([^"]*)"', s).group(1)
    if canonical != SITE + url:
        report("canonical", url, canonical)
    alternates = dict(re.findall(r'hreflang="([^"]+)" href="([^"]+)"', s))
    for lang in ("en", "fr"):
        target = alternates[lang][len(SITE):]
        back = dict(re.findall(r'hreflang="([^"]+)" href="([^"]+)"', pages.get(target, ""))).get("fr" if is_fr(url) else "en")
        if back != SITE + url:
            report("hreflang", url, target)
    if len(re.findall(r"<h1[\s>]", body)) != 1:
        report("h1", url)
    for img in re.findall(r"<img\b[^>]*>", body):
        if not re.search(r'alt="[^"]+"', img):
            report("img-alt", url, img[:100])
for title, urls in titles.items():
    if len(urls) > 1:
        report("duplicate-title", title, urls)
print(f"{len(pages)} pages, problems: {dict(problems) or 'none'}")
sys.exit(1 if problems else 0)
