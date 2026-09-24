import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import GameCard from "@/components/GameCard";
import PostCard from "@/components/PostCard";
import FaqList from "@/components/FaqList";
import CtaBanner from "@/components/CtaBanner";
import FeatureIcon from "@/components/FeatureIcon";
import JsonLd from "@/components/JsonLd";
import { SunflowerMark } from "@/components/Logo";
import { AndroidIcon, CheckIcon, DownloadIcon } from "@/components/Icons";
import { games } from "@/data/games";
import { features } from "@/data/features";
import { sortedPosts } from "@/data/blog";
import { homeFaqs } from "@/data/faqs";
import { apkLinkRel, images, siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { appSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const stats = [
  { value: "5", label: "classic games" },
  { value: siteConfig.app.fileSize, label: "download size" },
  { value: "Free", label: "to download" },
  { value: "2–6", label: "players per table" },
];

const installSteps = [
  { title: "Download the APK", text: "Tap the download button on our official page. The file is about 48 MB." },
  { title: "Allow the install", text: "Android will ask for permission to install from your browser. Switch it on once." },
  { title: "Open and play", text: "Launch Sunflower Game, sign in with your number or as a guest, and pick a table." },
];

export default function HomePage() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <>
      <JsonLd data={appSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
        <SunflowerMark className="animate-spin-slow pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] opacity-[0.07]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
          <div>
            <Eyebrow>Rummy · Ludo · Teen Patti · More</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Sunflower Game</span>
              <br />
              Your favourite table games, in one app
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Rummy with your cousins, Ludo with the kids, a quick hand of Teen Patti on your lunch break. Sunflower
              Game puts the games you grew up with on your phone — fast tables, fair deals, and private rooms for the
              people you actually want to play with.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.app.apkUrl} rel={apkLinkRel}>
                <DownloadIcon className="h-5 w-5" />
                Sunflower Game Download
              </ButtonLink>
              <ButtonLink href="/games" variant="ghost">
                Explore the games
              </ButtonLink>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <AndroidIcon className="h-4 w-4" />
              Free for {siteConfig.app.minAndroid} · Version {siteConfig.app.version}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="bg-brand absolute inset-8 rounded-full opacity-40 blur-3xl" aria-hidden="true" />
            <Image
              src={images.hero}
              alt="Sunflower Game app on an Android phone showing the game lobby with Rummy, Ludo, Teen Patti, Callbreak and Carrom tables"
              width={720}
              height={760}
              preload
              sizes="(min-width: 1024px) 560px, 90vw"
              className="animate-float relative w-full drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl px-5 lg:px-8">
          <dl className="glass grid grid-cols-2 gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-white/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Games */}
      <Section id="games">
        <SectionHeading
          eyebrow="The games"
          title={
            <>
              Five classics, <span className="text-gradient">one download</span>
            </>
          }
          intro="No need to install five different apps. Every game below lives inside Sunflower Game, and switching between them takes one tap."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
          <div className="bg-brand-soft flex flex-col justify-center rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-bold">Not sure where to start?</h3>
            <p className="mt-3 leading-7 text-white/65">
              Ludo is the easiest to pick up. If you like thinking a few moves ahead, go for Rummy or Callbreak. Our
              beginner guide covers all five.
            </p>
            <div className="mt-6">
              <TextLink href="/how-to-play">Read the how-to-play guide</TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* About the game – longer SEO copy */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="bg-brand absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl" aria-hidden="true" />
            <Image
              src={images.features}
              alt="Friends playing Sunflower Ludo together in a private room on their phones"
              width={720}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative w-full rounded-[2rem] border border-white/10"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              center={false}
              eyebrow="What is Sunflower Game?"
              title="Built for the way people actually play"
            />
            <div className="mt-6 space-y-5 text-[1.05rem] leading-8 text-white/70">
              <p>
                Sunflower Game started with a simple complaint: why does playing Rummy with friends on a phone mean
                juggling three different apps, each full of pop-ups? We wanted one place for the card and board games
                people in our part of the world play at weddings, on long train rides and after Sunday lunch.
              </p>
              <p>
                So that's what we made. It's a single app with <Link href="/games/rummy" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">13-card Rummy</Link>,{" "}
                <Link href="/games/ludo" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">Ludo</Link>,{" "}
                <Link href="/games/teen-patti" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">Teen Patti</Link>,{" "}
                <Link href="/games/callbreak" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">Callbreak</Link> and{" "}
                <Link href="/games/carrom" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">Carrom</Link>. It
                runs on cheap phones, copes with bad signal, and lets you open a private room so the family group chat
                can finally settle who's the Ludo champion.
              </p>
              <p>
                It's free to download and free to play. There are no forced ads between rounds, and the rules are the
                ones you already know — not some strange regional variant you've never heard of.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Traditional rules", "Private rooms", "Works on 3G/4G", "Practice tables"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85">
                  <span className="bg-brand flex h-6 w-6 items-center justify-center rounded-full text-ink-950">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Small details that make a <span className="text-gradient">big difference</span>
            </>
          }
          intro="We sweated the boring stuff — reconnecting, loading times, readable cards — so the games themselves can shine."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 6).map((f) => (
            <div key={f.title} className="glass rounded-3xl p-7 transition-colors hover:bg-white/[0.06]">
              <FeatureIcon name={f.icon} />
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2.5 leading-7 text-white/65">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <TextLink href="/features">See every feature</TextLink>
        </div>
      </Section>

      {/* Download steps */}
      <Section>
        <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 sm:p-12 lg:p-16">
          <div className="bg-aurora pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Sunflower Game download"
                title="Up and running in under three minutes"
                intro="The app installs straight from our website as an APK. If you've never done that before, don't worry — it's three steps."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/download">
                  <DownloadIcon className="h-5 w-5" />
                  Get the APK
                </ButtonLink>
                <ButtonLink href="/blog/sunflower-game-download-guide" variant="ghost">
                  Full install guide
                </ButtonLink>
              </div>
            </div>
            <ol className="space-y-4">
              {installSteps.map((s, i) => (
                <li key={s.title} className="glass flex gap-5 rounded-2xl p-5">
                  <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold text-ink-950">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-7 text-white/65">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Screenshots */}
      <Section>
        <SectionHeading
          eyebrow="Screenshots"
          title="Take a look inside"
          intro="Clean tables, big readable cards and boards that don't feel cramped on a small screen."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {images.screenshots.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={
                [
                  "Sunflower Game lobby screen listing all available card and board games",
                  "Sunflower Rummy table in the middle of a 13-card round",
                  "Sunflower Ludo board with four players racing their tokens",
                  "Sunflower Game player profile with level, stats and unlocked themes",
                ][i]
              }
              width={360}
              height={740}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className={`w-full rounded-[1.75rem] border border-white/10 shadow-2xl ${i % 2 ? "lg:translate-y-10" : ""}`}
            />
          ))}
        </div>
      </Section>

      {/* Blog */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading center={false} eyebrow="From the blog" title="Guides, tips & updates" />
          <TextLink href="/blog">All articles</TextLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              center={false}
              eyebrow="FAQ"
              title="Questions people ask us"
              intro="The short answers. There's a longer list on the FAQ page if you don't see yours here."
            />
            <div className="mt-8">
              <TextLink href="/faq">Visit the full FAQ</TextLink>
            </div>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
