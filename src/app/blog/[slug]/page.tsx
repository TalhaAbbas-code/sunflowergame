import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero, Section } from "@/components/ui";
import RichText, { tocFromBlocks } from "@/components/RichText";
import ArticleLayout from "@/components/ArticleLayout";
import PostCard, { formatDate } from "@/components/PostCard";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { getPost, posts, sortedPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          image: post.image,
          date: post.date,
          updated: post.updated,
          author: post.author,
        })}
      />

      <PageHero
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        eyebrow={post.category}
        title={post.title}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
          <span>By {post.author}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updated && (
            <>
              <span aria-hidden="true">•</span>
              <span>
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
            </>
          )}
          <span aria-hidden="true">•</span>
          <span>{post.readingTime}</span>
        </p>
      </PageHero>

      <Section className="pt-0!">
        <article>
          <ArticleLayout
            toc={tocFromBlocks(post.content)}
            intro={
              <>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1200}
                  height={675}
                  preload
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="mb-10 w-full rounded-[2rem] border border-white/10"
                />
                <p className="mb-8 text-xl leading-9 text-white/85">{post.excerpt}</p>
              </>
            }
          >
            <RichText blocks={post.content} />
          </ArticleLayout>
        </article>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">Keep reading</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
