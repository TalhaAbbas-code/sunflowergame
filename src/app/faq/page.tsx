import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import FaqList from "@/components/FaqList";
import OnThisPage from "@/components/OnThisPage";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { allFaqs, faqGroups } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sunflower Game FAQ – Download, Gameplay & Account Questions",
  description:
    "Answers to common Sunflower Game questions: is it free, where to get the Sunflower Game download, iPhone support, fair play, account safety and updates.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      {/* One FAQPage schema for the whole page, so the lists below skip their own. */}
      <JsonLd data={faqSchema(allFaqs)} />

      <PageHero
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        eyebrow="Help centre"
        title={
          <>
            Frequently asked <span className="text-gradient">questions</span>
          </>
        }
        intro="Quick answers to the things people ask us most. Can't find what you need? Our support team is happy to help."
      >
        <OnThisPage items={faqGroups.map((g) => ({ id: g.id, label: g.title }))} />
      </PageHero>

      <Section className="pt-0!">
        <div className="mx-auto max-w-3xl space-y-16">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{g.title}</h2>
              <FaqList faqs={g.faqs} withSchema={false} />
            </section>
          ))}
          <div className="bg-brand-soft rounded-3xl border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Still have a question?</h2>
            <p className="mt-3 text-white/70">
              Send us a message and we&apos;ll get back to you, usually within a day.
            </p>
            <Link
              href="/contact"
              className="bg-brand mt-6 inline-flex rounded-full px-7 py-3 font-semibold text-ink-950"
            >
              Contact support
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
