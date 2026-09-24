import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import RichText, { Inline, tocFromBlocks } from "@/components/RichText";
import OnThisPage from "@/components/OnThisPage";
import FaqList from "@/components/FaqList";
import GameCard from "@/components/GameCard";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { CardsIcon, CheckIcon, ClockIcon, DiceIcon, DownloadIcon, UsersIcon } from "@/components/Icons";
import { games, getGame } from "@/data/games";
import { buildMetadata } from "@/lib/seo";
import { howToSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return buildMetadata({
    title: game.seoTitle,
    description: game.metaDescription,
    path: `/games/${game.slug}`,
    absoluteTitle: true,
    keywords: [game.name.toLowerCase(), `${game.name.toLowerCase()} rules`, "sunflower game", "sunflower game download"],
  });
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const others = games.filter((g) => g.slug !== game.slug).slice(0, 3);
  const KindIcon = game.kind === "cards" ? CardsIcon : DiceIcon;
  const toc = [
    { id: "how-to-play", label: "How to play" },
    ...tocFromBlocks(game.body),
    { id: "tips", label: "Tips" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd data={howToSchema(`How to play ${game.name}`, game.metaDescription, game.steps, game.image)} />

      <PageHero
        crumbs={[
          { name: "Games", path: "/games" },
          { name: game.name, path: `/games/${game.slug}` },
        ]}
        eyebrow={game.kind === "cards" ? "Card game" : "Board game"}
        title={
          <>
            <span className="text-gradient">{game.name}</span>
            <span className="mt-3 block text-2xl font-semibold text-white/80 sm:text-3xl">{game.tagline}</span>
          </>
        }
      >
        <ul className="mt-8 flex flex-wrap gap-3 text-sm">
          {[
            { icon: UsersIcon, text: game.players },
            { icon: ClockIcon, text: game.roundTime },
            { icon: KindIcon, text: game.level },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-white/85">
              <Icon className="h-4 w-4 text-sun-400" />
              {text}
            </li>
          ))}
        </ul>
        <OnThisPage items={toc} />
      </PageHero>

      <Section className="pt-0!">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-[1.05rem] leading-8 text-white/70">
            {game.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <ButtonLink href="/download">
                <DownloadIcon className="h-5 w-5" />
                Play {game.name}
              </ButtonLink>
              <ButtonLink href="#how-to-play" variant="ghost">
                See the rules
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl" aria-hidden="true" />
            <Image
              src={game.image}
              alt={game.imageAlt}
              width={900}
              height={600}
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative w-full rounded-[2rem] border border-white/10"
            />
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section id="how-to-play">
        <SectionHeading eyebrow="Rules" title={`How to play ${game.name}`} />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {game.steps.map((s, i) => (
            <li key={s.title} className="glass relative rounded-3xl p-6">
              <span className="text-gradient font-display text-4xl font-extrabold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7 text-white/65">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Body + tips */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <RichText blocks={game.body} />
          <aside id="tips" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
            <div className="gradient-border rounded-3xl bg-ink-800 p-7">
              <h2 className="text-xl font-bold">Tips from regular players</h2>
              <ul className="mt-5 space-y-4">
                {game.tips.map((t) => (
                  <li key={t} className="flex gap-3 text-[0.95rem] leading-7 text-white/75">
                    <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-sun-400" />
                    <span className="[&_a]:text-sun-300 [&_a]:underline">
                      <Inline text={t} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="FAQ" title={`${game.name} questions`} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList faqs={game.faqs} />
        </div>
      </Section>

      {/* Related */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading center={false} eyebrow="Keep playing" title="Other games you might like" />
          <Link href="/games" className="font-semibold text-sun-300 hover:underline">
            View all games
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </Section>

      <CtaBanner title={`Ready to play ${game.name}?`} />
    </>
  );
}
