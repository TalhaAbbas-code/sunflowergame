import type { TocItem } from "./RichText";

/** Compact "jump to section" links shown under the page hero on section-based pages. */
export default function OnThisPage({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="mt-9">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">On this page</p>
      <ol className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="glass inline-block rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:border-sun-400/40 hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
