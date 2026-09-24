import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { RichArticle } from "@/components/ArticleLayout";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply when you use sunflowergame.net and the Sunflower Game app.",
  path: "/terms-and-conditions",
});

// Note: this is a general template. Have it reviewed so it fits your business and the countries you operate in.
export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Terms & Conditions", path: "/terms-and-conditions" }]}
        eyebrow="Last updated: September 20, 2026"
        title="Terms & Conditions"
        intro="The ground rules for using Sunflower Game. Please read them — they're shorter than most."
      />
      <Section className="pt-0!">
        <div>
          <RichArticle
            blocks={[
              { type: "h2", text: "1. Accepting these terms" },
              {
                type: "p",
                text: `By using ${siteConfig.domain} or the Sunflower Game app, you agree to these terms. If you don't agree, please don't use the Service.`,
              },
              { type: "h2", text: "2. Eligibility" },
              {
                type: "p",
                text: "You must be at least 18 years old and allowed to use online card and board games where you live. You're responsible for checking your local laws.",
              },
              { type: "h2", text: "3. Your account" },
              {
                type: "ul",
                items: [
                  "One account per person. Duplicate accounts may be closed.",
                  "Keep your login details and OTP codes private. You're responsible for activity on your account.",
                  "Give accurate information when you sign up.",
                ],
              },
              { type: "h2", text: "4. Fair play" },
              {
                type: "p",
                text: "Don't cheat. That includes using bots, scripts or modified versions of the app, colluding with other players, exploiting bugs, or sharing accounts. We may suspend or close accounts that break these rules and remove any benefits gained unfairly.",
              },
              { type: "h2", text: "5. Behaviour" },
              {
                type: "p",
                text: "Be respectful. Harassment, hate speech, scams and impersonating our staff are not allowed. Use the report button if someone makes the table unpleasant.",
              },
              { type: "h2", text: "6. Virtual items" },
              {
                type: "p",
                text: "Coins, themes and other in-app items are licensed to you for use within the app. They have no value outside the Service and can't be transferred except where the app allows it.",
              },
              { type: "h2", text: "7. Downloads" },
              {
                type: "p",
                text: "Only download the app using the link on sunflowergame.net. We aren't responsible for problems caused by copies obtained from anywhere else.",
              },
              { type: "h2", text: "8. Availability" },
              {
                type: "p",
                text: "We work hard to keep the Service running, but we can't promise it will always be available or error-free. We may change, pause or remove features at any time.",
              },
              { type: "h2", text: "9. Limitation of liability" },
              {
                type: "p",
                text: "To the extent allowed by law, the Service is provided \"as is\", and we're not liable for indirect or consequential losses arising from your use of it.",
              },
              { type: "h2", text: "10. Changes to these terms" },
              {
                type: "p",
                text: "We may update these terms from time to time. We'll change the date above, and continued use of the Service means you accept the updated terms.",
              },
              { type: "h2", text: "11. Contact" },
              {
                type: "p",
                text: `Questions? Email ${siteConfig.email} or visit the [contact page](/contact). See also our [privacy policy](/privacy-policy) and [responsible gaming](/responsible-gaming) page.`,
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
