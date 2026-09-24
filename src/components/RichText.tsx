import Link from "next/link";
import type { ReactNode } from "react";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title?: string; text: string };

/**
 * Renders the small markup used in content files:
 *   [link text](/path)  → internal/external link
 *   **bold**            → <strong>
 */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      const href = match[2];
      parts.push(
        href.startsWith("/") || href.startsWith("#") ? (
          <Link key={key++} href={href}>
            {match[1]}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        ),
      );
    } else {
      parts.push(<strong key={key++}>{match[3]}</strong>);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export type TocItem = { id: string; label: string };

/**
 * Builds table-of-contents entries from the h2 headings in a list of blocks.
 * A leading "3. " is dropped from labels because the table of contents numbers entries itself.
 */
export const tocFromBlocks = (blocks: Block[]): TocItem[] =>
  blocks.flatMap((b) =>
    b.type === "h2" ? [{ id: b.id ?? slugify(b.text), label: b.text.replace(/^\d+\.\s+/, "") }] : [],
  );

export default function RichText({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-sun">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={b.id ?? slugify(b.text)} className="scroll-mt-28">
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <aside
                key={i}
                className="bg-brand-soft my-7 rounded-2xl border border-sun-400/25 p-5 text-[0.98rem] leading-7"
              >
                <p className="mb-1! font-display font-semibold text-sun-300">{b.title ?? "Quick tip"}</p>
                <p className="mb-0!">
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          default:
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
        }
      })}
    </div>
  );
}
