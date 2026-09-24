import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import PostCard from "@/components/PostCard";
import CtaBanner from "@/components/CtaBanner";
import { sortedPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sunflower Game Blog – Guides, Rummy & Ludo Tips, Updates",
  description:
    "Guides for the Sunflower Game app: how to download and update the APK, safety tips, Rummy strategy for beginners and Ludo tactics that actually work.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = sortedPosts();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog" }]}
        eyebrow="Blog"
        title={
          <>
            Guides, tips & <span className="text-gradient">table talk</span>
          </>
        }
        intro="Straightforward help for getting the app running, plus strategy pieces for when you want to win a few more hands. Written by people who play these games every week."
      />
      <Section className="pt-0!">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} headingLevel="h2" />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
