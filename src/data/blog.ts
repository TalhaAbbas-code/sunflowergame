import type { Block } from "@/components/RichText";

export type Post = {
  slug: string;
  title: string;
  /** Shorter title for Google results (≈60 chars). Falls back to `title`. */
  seoTitle?: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  readingTime: string;
  author: string;
  image: string;
  imageAlt: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "sunflower-game-download-guide",
    title: "Sunflower Game Download: A Simple, Safe Guide for Android",
    metaDescription:
      "Step-by-step Sunflower Game download guide for Android. How to install the APK, allow unknown sources, fix common install errors and stay safe.",
    excerpt:
      "Installing an app outside the Play Store sounds scarier than it is. Here's exactly how to get the Sunflower Game APK onto your phone in a few minutes — and the few things worth checking first.",
    category: "Guides",
    date: "2026-09-10",
    updated: "2026-09-20",
    readingTime: "6 min read",
    author: "Sunflower Game Team",
    image: "/images/blog/sunflower-game-download-guide.svg",
    imageAlt: "Android phone showing the Sunflower Game APK download and install screen with a progress bar",
    content: [
      {
        type: "p",
        text: "We get this question more than any other: \"How do I actually download Sunflower Game?\" Fair enough. Most people have only ever installed apps from the Play Store, so the idea of downloading an APK file feels a bit like wandering off the path. The good news is it's a few taps, and once you've done it once you'll never think about it again.",
      },
      {
        type: "p",
        text: "This guide covers the whole thing, start to finish. If you just want the button, it's on the [download page](/download). If you want to understand what you're doing — which we'd recommend — keep reading.",
      },
      { type: "h2", text: "What you need before you start" },
      {
        type: "ul",
        items: [
          "An Android phone running **Android 6.0 or newer**. Almost every phone sold in the last eight years qualifies.",
          "Around **150 MB of free space**. The APK itself is smaller, but the game unpacks some files after install.",
          "A stable connection — Wi-Fi is best, but mobile data works fine.",
          "About three minutes.",
        ],
      },
      { type: "h2", text: "Step 1: Download the APK from the right place" },
      {
        type: "p",
        text: "This is the part that actually matters. Only download the Sunflower Game APK using the link on **sunflowergame.net**. There are copycat sites that bundle old versions or, worse, modified files. If a site is offering a \"mod\" with unlimited coins, close the tab. Those files are the most common way people end up with junk on their phone.",
      },
      {
        type: "p",
        text: "Head to our [download page](/download) and tap the big Download APK button. The official download page opens in a new tab — tap the download button there. Your browser may show a warning like \"This type of file can harm your device.\" That message appears for every APK, from every website, regardless of what it is. Tap **Download anyway**.",
      },
      { type: "h2", text: "Step 2: Allow installs from your browser" },
      {
        type: "p",
        text: "Android blocks installs from outside the Play Store by default, which is sensible. You only need to give permission to the specific app you're using to open the file — usually Chrome.",
      },
      {
        type: "ol",
        items: [
          "Open the downloaded file from your notification bar or the Downloads folder.",
          "Android will say installs from this source aren't allowed. Tap **Settings**.",
          "Switch on **Allow from this source**.",
          "Press back, and the install screen will appear.",
        ],
      },
      {
        type: "tip",
        title: "Worth knowing",
        text: "You can switch that permission off again after installing. It won't affect Sunflower Game at all — the app is already installed. It just stops Chrome installing anything else without asking.",
      },
      { type: "h2", text: "Step 3: Install and open" },
      {
        type: "p",
        text: "Tap **Install**. It takes 10 to 30 seconds depending on your phone. When it's done, tap **Open**, and you'll see the Sunflower Game loading screen. The first launch downloads a few extra graphics, so give it a moment.",
      },
      {
        type: "p",
        text: "From there you can sign up with your phone number or play as a guest. Guest mode is fine for trying things out, but if you want your progress saved across phones, link a number.",
      },
      { type: "h2", text: "Common problems (and quick fixes)" },
      { type: "h3", text: "\"App not installed\"" },
      {
        type: "p",
        text: "Usually this means an older version is already on the phone and something doesn't match. Uninstall the old one, then install the fresh download. If that doesn't do it, check you have enough free storage.",
      },
      { type: "h3", text: "\"There was a problem parsing the package\"" },
      {
        type: "p",
        text: "The download didn't finish properly. Delete the file and download it again, ideally on Wi-Fi.",
      },
      { type: "h3", text: "Play Protect warning" },
      {
        type: "p",
        text: "Google Play Protect sometimes flags apps simply because they weren't installed through the Play Store. If you used the download link on our site, tap **More details → Install anyway**. If you downloaded from anywhere else, don't — delete it and grab the real file.",
      },
      { type: "h2", text: "What about iPhone?" },
      {
        type: "p",
        text: "Right now Sunflower Game is Android only. iPhones don't allow APK files, and we're not going to suggest workarounds that involve sketchy profiles. When an iOS version is ready, we'll announce it here on the [blog](/blog).",
      },
      { type: "h2", text: "Keeping the game updated" },
      {
        type: "p",
        text: "The app tells you when a new version is out. If you ever want to check manually, we wrote a short guide on [how to update Sunflower Game](/blog/how-to-update-sunflower-game-latest-version). Updates keep your progress, so there's nothing to lose.",
      },
    ],
  },
  {
    slug: "how-to-update-sunflower-game-latest-version",
    title: "How to Update Sunflower Game to the Latest Version (Without Losing Progress)",
    seoTitle: "How to Update Sunflower Game to the Latest Version",
    metaDescription:
      "Get the Sunflower Game latest version in minutes. How in-app updates work, how to update the APK manually, and what to do if an update fails.",
    excerpt:
      "New tables, bug fixes and smoother gameplay usually arrive through updates. Here's how to make sure you're on the latest version of Sunflower Game — and why your coins and progress are safe.",
    category: "Guides",
    date: "2026-09-14",
    readingTime: "4 min read",
    author: "Sunflower Game Team",
    image: "/images/blog/update-sunflower-game-latest-version.svg",
    imageAlt: "Sunflower Game update screen on an Android phone showing the latest version number and an update button",
    content: [
      {
        type: "p",
        text: "If a table is acting weird, or a friend can see a game mode you can't, the first thing to check is your version. Updates are how we fix bugs and add new stuff, and running an old build is the most common reason things look different on two phones.",
      },
      { type: "h2", text: "Option 1: Update from inside the app" },
      {
        type: "p",
        text: "This is the easy way. When a new version is released, you'll see a pop-up the next time you open Sunflower Game. Tap **Update**, let it download, then tap **Install** when Android asks. That's it — the game reopens on the new version.",
      },
      {
        type: "p",
        text: "If you tapped \"Later\" and now can't find the prompt, go to **Settings → About** inside the app and tap **Check for updates**.",
      },
      { type: "h2", text: "Option 2: Update manually with the new APK" },
      {
        type: "ol",
        items: [
          "Visit the [Sunflower Game download page](/download) and check the version number listed there.",
          "Download the latest APK.",
          "Open the file and tap **Update** (not Install — Android recognises it's the same app).",
          "Open the game and confirm the version under Settings → About.",
        ],
      },
      {
        type: "tip",
        title: "Don't uninstall first",
        text: "Installing the new APK over the old one keeps all your local settings. You only need to uninstall if Android refuses to update, and even then your account progress stays safe on our servers as long as you're logged in with a phone number.",
      },
      { type: "h2", text: "Will I lose my coins or progress?" },
      {
        type: "p",
        text: "No, provided your account is linked. Your balance, level, friends list and history are stored on the server, not on your phone. Guest accounts are the exception: they live on the device, so if you uninstall a guest account, it's gone. That's the main reason we suggest linking a number early.",
      },
      { type: "h2", text: "When the update won't install" },
      {
        type: "ul",
        items: [
          "**Not enough space** – clear a few hundred MB and try again.",
          "**\"App not installed\"** – your current copy may have come from a different source. Back up by logging in with your number, uninstall, then install the official APK.",
          "**Update stuck at 99%** – switch from mobile data to Wi-Fi (or the other way round) and retry.",
        ],
      },
      {
        type: "p",
        text: "Still stuck? Drop us a line through the [contact page](/contact) with your phone model and the error you see. A screenshot helps a lot.",
      },
    ],
  },
  {
    slug: "is-sunflower-game-safe",
    title: "Is Sunflower Game Safe? What to Check Before Installing Any Game APK",
    seoTitle: "Is Sunflower Game Safe? What to Check Before Installing",
    metaDescription:
      "Is Sunflower Game safe to download? An honest look at APK safety, app permissions, fake mod versions and the checks you should do before installing any game.",
    excerpt:
      "It's a reasonable question to ask about any app that isn't on the Play Store. Here's our honest answer, plus a checklist you can use for any game APK — not just ours.",
    category: "Safety",
    date: "2026-09-02",
    readingTime: "5 min read",
    author: "Sunflower Game Team",
    image: "/images/blog/is-sunflower-game-safe.svg",
    imageAlt: "Shield icon over an Android phone running Sunflower Game, representing a safe and verified APK download",
    content: [
      {
        type: "p",
        text: "Short answer: the version you get through the download link on sunflowergame.net is safe. But we know \"trust us\" isn't much of an answer, so let's go through what actually makes an APK safe or unsafe, and how you can check for yourself.",
      },
      { type: "h2", text: "The real risk isn't APKs — it's where they come from" },
      {
        type: "p",
        text: "An APK is just the installer format Android uses. Every app on the Play Store is an APK under the hood. The file type isn't dangerous. What's risky is downloading a file that someone has modified. Copycat sites take popular games, add ad-injectors or data-harvesting code, and upload them with names like \"Sunflower Game Mod Unlimited Money\".",
      },
      {
        type: "p",
        text: "So the single most important rule is: get the file from the official source. For Sunflower Game, that's our [download page](/download) and nowhere else.",
      },
      { type: "h2", text: "A quick safety checklist for any game APK" },
      {
        type: "ol",
        items: [
          "**Check the domain.** Official sites don't usually live on long random URLs or free hosting subdomains.",
          "**Ignore anything called 'mod', 'hack' or 'unlimited'.** Real developers never release these.",
          "**Look at the permissions.** A card or board game has no business reading your SMS or call logs.",
          "**Check the file size.** If it's wildly different from what the official site lists, something's been added or removed.",
          "**Keep Play Protect on.** It's a useful second opinion, even for apps outside the Play Store.",
        ],
      },
      { type: "h2", text: "What permissions does Sunflower Game ask for?" },
      {
        type: "p",
        text: "Very few. The app needs **internet access** to connect you to tables, and **storage** access for caching game graphics so they don't re-download every time. If you use the optional profile picture feature, it'll ask for access to your photos at that moment — and you can say no. We don't ask for contacts, SMS, call logs or location.",
      },
      {
        type: "tip",
        title: "Check for yourself",
        text: "Long-press the Sunflower Game icon, tap App info → Permissions. You'll see exactly what's allowed and can switch anything off.",
      },
      { type: "h2", text: "What about your account and payments?" },
      {
        type: "p",
        text: "Your account is tied to your phone number and protected with a one-time code. We'll never ask for your password or OTP over chat, WhatsApp or phone. If someone claiming to be \"Sunflower support\" asks for your code, it's a scam — report it to us through the [contact page](/contact).",
      },
      { type: "h2", text: "Playing responsibly is part of being safe" },
      {
        type: "p",
        text: "Safety isn't only about files and permissions. Card games are designed to be engaging, and it's easy to lose track of time. We've put together a page on [responsible gaming](/responsible-gaming) with practical tools like play reminders and limits. Worth a look, even if you think you don't need it.",
      },
    ],
  },
  {
    slug: "rummy-tips-for-beginners",
    title: "10 Rummy Tips for Beginners That Actually Make a Difference",
    seoTitle: "10 Rummy Tips for Beginners",
    metaDescription:
      "New to 13-card Rummy? These 10 practical Rummy tips for beginners will help you build sequences faster, lose fewer points and win more rounds in Sunflower Game.",
    excerpt:
      "Skip the generic advice. These are the ten habits that separate players who win the occasional round from players who win consistently.",
    category: "Strategy",
    date: "2026-08-25",
    readingTime: "7 min read",
    author: "Sunflower Game Team",
    image: "/images/blog/rummy-tips-for-beginners.svg",
    imageAlt: "Hand of 13 rummy cards sorted into a pure sequence, an impure sequence with a joker, and a set",
    content: [
      {
        type: "p",
        text: "Most Rummy advice online is either too basic (\"try to make sequences!\") or so advanced it's useless for someone who still double-checks what a pure sequence is. This list sits in the middle. These are the things we see new players get wrong over and over at the [Sunflower Rummy](/games/rummy) tables — and how to fix them.",
      },
      { type: "h2", text: "1. Make your pure sequence your first job" },
      {
        type: "p",
        text: "You can't declare without one. That means every other combination you build is on hold until you've got it. When you look at your opening hand, find the two or three cards closest to forming a pure sequence and protect them.",
      },
      { type: "h2", text: "2. Sort your cards the moment they're dealt" },
      {
        type: "p",
        text: "Hit sort, then spend five seconds looking. Group by suit, notice the near-sequences, and mentally mark the cards that don't fit anything. Players who skip this end up discarding cards they needed three turns later.",
      },
      { type: "h2", text: "3. Get rid of high cards that aren't working" },
      {
        type: "p",
        text: "A lonely King is worth 10 points against you if someone declares. If it hasn't connected to anything after a few turns, let it go. Low cards are cheaper to be stuck with.",
      },
      { type: "h2", text: "4. Middle cards are more flexible than edges" },
      {
        type: "p",
        text: "A 6 can become part of 4-5-6, 5-6-7 or 6-7-8. An Ace or a King has fewer ways in. When you're choosing between two similar discards, keep the middle card.",
      },
      { type: "h2", text: "5. Watch the open pile like a hawk" },
      {
        type: "p",
        text: "Every card someone picks from the open pile tells you what they're building. If the player on your left picks up 8♠, you now know not to throw them the 7♠ or 9♠. This is the single most underused skill among beginners.",
      },
      { type: "h2", text: "6. Use jokers on the hardest gaps" },
      {
        type: "p",
        text: "Don't waste a joker completing a set you could easily finish naturally. Save it for the awkward spot — a sequence missing one card in the middle, for example.",
      },
      { type: "h2", text: "7. Know when to drop" },
      {
        type: "p",
        text: "If your first hand has no near-sequences and no jokers, dropping at the start costs you a small fixed penalty. Playing it out and getting caught with a full hand costs a lot more. Dropping isn't giving up; it's damage control.",
      },
      { type: "h2", text: "8. Don't pick from the open pile just because you can" },
      {
        type: "p",
        text: "Picking an open card announces your plan to the whole table. Only do it when the card clearly helps. Otherwise draw from the closed deck and keep people guessing.",
      },
      { type: "h2", text: "9. Double-check before you declare" },
      {
        type: "p",
        text: "A wrong declaration is one of the most painful penalties in the game. Take one extra second: is there a pure sequence? Are there at least two sequences? Are all 13 cards grouped? Then finish.",
      },
      { type: "h2", text: "10. Practise before you play seriously" },
      {
        type: "p",
        text: "The practice tables in Sunflower Game exist for exactly this. Play twenty or thirty hands there, get comfortable, and then move to regular tables. Your win rate will thank you.",
      },
      {
        type: "tip",
        title: "Want the full rules?",
        text: "Our [Rummy game page](/games/rummy) breaks down sequences, sets and scoring in detail, and the [how to play guide](/how-to-play) covers the basics for every game in the app.",
      },
    ],
  },
  {
    slug: "ludo-winning-strategies",
    title: "Ludo Strategies That Actually Work (Even When the Dice Hates You)",
    seoTitle: "Ludo Winning Strategies That Actually Work",
    metaDescription:
      "Win more Ludo games with these practical strategies: when to capture, how to use safe squares, spreading your tokens and playing smart in the final stretch.",
    excerpt:
      "Ludo looks like pure luck, but after a few hundred games you start seeing patterns. Here's what the players who win most often are doing differently.",
    category: "Strategy",
    date: "2026-08-18",
    readingTime: "6 min read",
    author: "Sunflower Game Team",
    image: "/images/blog/ludo-winning-strategies.svg",
    imageAlt: "Ludo board mid-game with tokens on safe star squares and one token about to capture an opponent",
    content: [
      {
        type: "p",
        text: "Let's be honest: sometimes you'll lose at Ludo because the dice just won't give you a six. No strategy fixes that. But across a bunch of games, the players who make better choices win noticeably more. Here's what they do.",
      },
      { type: "h2", text: "Spread out, don't sprint" },
      {
        type: "p",
        text: "The most common beginner move is picking one token and running it all the way home. It feels like progress, but it leaves you with only one choice on every roll. Two or three tokens on the board give you options — and options are how you avoid being captured and how you capture others.",
      },
      { type: "h2", text: "Learn to count danger" },
      {
        type: "p",
        text: "Any opponent token 1 to 6 squares behind you can hit you on the next roll. Seven to twelve squares back, they'd need a six plus another roll. Before every move, glance behind the token you're moving. If you're about to land 3 squares in front of a rival, maybe move a different token.",
      },
      { type: "h2", text: "Safe squares are your best friend" },
      {
        type: "p",
        text: "The star squares on the board can't be attacked. If you're being chased, parking on a star for a turn or two while the threat passes is often the smartest move on the board. It isn't exciting, but it wins games.",
      },
      { type: "h2", text: "Capture when it matters" },
      {
        type: "p",
        text: "Sending a token back to base is satisfying, but not every capture is equal. Knocking out a token that's nearly home is huge. Knocking out one that just left base barely hurts them — and might leave your token exposed. Pick your fights.",
      },
      { type: "h2", text: "Use sixes deliberately" },
      {
        type: "p",
        text: "A six gives you a choice: bring out a new token or move an existing one six squares. Early in the game, getting more tokens out is usually right. Later, a six might be better used to escape danger or make a capture.",
      },
      { type: "h2", text: "Plan the final stretch" },
      {
        type: "p",
        text: "Tokens in the home column need exact rolls to finish. If all your remaining tokens need a specific number, you'll waste turns. Try to keep tokens at different distances from home so almost any roll moves something useful.",
      },
      {
        type: "tip",
        title: "Try it with friends",
        text: "The fastest way to get better is playing people you know — you'll learn their habits and they'll learn yours. Open a private room in [Sunflower Ludo](/games/ludo) and share the code.",
      },
      { type: "h2", text: "About that 'rigged dice' feeling" },
      {
        type: "p",
        text: "Everyone has a game where they don't see a six for fifteen rolls and swear the dice is broken. In Sunflower Game, every roll is independent — the dice doesn't know who's winning. Random streaks just feel personal. The strategies above are about making the most of whatever the dice gives you.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));
