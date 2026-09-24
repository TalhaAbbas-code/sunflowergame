import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, SectionHeading, TextLink } from "@/components/ui";
import RichText, { slugify } from "@/components/RichText";
import OnThisPage from "@/components/OnThisPage";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { games } from "@/data/games";
import { images } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { howToSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "How to Play Sunflower Game – Beginner's Guide to Every Game",
  description:
    "New to Sunflower Game? This beginner's guide explains how to set up your account, join a table and play Rummy, Ludo, Teen Patti, Callbreak and Carrom.",
  path: "/how-to-play",
  keywords: ["how to play sunflower game", "sunflower game rules", "sunflower rummy rules", "sunflower ludo rules", "sunflower game"],
});

const gettingStarted = [
  {
    title: "Install the app",
    text: "Get the APK from the official Sunflower Game download page and install it. It takes about two minutes.",
  },
  {
    title: "Create your profile",
    text: "Sign in with your phone number (recommended) or start as a guest. Pick a name and an avatar — you can change both later.",
  },
  {
    title: "Pick a game from the lobby",
    text: "The lobby shows all five games. Tap one to see the table types available, from practice tables to private rooms.",
  },
  {
    title: "Start on a practice table",
    text: "Practice tables use real rules with nothing at stake. Play a few rounds here to learn the controls.",
  },
  {
    title: "Invite friends or join a public table",
    text: "Create a private room and share the code, or tap Quick Play to be seated with other players straight away.",
  },
];

export default function HowToPlayPage() {
  return (
    <>
      <JsonLd
        data={howToSchema(
          "How to start playing Sunflower Game",
          "Install Sunflower Game, create a profile and join your first table in five steps.",
          gettingStarted,
          images.howToPlay,
        )}
      />

      <PageHero
        crumbs={[{ name: "How to Play", path: "/how-to-play" }]}
        eyebrow="Beginner's guide"
        title={
          <>
            How to play <span className="text-gradient">Sunflower Game</span>
          </>
        }
        intro="Everything you need for your first day: getting set up, finding your way around the lobby, and a plain-English summary of each game's rules. Read it once and you'll be fine."
      >
        <OnThisPage
          items={[
            { id: "getting-started", label: "Getting started" },
            ...games.map((g) => ({ id: g.slug, label: g.name.replace("Sunflower ", "") })),
            { id: slugify("Finding your way around the app"), label: "Using the app" },
            { id: slugify("Table manners (yes, really)"), label: "Table manners" },
            { id: slugify("Playing smart, not just playing more"), label: "Playing smart" },
          ]}
        />
      </PageHero>

      <Section id="getting-started" className="pt-0!">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Getting started" title="Your first five minutes" />
            <ol className="mt-10 space-y-5">
              {gettingStarted.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold text-ink-950">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1.5 leading-7 text-white/65">
                      {i === 0 ? (
                        <>
                          Get the APK from the official{" "}
                          <Link href="/download" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">
                            Sunflower Game download
                          </Link>{" "}
                          page and install it. It takes about two minutes.
                        </>
                      ) : (
                        s.text
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Image
            src={images.howToPlay}
            alt="Sunflower Game beginner walkthrough showing the lobby, game selection and a practice table"
            width={720}
            height={720}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-[2rem] border border-white/10"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The rules, briefly"
          title="Each game in a nutshell"
          intro="The short version of every game. Tap through to a game's page for the full rules, scoring and strategy."
        />
        <div className="mt-14 space-y-6">
          {games.map((g) => (
            <article key={g.slug} id={g.slug} className="glass scroll-mt-28 grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[280px_1fr]">
              <Image
                src={g.image}
                alt={g.imageAlt}
                width={560}
                height={373}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="w-full rounded-2xl"
              />
              <div>
                <h3 className="text-2xl font-bold">{g.name}</h3>
                <p className="mt-1 text-sm text-white/50">
                  {g.players} · {g.roundTime} · {g.level}
                </p>
                <ol className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {g.steps.map((s, i) => (
                    <li key={s.title} className="flex gap-3 text-[0.95rem] leading-7 text-white/70">
                      <span className="font-display font-bold text-sun-400">{i + 1}.</span>
                      <span>
                        <strong className="text-white">{s.title}.</strong> {s.text}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6">
                  <TextLink href={`/games/${g.slug}`}>Full {g.name} guide</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <RichText
            blocks={[
              { type: "h2", text: "Finding your way around the app" },
              {
                type: "p",
                text: "The **lobby** is home base. Games are listed across the middle, your coin balance and level sit at the top, and the bottom bar takes you to your profile, friends, daily rewards and settings.",
              },
              {
                type: "p",
                text: "Inside a game, you'll see the table types. **Practice** tables are for learning. **Quick Play** seats you with whoever's available. **Private Room** lets you create or join a table using a code. Some games also have tournaments on certain days.",
              },
              { type: "h2", text: "Table manners (yes, really)" },
              {
                type: "p",
                text: "It's a game, and games are more fun when everyone plays nicely. A few unwritten rules the community cares about:",
              },
              {
                type: "ul",
                items: [
                  "Don't leave mid-game unless you have to. It ruins the round for everyone else.",
                  "Take your turn in reasonable time. The timer exists, but nobody enjoys watching it count down every move.",
                  "Keep the sticker spam friendly. A cheeky laugh after a capture is fine; ten in a row is not.",
                  "If you spot someone cheating or colluding, report them from the table menu. We do look at every report.",
                ],
              },
              { type: "h2", text: "Playing smart, not just playing more" },
              {
                type: "p",
                text: "Good players aren't the ones who play the most hours. They're the ones who stop when they're tired, learn from bad rounds, and don't chase losses. Set a reminder in settings, take breaks, and have a look at our [responsible gaming](/responsible-gaming) page if you'd like more tools.",
              },
              {
                type: "p",
                text: "When you're ready to sharpen up, our blog has deeper guides like [Rummy tips for beginners](/blog/rummy-tips-for-beginners) and [Ludo strategies that actually work](/blog/ludo-winning-strategies).",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBanner title="Rules learnt. Now go play." />
    </>
  );
}
