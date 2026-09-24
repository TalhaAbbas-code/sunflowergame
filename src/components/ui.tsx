import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { ArrowRightIcon } from "./Icons";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Only used for external links, which open in a new tab. Defaults to "noopener". */
  rel?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-ink-950 shadow-xl shadow-ember-500/25 hover:shadow-ember-500/40"
      : "glass text-white hover:bg-white/10";
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all hover:-translate-y-0.5 ${styles} ${className}`;

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel={rel ?? "noopener"} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sun-300">
      <span className="bg-brand h-1.5 w-1.5 rounded-full" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-8 text-white/65">{intro}</p>}
    </div>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

/** Hero block used at the top of every inner page. Holds the page's only <h1>. */
export function PageHero({
  title,
  intro,
  eyebrow,
  crumbs,
  children,
}: {
  title: ReactNode;
  intro?: ReactNode;
  eyebrow?: string;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-6 text-lg leading-8 text-white/70">{intro}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 font-semibold text-sun-300 hover:text-sun-400">
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
