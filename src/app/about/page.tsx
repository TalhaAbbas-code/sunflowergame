import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import RichText from "@/components/RichText";
import CtaBanner from "@/components/CtaBanner";
import { HeartIcon, ShieldIcon, UsersIcon } from "@/components/Icons";
import { images } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Sunflower Game – Who We Are & Why We Built It",
  description:
    "The story behind Sunflower Game: a small team who wanted Rummy, Ludo and other family favourites in one fair, light app that works on any Android phone.",
  path: "/about",
});

const values = [
  {
    icon: UsersIcon,
    title: "Games are better together",
    text: "Private rooms, team modes and quick chat all exist for one reason: the best games are the ones you play with people you know.",
  },
  {
    icon: ShieldIcon,
    title: "Fair, or not at all",
    text: "Random shuffles, honest dice and active anti-cheat. If a game can't be fair, it doesn't go in the app.",
  },
  {
    icon: HeartIcon,
    title: "Fun that stays fun",
    text: "We build in reminders and limits because a game should add to your day, not take it over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About us"
        title={
          <>
            The people behind <span className="text-gradient">Sunflower Game</span>
          </>
        }
        intro="We're a small team of developers, designers and — most importantly — long-time players of the games in this app."
      />

      <Section className="pt-0!">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <RichText
              blocks={[
                { type: "h2", text: "How it started" },
                {
                  type: "p",
                  text: "Sunflower Game began at a family wedding. Somewhere between the mehndi and the baraat, a group of cousins tried to set up a Ludo game on their phones. One app needed an update, another was full of ads, a third didn't support private rooms. By the time everyone was in, the food was cold.",
                },
                {
                  type: "p",
                  text: "That annoyance turned into a side project, and the side project turned into this. The goal was always simple: one app, the classic games people actually play, rules that match what you learnt at home, and nothing that gets in the way.",
                },
                { type: "h2", text: "Why 'Sunflower'?" },
                {
                  type: "p",
                  text: "Sunflowers turn to face the sun and they grow in bunches. It felt like a good fit for a game that's about gathering people around a table and having a bright, warm time. Also, it's much easier to remember than our original working title, which we won't repeat here.",
                },
              ]}
            />
          </div>
          <Image
            src={images.about}
            alt="The Sunflower Game team playing Rummy and Ludo together around a table"
            width={720}
            height={600}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-[2rem] border border-white/10"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we care about" title="Three things we won't compromise on" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-3xl p-8">
              <span className="bg-brand inline-flex h-12 w-12 items-center justify-center rounded-2xl text-ink-950">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <RichText
            blocks={[
              { type: "h2", text: "What we're working on" },
              {
                type: "p",
                text: "Our to-do list is mostly written by players. Right now that means an iOS version, more tournament formats, and a few extra regional variants of Rummy that people keep asking about. Updates arrive through the app, and we post the bigger ones on the [blog](/blog).",
              },
              { type: "h2", text: "Talk to us" },
              {
                type: "p",
                text: "Whether it's a bug, an idea, or you just want to tell us your Ludo winning streak, we'd genuinely like to hear it. The [contact page](/contact) goes straight to the team.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
