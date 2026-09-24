import { absoluteUrl, images, siteConfig } from "./site";

/** Helpers that return schema.org JSON-LD objects. Render them with <JsonLd />. */

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(images.logo),
  email: siteConfig.email,
  sameAs: Object.values(siteConfig.social).filter(Boolean),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  publisher: { "@id": `${siteConfig.url}/#organization` },
});

export const appSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: siteConfig.name,
  operatingSystem: siteConfig.app.minAndroid,
  applicationCategory: "GameApplication",
  applicationSubCategory: siteConfig.app.category,
  softwareVersion: siteConfig.app.version,
  fileSize: siteConfig.app.fileSize,
  dateModified: siteConfig.app.lastUpdated,
  downloadUrl: absoluteUrl("/download"),
  image: absoluteUrl(images.logo),
  screenshot: images.screenshots.map((s) => absoluteUrl(s)),
  description: siteConfig.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${siteConfig.url}/#organization` },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripInline(f.a) },
  })),
});

export const howToSchema = (
  name: string,
  description: string,
  steps: { title: string; text: string }[],
  image?: string,
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  ...(image ? { image: absoluteUrl(image) } : {}),
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: stripInline(s.text),
  })),
});

export const articleSchema = (post: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  updated?: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: absoluteUrl(post.image),
  datePublished: post.date,
  dateModified: post.updated ?? post.date,
  // Swap to { "@type": "Person", name: "Real Name" } if posts get a named author.
  author: { "@type": "Organization", name: post.author, url: siteConfig.url },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  mainEntityOfPage: absoluteUrl(post.path),
  inLanguage: siteConfig.language,
});

/** Removes the lightweight [link](/path) and **bold** markup used in content files. */
export function stripInline(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}
