"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "./RichText";

/**
 * Vertical table of contents that highlights the section currently on screen.
 * Links are plain anchors rendered on the server, so search engines can read them
 * (and may show them as "Jump to" links in results).
 */
export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A heading counts as "current" once it passes just under the fixed header.
      { rootMargin: "-110px 0px -65% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <ol className="space-y-1 border-l border-white/10 text-sm">
      {items.map((item, i) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 leading-6 transition-colors ${
                isActive
                  ? "border-sun-400 font-medium text-white"
                  : "border-transparent text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              <span className={isActive ? "text-sun-400" : "text-white/35"}>{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
