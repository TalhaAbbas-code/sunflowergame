import type { Faq } from "@/components/FaqList";

export const faqGroups: { title: string; id: string; faqs: Faq[] }[] = [
  {
    title: "Getting started",
    id: "getting-started",
    faqs: [
      {
        q: "What is Sunflower Game?",
        a: "Sunflower Game is a mobile app that puts several classic card and board games in one place — [Rummy](/games/rummy), [Ludo](/games/ludo), [Teen Patti](/games/teen-patti), [Callbreak](/games/callbreak) and [Carrom](/games/carrom). You can play against other people online or in private rooms with friends.",
      },
      {
        q: "Is Sunflower Game free?",
        a: "Yes. The Sunflower Game download is completely free, and so are the practice tables. Some optional extras inside the app may cost money, but you never have to pay to play.",
      },
      {
        q: "Who can play Sunflower Game?",
        a: "The app is meant for players aged 18 and over. Some game modes may not be available in every country or state, so please check your local rules.",
      },
      {
        q: "Do I need an account?",
        a: "You can start as a guest. Linking a phone number is recommended because it saves your progress on our servers, so you won't lose anything if you change phones or reinstall.",
      },
    ],
  },
  {
    title: "Download & installation",
    id: "download",
    faqs: [
      {
        q: "Where can I get the Sunflower Game download?",
        a: "Only from the official [download page](/download) on sunflowergame.net. Avoid third-party sites and anything labelled 'mod' — those files are often modified.",
      },
      {
        q: "Is Sunflower Game on the Google Play Store?",
        a: "At the moment it's distributed as an APK through the link on our [download page](/download). Installing takes a couple of minutes, and our [step-by-step guide](/blog/sunflower-game-download-guide) walks you through it.",
      },
      {
        q: "Does Sunflower Game work on iPhone?",
        a: "Not yet. The app is Android only for now. We'll post on the [blog](/blog) as soon as an iOS version is available.",
      },
      {
        q: "Why does my phone warn me about the APK?",
        a: "Android shows that warning for every file downloaded outside the Play Store. As long as you used the download link on sunflowergame.net, you can safely continue. Our article [Is Sunflower Game safe?](/blog/is-sunflower-game-safe) explains this in more detail.",
      },
      {
        q: "How big is the Sunflower Game APK?",
        a: "Around 48 MB for the download. Leave about 150 MB free so the game has room to unpack its graphics.",
      },
      {
        q: "How do I update to the latest version?",
        a: "The app prompts you when an update is ready. You can also download the newest APK from our site and install it over the old one — your progress stays. See [how to update Sunflower Game](/blog/how-to-update-sunflower-game-latest-version).",
      },
    ],
  },
  {
    title: "Gameplay",
    id: "gameplay",
    faqs: [
      {
        q: "Which games are included?",
        a: "Rummy (13-card), Ludo (classic, quick and team modes), Teen Patti, Callbreak and Carrom. We add new tables and modes through updates.",
      },
      {
        q: "Can I play with my friends?",
        a: "Yes. Most games let you create a private room and share a code. Only people with the code can join your table.",
      },
      {
        q: "Is the gameplay fair?",
        a: "Yes. Cards are shuffled and dice are rolled using a random generator, and every deal or roll is independent of the last one. The game has no idea who is 'due' a good hand.",
      },
      {
        q: "What happens if I lose connection during a game?",
        a: "Your seat is held for a short time so you can reconnect. If you don't make it back in time, the table's rules decide whether your turn is auto-played or you're dropped.",
      },
      {
        q: "Where can I learn the rules?",
        a: "Every game has its own page with rules and tips, and our [how to play guide](/how-to-play) covers the basics of all of them in one place.",
      },
    ],
  },
  {
    title: "Account & safety",
    id: "account",
    faqs: [
      {
        q: "Is my account secure?",
        a: "Accounts are protected with a one-time code sent to your phone. We will never ask for your OTP or password over chat, WhatsApp or a phone call.",
      },
      {
        q: "What permissions does the app need?",
        a: "Internet access to connect to tables and storage for caching game graphics. Photo access is only requested if you choose to set a profile picture.",
      },
      {
        q: "How do I contact support?",
        a: "Use the [contact page](/contact) or email us directly. Include your player ID and phone model so we can help faster.",
      },
      {
        q: "Can I set limits on how much I play?",
        a: "Yes. Play-time reminders and other limits are available in settings. Our [responsible gaming](/responsible-gaming) page has more on this.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);

/** A short set used on the home page. */
export const homeFaqs: Faq[] = [
  faqGroups[0].faqs[0],
  faqGroups[1].faqs[0],
  faqGroups[0].faqs[1],
  faqGroups[2].faqs[1],
  faqGroups[1].faqs[2],
  faqGroups[2].faqs[2],
];
