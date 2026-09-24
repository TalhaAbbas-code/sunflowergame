import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import FaqList from "@/components/FaqList";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import OnThisPage from "@/components/OnThisPage";
import { AndroidIcon, CheckIcon, DownloadIcon, ShieldIcon } from "@/components/Icons";
import { faqGroups } from "@/data/faqs";
import { apkLinkRel, images, siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { appSchema, howToSchema } from "@/lib/schema";
import { formatDate } from "@/components/PostCard";

export const metadata: Metadata = buildMetadata({
  title: "Sunflower Game Download – Get the Latest APK for Android (Free)",
  description: `Sunflower Game download for Android: get the latest APK (v${siteConfig.app.version}, ${siteConfig.app.fileSize}) free and safely. Step-by-step install guide, requirements and fixes for common errors.`,
  path: "/download",
  absoluteTitle: true,
  keywords: [
    "sunflower game download",
    "sunflower game apk",
    "sunflower game apk download",
    "sunflower game latest version",
    "sunflower game download for android",
    "sunflower game app download",
  ],
});

const steps = [
  {
    title: "Tap the Download APK button",
    text: "Use the button on this page. The official download page opens in a new tab — tap its download button. Your browser might say the file could be harmful; it says that for every APK. Tap Download anyway.",
  },
  {
    title: "Open the downloaded file",
    text: "Pull down your notification bar and tap the finished download, or find the APK in your Downloads folder.",
  },
  {
    title: "Allow installs from this source",
    text: "Android will ask for permission the first time. Tap Settings, switch on 'Allow from this source', then go back.",
  },
  {
    title: "Install and open",
    text: "Tap Install and wait a few seconds. When it finishes, tap Open, sign in with your number or as a guest, and you're in.",
  },
];

const appInfo = [
  { label: "App name", value: siteConfig.name },
  { label: "Latest version", value: siteConfig.app.version },
  { label: "File size", value: siteConfig.app.fileSize },
  { label: "Requires", value: siteConfig.app.minAndroid },
  { label: "Category", value: siteConfig.app.category },
  { label: "Price", value: siteConfig.app.price },
  { label: "Last updated", value: formatDate(siteConfig.app.lastUpdated) },
  { label: "Games included", value: "Rummy, Ludo, Teen Patti, Callbreak, Carrom" },
];

const changelog = [
  "Smoother card dragging and grouping on the Rummy table",
  "New 2v2 team mode in Ludo",
  "Faster reconnection after a dropped signal",
  "Lower battery use on older phones",
  "Various bug fixes and small visual touch-ups",
];

export default function DownloadPage() {
  const isDirectFile = siteConfig.app.apkUrl.endsWith(".apk");
  const isExternal = /^https?:\/\//.test(siteConfig.app.apkUrl);

  return (
    <>
      <JsonLd
        data={[
          appSchema(),
          howToSchema(
            "How to download and install Sunflower Game on Android",
            "Install the Sunflower Game APK on any Android phone in four steps.",
            steps,
            images.download,
          ),
        ]}
      />

      <PageHero
        crumbs={[{ name: "Download", path: "/download" }]}
        eyebrow={`Version ${siteConfig.app.version} · Updated ${formatDate(siteConfig.app.lastUpdated)}`}
        title={
          <>
            <span className="text-gradient">Sunflower Game Download</span> for Android
          </>
        }
        intro="Get the latest Sunflower Game APK straight from the source. It's free, it's about the size of a few photos, and it installs in a couple of minutes — even if you've never installed an app outside the Play Store before."
      >
        <OnThisPage
          items={[
            { id: "get-apk", label: "Download APK" },
            { id: "app-info", label: "App info" },
            { id: "install", label: "How to install" },
            { id: "requirements", label: "Requirements" },
            { id: "whats-new", label: "What's new" },
            { id: "troubleshooting", label: "Install problems" },
            { id: "iphone-and-pc", label: "iPhone & PC" },
            { id: "faq", label: "FAQ" },
          ]}
        />
      </PageHero>

      <Section className="pt-0!">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          {/* Download card */}
          <div id="get-apk" className="gradient-border relative scroll-mt-28 overflow-hidden rounded-[2rem] bg-ink-800 p-8 sm:p-10">
            <div className="bg-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-5">
                <Image
                  src={images.logo}
                  alt="Sunflower Game app icon"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-2xl"
                />
                <div>
                  <h2 className="text-2xl font-bold">Sunflower Game APK</h2>
                  <p className="mt-1 text-white/60">
                    v{siteConfig.app.version} · {siteConfig.app.fileSize} · {siteConfig.app.price}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.app.apkUrl}
                {...(isDirectFile ? { download: "sunflower-game.apk" } : {})}
                {...(isExternal
                  ? // Referral link: "nofollow sponsored" tells Google not to pass ranking credit (its rule for affiliate links).
                    { target: "_blank", rel: apkLinkRel }
                  : {})}
                className="bg-brand mt-8 flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-5 font-display text-lg font-bold text-ink-950 shadow-xl shadow-ember-500/30 transition-transform hover:-translate-y-0.5"
              >
                <DownloadIcon className="h-6 w-6" />
                Download APK ({siteConfig.app.fileSize})
              </a>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Official download link", "No sign-up to download", "Keeps progress on update", "Works on budget phones"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-white/80">
                      <CheckIcon className="h-4 w-4 shrink-0 text-sun-400" />
                      {t}
                    </li>
                  ),
                )}
              </ul>

              <p className="mt-7 flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-white/65">
                <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-sun-400" />
                Only download Sunflower Game using the link on sunflowergame.net. Files called &ldquo;mod&rdquo; or
                &ldquo;unlimited coins&rdquo; on other sites are not ours and may be unsafe.
              </p>
            </div>
          </div>

          {/* App info */}
          <div id="app-info" className="glass scroll-mt-28 rounded-[2rem] p-8 sm:p-10">
            <h2 className="flex items-center gap-3 text-2xl font-bold">
              <AndroidIcon className="h-7 w-7 text-sun-400" />
              App information
            </h2>
            <table className="mt-6 w-full text-left text-[0.95rem]">
              <caption className="sr-only">Sunflower Game APK details</caption>
              <tbody>
                {appInfo.map((row) => (
                  <tr key={row.label} className="border-b border-white/8 last:border-0">
                    <th scope="row" className="py-3.5 pr-4 font-medium text-white/55">
                      {row.label}
                    </th>
                    <td className="py-3.5 text-right font-medium text-white">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Install steps */}
      <Section id="install">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Installation"
              title="How to install the Sunflower Game APK"
              intro="Four quick steps. You only need to allow installs from your browser once — after that, updates are even quicker."
            />
            <ol className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-lg font-extrabold text-ink-950">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1.5 leading-7 text-white/65">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Image
            src={images.download}
            alt="Step-by-step screens showing how to download and install the Sunflower Game APK on an Android phone"
            width={720}
            height={720}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full rounded-[2rem] border border-white/10"
          />
        </div>
      </Section>

      {/* Long-form content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <RichText
            blocks={[
              { type: "h2", text: "Phone requirements", id: "requirements" },
              {
                type: "p",
                text: "Sunflower Game is deliberately light. If your phone can run WhatsApp and YouTube comfortably, it'll run this. Here's what you need:",
              },
              {
                type: "ul",
                items: [
                  `**Android version:** ${siteConfig.app.minAndroid}`,
                  "**RAM:** 2 GB or more (3 GB+ feels smoother)",
                  "**Free storage:** about 150 MB after installation",
                  "**Internet:** Wi-Fi, 4G or a stable 3G connection for online tables",
                ],
              },
              { type: "h2", text: "What's new in this version", id: "whats-new" },
              { type: "ul", items: changelog },
              {
                type: "p",
                text: "Already have the app? You don't need to uninstall anything. Download the new APK and install it over the top — your account, coins and settings stay exactly as they were. More detail in our guide to [updating Sunflower Game](/blog/how-to-update-sunflower-game-latest-version).",
              },
              { type: "h2", text: "If the install doesn't work", id: "troubleshooting" },
              {
                type: "p",
                text: "Nine times out of ten, it's one of these three things:",
              },
              {
                type: "ul",
                items: [
                  "**\"App not installed\"** – an older copy from another website is probably on your phone. Uninstall it, then install ours.",
                  "**\"Problem parsing the package\"** – the download was interrupted. Delete the file and download again, ideally on Wi-Fi.",
                  "**Play Protect warning** – it appears for many apps outside the Play Store. If the file came from this page, tap More details → Install anyway.",
                ],
              },
              {
                type: "p",
                text: "Still stuck? [Send us a message](/contact) with your phone model and a screenshot of the error, and we'll sort it out.",
              },
              { type: "h2", text: "iPhone and PC", id: "iphone-and-pc" },
              {
                type: "p",
                text: "Right now Sunflower Game is Android only. iPhones can't install APK files, and we'd rather wait for a proper iOS release than point you to risky workarounds. Some players use an Android emulator on their PC — it usually works, but it isn't something we officially support.",
              },
              {
                type: "tip",
                title: "First time playing?",
                text: "Once the app is installed, spend five minutes on our [how to play guide](/how-to-play). It covers the basics of every game so you don't get caught out on your first table.",
              },
            ]}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="Download FAQ" title="Sunflower Game download questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList faqs={faqGroups[1].faqs} />
          <p className="mt-8 text-center text-white/60">
            More answers on the <Link href="/faq" className="text-sun-300 hover:underline">FAQ page</Link>.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Grab it and deal yourself in"
        text="Download the APK, pick a game, and you'll be at a table in minutes. If you get stuck anywhere, we're a message away."
      />
    </>
  );
}
