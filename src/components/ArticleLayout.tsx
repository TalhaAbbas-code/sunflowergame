import type { ReactNode } from "react";
import TableOfContents from "./TableOfContents";
import RichText, { tocFromBlocks, type Block, type TocItem } from "./RichText";

/** Rich text with an automatic table of contents built from its h2 headings. */
export function RichArticle({ blocks, title = "On this page" }: { blocks: Block[]; title?: string }) {
  return (
    <ArticleLayout toc={tocFromBlocks(blocks)} title={title}>
      <RichText blocks={blocks} />
    </ArticleLayout>
  );
}

/**
 * Long-form layout: content on the left, sticky table of contents on the right (desktop).
 * On mobile the table of contents becomes a collapsible box placed after `intro`.
 */
export default function ArticleLayout({
  toc,
  intro,
  children,
  title = "In this article",
}: {
  toc: TocItem[];
  intro?: ReactNode;
  children: ReactNode;
  title?: string;
}) {
  const showToc = toc.length > 1;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 max-w-3xl">
        {intro}
        {showToc && (
          <details className="glass group mb-10 rounded-2xl lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-display font-semibold text-white">
              <span>
                {title} <span className="font-sans text-sm font-normal text-white/50">({toc.length} sections)</span>
              </span>
              <span className="text-sun-400 transition-transform group-open:rotate-180" aria-hidden="true">
                ▾
              </span>
            </summary>
            <nav aria-label="Table of contents" className="px-5 pb-5">
              <TableOfContents items={toc} />
            </nav>
          </details>
        )}
        {children}
      </div>

      {showToc && (
        <aside className="hidden lg:block">
          <nav aria-label="Table of contents" className="glass sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">{title}</h2>
            <TableOfContents items={toc} />
          </nav>
        </aside>
      )}
    </div>
  );
}
