# sunflowergame.net

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where to change things

| What | File |
| --- | --- |
| Site name, email, app version, file size, **APK download link**, social links | `src/lib/site.ts` |
| Image paths | `src/lib/site.ts` (`images`), `src/data/games.ts`, `src/data/blog.ts` |
| Game pages (rules, tips, FAQs) | `src/data/games.ts` |
| Blog posts | `src/data/blog.ts` |
| FAQ page | `src/data/faqs.ts` |
| Features | `src/data/features.ts` |
| Colours & gradients | `src/app/globals.css` |
| Google Search Console verification | `src/app/layout.tsx` (`verification`) |

### Replacing images

All placeholders are in `public/images/`. The easiest way is to keep the same file names.
If you use `.webp`/`.png`/`.jpg` instead of `.svg`, update the path in the files listed above.
Recommended sizes:

- Game images: 900×600 (`public/images/games/`)
- Blog covers: 1200×675 (`public/images/blog/`)
- Screenshots: 360×740 portrait (`public/images/screenshots/`)
- Hero: 720×760, transparent background works best
- Logo / app icon: 256×256

Alt text is already written for every image. If your new picture shows something different, update its `alt`.

### Adding a blog post

Add a new object to the `posts` array in `src/data/blog.ts`. The page, the sitemap entry and the structured data
are created automatically. Inside the text you can use `[link text](/path)` for links and `**bold**`.

## SEO included

- Unique title, description and canonical URL on every page
- Open Graph and Twitter cards, with a share image generated per page (`/og?title=...`)
- `sitemap.xml`, `robots.txt` and a web manifest, all generated
- JSON-LD structured data: Organization, WebSite, MobileApplication, BreadcrumbList, FAQPage, HowTo, BlogPosting, ItemList
- One `<h1>` per page, logical heading order, breadcrumbs, and internal links between related pages
- Static pages (fast), optimised fonts, lazy-loaded images, and a `www` → non-www redirect

## After you launch

1. Deploy (Vercel is the simplest option for Next.js) and point `sunflowergame.net` at it.
2. Add the site to Google Search Console, then submit `https://sunflowergame.net/sitemap.xml`.
3. Put the real APK link in `siteConfig.app.apkUrl`.
4. Keep publishing blog posts. Fresh, useful content helps rankings more than anything else.
