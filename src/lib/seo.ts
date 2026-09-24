import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Optional custom social image. Defaults to a generated card with the page title. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Force the title to be used as-is, without the " | Sunflower Game" suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function ogImageUrl(title: string) {
  return `/og?title=${encodeURIComponent(title)}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
  noindex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const socialImage = image ?? ogImageUrl(title);
  // Skip the " | Sunflower Game" suffix when the brand is already in the title,
  // so titles stay under ~60 characters and don't repeat the name.
  const skipTemplate = absoluteTitle || title.includes(siteConfig.name);

  return {
    title: skipTemplate ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
