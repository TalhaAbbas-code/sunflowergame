import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { RichArticle } from "@/components/ArticleLayout";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming at Sunflower Game",
  description:
    "How Sunflower Game helps you keep play healthy: age limits, play-time reminders, cool-off periods, self-pause and signs that it might be time to take a break.",
  path: "/responsible-gaming",
});

export default function ResponsibleGamingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Responsible Gaming", path: "/responsible-gaming" }]}
        eyebrow="Play well"
        title={
          <>
            Responsible <span className="text-gradient">gaming</span>
          </>
        }
        intro="Card and board games should be a bright spot in your day. Here's how we help keep it that way, and what you can do if it ever stops feeling fun."
      />
      <Section className="pt-0!">
        <div>
          <RichArticle
            blocks={[
              { type: "h2", text: "18+ only" },
              {
                type: "p",
                text: "Sunflower Game is intended for adults aged 18 and over. If we learn that an account belongs to someone under 18, we'll close it. Parents, you can use Android's Family Link or similar parental controls to block app installs on your children's phones.",
              },
              { type: "h2", text: "Check your local rules" },
              {
                type: "p",
                text: "Laws around online card games differ between countries and even between states or provinces. Some game modes may not be available where you live. It's your responsibility to make sure playing is allowed in your area.",
              },
              { type: "h2", text: "Tools inside the app" },
              {
                type: "ul",
                items: [
                  "**Play-time reminders** – get a gentle nudge after 30, 60 or 90 minutes of play.",
                  "**Take a break** – lock yourself out for 24 hours, 72 hours or a week with one tap.",
                  "**Self-pause** – pause your account for a longer period. We won't reopen it early, even if you ask.",
                  "**Spending limits** – if you buy optional extras, you can set a daily or monthly cap.",
                ],
              },
              {
                type: "p",
                text: "You'll find all of these under **Settings → Play Well**.",
              },
              { type: "h2", text: "Signs it might be time for a break" },
              {
                type: "p",
                text: "Everyone gets carried away now and then. But if a few of these sound familiar, it's worth stepping back:",
              },
              {
                type: "ul",
                items: [
                  "You're playing much longer than you meant to, most days.",
                  "You feel irritated or restless when you can't play.",
                  "You're spending money you'd planned to use for something else.",
                  "You keep playing to 'win back' what you lost.",
                  "Games are getting in the way of sleep, work, studies or family time.",
                ],
              },
              { type: "h2", text: "Simple habits that help" },
              {
                type: "ul",
                items: [
                  "Decide how long you'll play before you open the app — and set a reminder.",
                  "Treat any money spent on games as entertainment, like a cinema ticket. Never as a way to earn.",
                  "Don't play when you're upset, tired or have been drinking.",
                  "Balance game time with other things you enjoy.",
                ],
              },
              { type: "h2", text: "Getting support" },
              {
                type: "p",
                text: `If you're worried about your own play or someone else's, talk to someone you trust, or reach out to a local counselling or gambling-support service in your country. You can also email us at ${siteConfig.email} and we'll help set up limits or pause your account straight away. No judgement, no questions you don't want to answer.`,
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
