import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import GameCard from "@/components/GameCard";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import { games } from "@/data/games";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sunflower Games: Rummy, Ludo, Teen Patti, Callbreak & Carrom",
  description:
    "Every game in the Sunflower Game app: 13-card Rummy, Ludo, Teen Patti, Callbreak and Carrom. Compare players, round length and difficulty, then pick your table.",
  path: "/games",
  keywords: ["sunflower game", "sunflower rummy", "sunflower ludo", "sunflower teen patti", "sunflower callbreak", "sunflower carrom"],
});

export default function GamesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Games in Sunflower Game",
    itemListElement: games.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/games/${g.slug}`),
      name: g.name,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <PageHero
        crumbs={[{ name: "Games", path: "/games" }]}
        eyebrow="5 games · 1 app"
        title={
          <>
            Every game in <span className="text-gradient">Sunflower Game</span>
          </>
        }
        intro="Cards or boards, quick rounds or long sessions — there's something here for every mood. Each game has its own page with the full rules and the tips regular players swear by."
      />

      <Section className="pt-0!">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} headingLevel="h2" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Compare" title="Which game suits you?" />
        <div className="glass mx-auto mt-12 max-w-5xl overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Comparison of games available in Sunflower Game</caption>
            <thead>
              <tr className="border-b border-white/10 text-sm uppercase tracking-wider text-white/50">
                <th scope="col" className="px-6 py-4 font-semibold">Game</th>
                <th scope="col" className="px-6 py-4 font-semibold">Type</th>
                <th scope="col" className="px-6 py-4 font-semibold">Players</th>
                <th scope="col" className="px-6 py-4 font-semibold">Round</th>
                <th scope="col" className="px-6 py-4 font-semibold">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {games.map((g) => (
                <tr key={g.slug} className="border-b border-white/6 last:border-0">
                  <th scope="row" className="px-6 py-4 font-semibold text-white">
                    <Link href={`/games/${g.slug}`} className="hover:text-sun-300">
                      {g.name}
                    </Link>
                  </th>
                  <td className="px-6 py-4 text-white/70">{g.kind === "cards" ? "Card game" : "Board game"}</td>
                  <td className="px-6 py-4 text-white/70">{g.players}</td>
                  <td className="px-6 py-4 text-white/70">{g.roundTime}</td>
                  <td className="px-6 py-4 text-white/70">{g.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <RichText
            blocks={[
              { type: "h2", text: "Picking your first game" },
              {
                type: "p",
                text: "If you're brand new, start with [Ludo](/games/ludo). Everybody already half-knows the rules, the games are relaxed, and it's the best one for playing with family in a private room.",
              },
              {
                type: "p",
                text: "Want something with more thinking? [Rummy](/games/rummy) is the most popular game in the app for a reason — it rewards patience and memory, and a good player will beat a lucky one over time. [Callbreak](/games/callbreak) scratches the same itch but with bidding, so every round has a little bit of drama built in.",
              },
              {
                type: "p",
                text: "For short breaks, [Teen Patti](/games/teen-patti) rounds are over in a couple of minutes. And if you'd rather aim than count, [Carrom](/games/carrom) is the most hands-on game we have.",
              },
              { type: "h2", text: "One account, every table" },
              {
                type: "p",
                text: "Your profile, level and coins are shared across all five games, so you can hop from a Ludo match straight into a Rummy table without logging in again. Each game keeps its own stats and leaderboard, though, so your Carrom skills get recognised separately from your card skills.",
              },
              {
                type: "p",
                text: "Haven't installed it yet? Head over to the [Sunflower Game download](/download) page — it takes about two minutes.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
