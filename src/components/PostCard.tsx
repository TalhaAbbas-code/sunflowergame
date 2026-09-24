import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/blog";

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export default function PostCard({ post, headingLevel = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-sun-400/40">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
          <span className="text-sun-300">{post.category}</span>
          <span className="text-white/35" aria-hidden="true">•</span>
          <span className="text-white/50">{post.readingTime}</span>
        </div>
        <Heading className="mt-3 text-lg leading-snug font-bold">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-[0.95rem] leading-7 text-white/60">{post.excerpt}</p>
        <time dateTime={post.date} className="mt-5 text-sm text-white/45">
          {formatDate(post.date)}
        </time>
      </div>
    </article>
  );
}
