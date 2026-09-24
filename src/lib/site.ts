/**
 * Central site settings. Change values here and they update across the whole site
 * (metadata, structured data, download buttons, footer, etc.).
 */
export const siteConfig = {
  name: "Sunflower Game",
  domain: "sunflowergame.net",
  url: "https://sunflowergame.net",
  locale: "en_US",
  language: "en",
  title: "Sunflower Game – Play Rummy, Ludo & Teen Patti | Free APK",
  description:
    "Play Rummy, Ludo, Teen Patti, Callbreak and Carrom in one light app. Get the free Sunflower Game download for Android and play with friends.",
  keywords: [
    "sunflower game",
    "sunflower game download",
    "sunflower game apk",
    "sunflower game app",
    "sunflower rummy",
    "sunflower ludo",
    "sunflower game apk download",
    "sunflower game latest version",
  ],
  email: "support@sunflowergame.net",
  themeColor: "#0b0717",

  /** Details shown on the download page and in the SoftwareApplication schema. */
  app: {
    version: "1.0.0",
    fileSize: "48 MB",
    minAndroid: "Android 6.0 or higher",
    lastUpdated: "2026-09-20",
    category: "Card & Board Games",
    price: "Free",
    /**
     * Where the "Download APK" button sends people. External links open in a new tab
     * with rel="nofollow sponsored" (see src/app/download/page.tsx).
     */
    apkUrl: "https://www.tpsunflower.com/invite/Inviteweb.html?uid=8848852&scode=C90200&cid=PK01009",
  },

  /** Replace with your real profiles, or leave empty to hide them. */
  social: {
    facebook: "",
    youtube: "",
    telegram: "",
    whatsapp: "",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "How to Play", href: "/how-to-play" },
    { label: "Features", href: "/features" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

/** rel for the APK referral link: Google's recommended marking for sponsored/affiliate links. */
export const apkLinkRel = "nofollow sponsored noopener";

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path === "/" ? "" : path}`;

/**
 * All placeholder images live in /public/images. Swap the files for your own
 * (keep the same names), or change the paths below if you use .webp/.png files.
 */
export const images = {
  logo: "/images/sunflower-game-logo.svg",
  hero: "/images/sunflower-game-hero.svg",
  download: "/images/sunflower-game-download-android.svg",
  howToPlay: "/images/how-to-play-sunflower-game.svg",
  features: "/images/sunflower-game-features.svg",
  about: "/images/about-sunflower-game.svg",
  screenshots: [
    "/images/screenshots/sunflower-game-lobby.svg",
    "/images/screenshots/sunflower-rummy-table.svg",
    "/images/screenshots/sunflower-ludo-board.svg",
    "/images/screenshots/sunflower-game-profile.svg",
  ],
} as const;
