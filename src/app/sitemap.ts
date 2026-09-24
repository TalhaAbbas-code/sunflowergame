import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { games } from "@/data/games";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(siteConfig.app.lastUpdated);

  const staticPages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/download", priority: 0.95, freq: "weekly" },
    { path: "/games", priority: 0.9, freq: "monthly" },
    { path: "/how-to-play", priority: 0.8, freq: "monthly" },
    { path: "/features", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.4, freq: "yearly" },
    { path: "/responsible-gaming", priority: 0.4, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.2, freq: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, freq: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: updated,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...games.map((g) => ({
      url: absoluteUrl(`/games/${g.slug}`),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
