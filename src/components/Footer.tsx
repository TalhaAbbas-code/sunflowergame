import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site";
import { games } from "@/data/games";

const columns = [
  {
    title: "Games",
    links: games.map((g) => ({ label: g.name, href: `/games/${g.slug}` })),
  },
  {
    title: "Get Started",
    links: [
      { label: "Sunflower Game Download", href: "/download" },
      { label: "How to Play", href: "/how-to-play" },
      { label: "Game Features", href: "/features" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Responsible Gaming", href: "/responsible-gaming" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="relative mt-24 border-t border-white/8 bg-ink-900/60">
      <div className="bg-brand absolute inset-x-0 top-0 h-px opacity-60" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Sunflower Game puts Rummy, Ludo, Teen Patti, Callbreak and Carrom in one small app. Download it free on
            Android, learn the rules here, and bring your friends to the table.
          </p>
          <p className="mt-5 text-sm text-white/60">
            Questions?{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">
              {siteConfig.email}
            </a>
          </p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-3 py-1.5 text-xs capitalize text-white/80 hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-sun-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs leading-6 text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} {siteConfig.domain}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            18+ only. Please play for fun and within your limits. Some game modes may not be available in every region
            – check your local laws before you play.
          </p>
        </div>
      </div>
    </footer>
  );
}
