import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { RichArticle } from "@/components/ArticleLayout";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Sunflower Game collects, uses and protects your information on sunflowergame.net and in the Sunflower Game app.",
  path: "/privacy-policy",
});

// Note: this is a general template. Have it reviewed so it matches exactly how your app handles data.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
        eyebrow="Last updated: September 20, 2026"
        title="Privacy Policy"
        intro="We keep this in plain language. It explains what information we collect, why we need it, and the choices you have."
      />
      <Section className="pt-0!">
        <div>
          <RichArticle
            blocks={[
              { type: "h2", text: "1. Who we are" },
              {
                type: "p",
                text: `This policy covers the website ${siteConfig.domain} and the Sunflower Game mobile app (together, "the Service"). When we say "we" or "us", we mean the team that operates Sunflower Game.`,
              },
              { type: "h2", text: "2. Information we collect" },
              {
                type: "ul",
                items: [
                  "**Account details** – your phone number, display name and avatar.",
                  "**Gameplay data** – games played, results, level, in-app balance and settings.",
                  "**Device information** – phone model, Android version, app version and a device identifier, used to keep the app working and to prevent fraud.",
                  "**Support messages** – anything you send us when you contact support.",
                  "**Website analytics** – anonymous information about how visitors use this website, such as pages viewed.",
                ],
              },
              {
                type: "p",
                text: "We don't collect your contacts, SMS messages, call logs or precise location.",
              },
              { type: "h2", text: "3. How we use it" },
              {
                type: "ul",
                items: [
                  "To run your account and save your progress.",
                  "To match you with other players and keep tables fair.",
                  "To detect cheating, fraud and abuse.",
                  "To answer support requests.",
                  "To improve the app and fix bugs.",
                  "To send important updates about the Service (you can turn off optional notifications).",
                ],
              },
              { type: "h2", text: "4. Sharing" },
              {
                type: "p",
                text: "We don't sell your personal information. We share it only with service providers who help us run the Service (such as hosting, SMS delivery and analytics), when the law requires it, or to protect players from fraud or harm.",
              },
              { type: "h2", text: "5. Cookies" },
              {
                type: "p",
                text: "This website may use a small number of cookies for basic analytics and to remember your preferences. You can block cookies in your browser settings; the site will still work.",
              },
              { type: "h2", text: "6. How long we keep data" },
              {
                type: "p",
                text: "We keep account information while your account is active. If you ask us to delete your account, we remove your personal information within a reasonable time, except where we need to keep certain records for legal or anti-fraud reasons.",
              },
              { type: "h2", text: "7. Your choices" },
              {
                type: "p",
                text: `You can view and update your profile in the app at any time. To request a copy of your data or ask for your account to be deleted, email ${siteConfig.email} from the address or number linked to your account.`,
              },
              { type: "h2", text: "8. Children" },
              {
                type: "p",
                text: "The Service is not intended for anyone under 18. We don't knowingly collect information from children, and we'll delete any account we find belongs to a minor.",
              },
              { type: "h2", text: "9. Security" },
              {
                type: "p",
                text: "We use sensible technical measures — encryption in transit, access controls, and one-time codes for login — to protect your information. No system is perfect, so please keep your phone and OTP codes private.",
              },
              { type: "h2", text: "10. Changes" },
              {
                type: "p",
                text: "If we change this policy, we'll update the date at the top of this page. For big changes, we'll also let you know in the app.",
              },
              { type: "h2", text: "11. Contact" },
              {
                type: "p",
                text: `Questions about privacy? Email ${siteConfig.email} or use our [contact page](/contact).`,
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
