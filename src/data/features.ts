export type FeatureIcon = "bolt" | "users" | "shield" | "wifi" | "gift" | "chat" | "phone" | "trophy" | "heart";

export type Feature = { icon: FeatureIcon; title: string; text: string; detail: string };

export const features: Feature[] = [
  {
    icon: "bolt",
    title: "Tables fill in seconds",
    text: "Pick a game and you're usually seated before you've finished your sip of chai. No long lobby waits.",
    detail:
      "Matchmaking looks for players at a similar level and table size, so you're not waiting around. If a table doesn't fill quickly, the app offers you another one rather than leaving you staring at an empty seat.",
  },
  {
    icon: "users",
    title: "Private rooms for friends",
    text: "Create a room, share the code on WhatsApp, and play with the people you actually know.",
    detail:
      "Private rooms work in Ludo, Rummy, Callbreak and Carrom. You choose the rules and the table size, and only people with your room code can sit down. It's the easiest way to keep a weekly family game going when everyone lives in different cities.",
  },
  {
    icon: "phone",
    title: "Light on your phone",
    text: "Around 48 MB to download and it runs smoothly on budget Android phones, not just the latest flagships.",
    detail:
      "We test on older and cheaper handsets on purpose. Graphics scale down automatically on slower phones, and there's a battery saver mode that lowers animations when you're running low.",
  },
  {
    icon: "wifi",
    title: "Handles weak internet",
    text: "Dropped signal for a moment? Your seat is held so you can reconnect and carry on.",
    detail:
      "The game uses very little data per round and is built to cope with patchy 3G and 4G. If you disconnect, you get a grace period to come back before the table moves on without you.",
  },
  {
    icon: "shield",
    title: "Fair play, every deal",
    text: "Cards are shuffled and dice rolled with a random generator. Suspicious behaviour gets flagged and reviewed.",
    detail:
      "Every shuffle and roll is independent. On top of that, we watch for collusion and bots at tables — accounts that break the rules are removed. You can also report a player directly from the table.",
  },
  {
    icon: "gift",
    title: "Daily rewards",
    text: "Log in, spin the daily wheel, and complete small tasks for free bonus coins.",
    detail:
      "There's a daily login streak, a free spin, and a handful of simple missions like 'win two Ludo games'. They're a nice extra, not a requirement — you can play every game without them.",
  },
  {
    icon: "chat",
    title: "Stickers & quick chat",
    text: "Tease your friends with stickers and preset messages, without any awkward open chat.",
    detail:
      "Quick chat keeps things friendly: preset phrases and animated stickers, with the option to mute anyone at the table. There's no open text chat with strangers, which keeps the tables pleasant.",
  },
  {
    icon: "trophy",
    title: "Levels & leaderboards",
    text: "Climb weekly leaderboards and unlock new table themes as you level up.",
    detail:
      "Each game has its own weekly leaderboard, so a Carrom specialist isn't competing with a Rummy grinder. Levelling up unlocks card backs, board themes and avatar frames.",
  },
  {
    icon: "heart",
    title: "Play-time controls",
    text: "Set reminders and limits so a quick game stays a quick game.",
    detail:
      "You can set a daily play-time reminder, take a short break with one tap, or pause your account for a longer period. We think these tools matter, so they're easy to find in settings.",
  },
];
