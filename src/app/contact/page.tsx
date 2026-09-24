import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, MailIcon, ShieldIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Sunflower Game Support",
  description:
    "Need help with the Sunflower Game download, your account or a game? Contact the Sunflower Game support team — we usually reply within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title={
          <>
            Get in <span className="text-gradient">touch</span>
          </>
        }
        intro="Stuck on an install, found a bug, or have an idea for a new game mode? Drop us a line. Real people read every message."
      />

      <Section className="pt-0!">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5">
            {[
              {
                icon: MailIcon,
                title: "Email",
                body: (
                  <a href={`mailto:${siteConfig.email}`} className="text-sun-300 hover:underline">
                    {siteConfig.email}
                  </a>
                ),
              },
              { icon: ClockIcon, title: "Response time", body: "Usually within 24 hours, often much sooner." },
              {
                icon: ShieldIcon,
                title: "Stay safe",
                body: "We'll never ask for your OTP or password. Anyone who does isn't from Sunflower Game.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass flex gap-4 rounded-3xl p-6">
                <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-ink-950">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1 leading-7 text-white/65">{body}</p>
                </div>
              </div>
            ))}
            <div className="bg-brand-soft rounded-3xl border border-white/10 p-6">
              <h2 className="font-semibold">Before you write</h2>
              <p className="mt-2 leading-7 text-white/70">
                Most download and install questions are answered in our{" "}
                <Link href="/faq" className="text-sun-300 hover:underline">
                  FAQ
                </Link>{" "}
                and the{" "}
                <Link href="/blog/sunflower-game-download-guide" className="text-sun-300 hover:underline">
                  download guide
                </Link>
                . Worth a quick look — it might save you a wait.
              </p>
            </div>
          </div>

          <div className="gradient-border rounded-[2rem] bg-ink-800 p-7 sm:p-10">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 mb-8 text-white/60">Fill this in and your email app will open with everything ready.</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
