import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import FeatureIcon from "@/components/FeatureIcon";
import RichText from "@/components/RichText";
import CtaBanner from "@/components/CtaBanner";
import { features } from "@/data/features";
import { images } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sunflower Game Features – Private Rooms, Fair Play & More",
  description:
    "What makes Sunflower Game different: fast matchmaking, private rooms, a light APK for budget phones, fair dealing, daily rewards and play-time controls.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Features", path: "/features" }]}
        eyebrow="Features"
        title={
          <>
            Everything that makes <span className="text-gradient">Sunflower Game</span> tick
          </>
        }
        intro="Great games need more than good rules. Here's what we built around them so your time at the table is quick, fair and actually enjoyable."
      />

      <Section className="pt-0!">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="glass flex flex-col rounded-3xl p-8">
              <FeatureIcon name={f.icon} />
              <h2 className="mt-6 text-xl font-bold">{f.title}</h2>
              <p className="mt-3 font-medium leading-7 text-white/80">{f.text}</p>
              <p className="mt-3 leading-7 text-white/60">{f.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Image
            src={images.screenshots[1]}
            alt="Sunflower Rummy table showing auto-sorted cards, live points counter and quick chat stickers"
            width={360}
            height={740}
            sizes="(min-width: 1024px) 360px, 70vw"
            className="mx-auto w-full max-w-xs rounded-[2rem] border border-white/10 shadow-2xl"
          />
          <div>
            <SectionHeading center={false} eyebrow="Behind the scenes" title="The stuff you don't notice (and shouldn't)" />
            <div className="mt-6">
              <RichText
                blocks={[
                  {
                    type: "p",
                    text: "Most of the work in a game like this is invisible. It's the reconnect that happens quietly when you walk into a lift. It's the card animation that feels snappy on a four-year-old phone. It's making sure the shuffle is properly random and nobody at the table is secretly working together.",
                  },
                  {
                    type: "p",
                    text: "We'd rather spend a month on those details than add another flashy mode nobody asked for. When we do add something new, it's usually because players kept asking — the Ludo team mode and private Callbreak rooms both came from player feedback.",
                  },
                  {
                    type: "p",
                    text: "Got an idea? [Tell us](/contact). We read everything.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <RichText
            blocks={[
              { type: "h2", text: "Designed for real phones and real networks" },
              {
                type: "p",
                text: "A lot of our players are on mid-range or budget Android phones, often on mobile data. So the Sunflower Game download is kept small, the app uses very little data per round, and graphics scale down automatically on slower devices. If you're travelling or your signal is weak, there's a low-data mode that cuts animations even further.",
              },
              { type: "h2", text: "Fair play isn't a feature, it's the baseline" },
              {
                type: "p",
                text: "We don't really like listing fairness as a 'feature', because it should be the minimum. But since it's the first thing people ask about: every card shuffle and dice roll is random and independent. We actively look for bots and collusion, and players can report suspicious behaviour from any table.",
              },
              { type: "h2", text: "Tools to keep it fun" },
              {
                type: "p",
                text: "Games are meant to be a break, not a burden. That's why play-time reminders, cool-off periods and self-pause options sit right in the settings menu rather than buried five screens deep. Read more on our [responsible gaming](/responsible-gaming) page.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
