import type { Block } from "@/components/RichText";
import type { Faq } from "@/components/FaqList";

export type Game = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  players: string;
  roundTime: string;
  level: "Easy" | "Medium" | "Skill-heavy";
  kind: "cards" | "board";
  intro: string[];
  steps: { title: string; text: string }[];
  tips: string[];
  body: Block[];
  faqs: Faq[];
};

export const games: Game[] = [
  {
    slug: "rummy",
    name: "Sunflower Rummy",
    seoTitle: "Sunflower Rummy – Rules, Tips & How to Win at 13-Card Rummy",
    metaDescription:
      "Learn how to play Rummy in the Sunflower Game app. Simple 13-card rules, valid sequences and sets, scoring, and the tips regular players actually use.",
    tagline: "The classic 13-card game, cleaned up for your phone.",
    summary:
      "Build sequences and sets before anyone else does. Quick tables, clear scoring and a practice mode for when you're still learning.",
    image: "/images/games/sunflower-rummy.svg",
    imageAlt: "Sunflower Rummy table in the Sunflower Game app showing a 13-card hand arranged into sequences and sets",
    players: "2–6 players",
    roundTime: "5–10 min",
    level: "Skill-heavy",
    kind: "cards",
    intro: [
      "Rummy is the game most people download Sunflower Game for, and honestly it's the one we spent the most time on. If you grew up playing it with cousins on a rainy afternoon, you already know the feel: you're dealt 13 cards, you pick and drop one card at a time, and you're quietly trying to arrange your hand before the person across from you does.",
      "Our version keeps the traditional 13-card rules that most players in South Asia know. What we changed is everything around the rules — cards snap into groups when you drag them, your points are shown live so there's no arguing at the end, and the table doesn't freeze when somebody's internet drops for a second.",
    ],
    steps: [
      {
        title: "Get your 13 cards",
        text: "Every player is dealt 13 cards. One card is turned face-up to start the open pile, and one random card is picked as the wild joker for the round.",
      },
      {
        title: "Pick, then drop",
        text: "On your turn, take one card — either from the closed deck or the top of the open pile. Then drop one card you don't need onto the open pile.",
      },
      {
        title: "Make a pure sequence",
        text: "You need at least one pure sequence: three or more cards of the same suit in order, with no joker. For example 4♥ 5♥ 6♥. Without it, you can't declare.",
      },
      {
        title: "Group the rest",
        text: "Arrange the remaining cards into more sequences (jokers allowed now) or sets — three or four cards of the same rank in different suits, like 9♠ 9♦ 9♣.",
      },
      {
        title: "Declare and win",
        text: "When all 13 cards are in valid groups, drop your last card on the 'Finish' slot and declare. The app checks your hand instantly and totals everyone's points.",
      },
    ],
    tips: [
      "Chase the pure sequence first. Everything else can wait — a hand full of sets is worthless without it.",
      "Drop high cards like Kings, Queens and Aces early if they aren't connecting. If someone declares, they're the cards that hurt most.",
      "Watch what your opponents pick from the open pile. If someone grabs a 7♦, don't throw them the 8♦.",
      "Jokers are gold, but don't wait forever for one. A decent hand now beats a perfect hand that never comes.",
      "If your first 13 cards are a mess, dropping out early costs far fewer points than playing a hopeless hand to the end.",
    ],
    body: [
      { type: "h2", text: "Valid sequences, sets and how points work" },
      {
        type: "p",
        text: "A lot of beginners lose rounds not because they played badly but because they misunderstood what counts. So here's the short version. A **pure sequence** is three or more cards of one suit in a row with no joker — 10♣ J♣ Q♣ is pure. An **impure sequence** is the same idea but with a joker filling a gap — 10♣ [joker] Q♣ works. A **set** is three or four cards of the same number from different suits.",
      },
      {
        type: "p",
        text: "You need two sequences minimum, and one of them has to be pure. After that, sets and extra sequences can be mixed any way you like.",
      },
      {
        type: "p",
        text: "When someone declares, every other player counts the cards they couldn't group. Face cards and Aces count 10 points each, number cards count their value, and jokers count zero. Lowest points is good — the winner takes zero.",
      },
      { type: "h2", text: "Game modes you'll find at the Rummy tables" },
      {
        type: "ul",
        items: [
          "**Points Rummy** – one deal, one result. Great when you only have five minutes.",
          "**Pool Rummy** – players are knocked out when their total crosses 101 or 201 points. Last one standing wins.",
          "**Deals Rummy** – a fixed number of deals is played, and whoever has the best total at the end wins.",
          "**Practice tables** – no pressure, no stakes. Perfect for learning the rhythm before you join a busy table.",
        ],
      },
      {
        type: "tip",
        title: "New to Rummy?",
        text: "Start on the practice tables for a day or two. Our full [how to play guide](/how-to-play) walks through a complete sample hand, and the blog has a dedicated post on [Rummy tips for beginners](/blog/rummy-tips-for-beginners).",
      },
      { type: "h2", text: "Why people stick with Sunflower Rummy" },
      {
        type: "p",
        text: "The honest answer is that it doesn't get in the way. Cards are big enough to read on a small screen, the sort button actually sorts the way you'd sort by hand, and the auto-grouping suggests sets without playing for you. If you're the kind of player who likes to arrange things yourself, you can switch that off in settings.",
      },
    ],
    faqs: [
      {
        q: "How many cards are dealt in Sunflower Rummy?",
        a: "Each player gets 13 cards. That's the standard Indian and Pakistani style of Rummy most people already know.",
      },
      {
        q: "Can I declare without a pure sequence?",
        a: "No. At least one pure sequence (no joker) is required. If you declare without one, it counts as a wrong declaration and you take a penalty.",
      },
      {
        q: "Is there a way to practise Rummy without pressure?",
        a: "Yes. The practice tables use the same rules but nothing is at stake, so you can make mistakes and learn from them.",
      },
      {
        q: "What happens if my internet disconnects mid-game?",
        a: "The app gives you a short window to reconnect and holds your seat. If you don't come back in time, your hand is auto-played or dropped, depending on the table type.",
      },
    ],
  },
  {
    slug: "ludo",
    name: "Sunflower Ludo",
    seoTitle: "Sunflower Ludo – Play Ludo with Friends | Rules & Strategy",
    metaDescription:
      "Play Ludo online in the Sunflower Game app. Classic 4-token rules, quick mode, private rooms for friends and family, plus the strategy tips that win more games.",
    tagline: "The board game everyone knows — now with private rooms.",
    summary:
      "Roll, race and knock your friends back to base. Classic and quick modes, private rooms, and voice-free chat stickers.",
    image: "/images/games/sunflower-ludo.svg",
    imageAlt: "Colourful Sunflower Ludo board with red, green, yellow and blue tokens racing toward the home triangle",
    players: "2–4 players",
    roundTime: "10–25 min",
    level: "Easy",
    kind: "board",
    intro: [
      "Everybody has a Ludo story. Maybe it's the uncle who never admitted he miscounted, or the sibling who'd flip the board when they lost. Sunflower Ludo keeps the fun part and removes the counting arguments — the dice is fair, the moves are counted for you, and nobody can flip the board.",
      "You can jump into a public table with players from anywhere, or open a private room and share the code on WhatsApp so the whole family can join from their own phones. That second option has quietly become the most popular way people play.",
    ],
    steps: [
      {
        title: "Pick a colour",
        text: "Each player gets four tokens in one colour. All tokens start in the base — the big square in your corner.",
      },
      {
        title: "Roll a six to start",
        text: "In classic mode you need a 6 to bring a token out of base onto your starting square. Rolling a 6 also gives you another roll.",
      },
      {
        title: "Move around the board",
        text: "Tokens travel clockwise around the board by the number you roll. You choose which token to move, which is where the strategy comes in.",
      },
      {
        title: "Capture your rivals",
        text: "Land exactly on an opponent's token and it's sent back to their base. Starred safe squares protect tokens from capture.",
      },
      {
        title: "Race home",
        text: "After a full lap, tokens enter your coloured home column. The first player to get all four tokens home wins the game.",
      },
    ],
    tips: [
      "Don't rush one token all the way home. Having two or three tokens out gives you choices on every roll.",
      "Stay on safe (star) squares when an opponent is sitting a few spaces behind you.",
      "Count the gap. If a rival is 1–6 squares behind you, you're in danger. Seven or more and you're usually fine for a turn.",
      "Use your 6s wisely. Sometimes bringing out a new token is better than moving one that's already safe.",
      "In the last stretch, keep a token near home that can move small numbers so you never waste a roll.",
    ],
    body: [
      { type: "h2", text: "Classic, quick and team modes" },
      {
        type: "ul",
        items: [
          "**Classic Ludo** – the full game with all four tokens. Best when you've got time to settle in.",
          "**Quick Ludo** – tokens start on the board and the game has a timer. Most points when time runs out wins. Ideal for a tea break.",
          "**2v2 Team** – partner up with the player opposite you. You win or lose together, which makes for some very loud family games.",
          "**Private rooms** – create a table, share the room code, and only people with the code can sit down.",
        ],
      },
      { type: "h2", text: "Is Ludo luck or skill?" },
      {
        type: "p",
        text: "Both, and anyone who says otherwise is probably losing. The dice is random, so a bad run of rolls will sink you now and then. But over ten or twenty games, the player who chooses moves well — who keeps tokens spread out, sits on safe squares, and captures at the right moment — wins far more often. We wrote a longer piece on this: [Ludo strategies that actually work](/blog/ludo-winning-strategies).",
      },
      { type: "h2", text: "Fair dice, every roll" },
      {
        type: "p",
        text: "One of the most common questions we get is whether the dice is fixed. It isn't. Every roll is generated independently, and the game has no idea who is 'due' a six. Streaks happen because randomness is streaky — that's just maths being annoying.",
      },
    ],
    faqs: [
      {
        q: "Can I play Sunflower Ludo with my friends?",
        a: "Yes. Open a private room, share the code, and your friends can join from their own phones. Up to four players can sit at one board.",
      },
      {
        q: "Do I need a 6 to start?",
        a: "In classic mode, yes. In quick mode tokens start already on the board, so you can move straight away.",
      },
      {
        q: "What are the star squares?",
        a: "They're safe squares. A token standing on a star can't be captured, so they're handy places to wait while a rival passes.",
      },
      {
        q: "How long does a game of Ludo take?",
        a: "Classic games usually take 15 to 25 minutes with four players. Quick mode is timed and finishes in around 10 minutes.",
      },
    ],
  },
  {
    slug: "teen-patti",
    name: "Sunflower Teen Patti",
    seoTitle: "Sunflower Teen Patti – 3 Patti Rules, Hand Rankings & Tips",
    metaDescription:
      "Learn Teen Patti in the Sunflower Game app: 3-card hand rankings, blind vs seen play, side shows and simple tips for smarter decisions at the table.",
    tagline: "Three cards, big decisions.",
    summary:
      "The three-card favourite. Play blind or seen, ask for a side show, and learn the hand rankings in five minutes.",
    image: "/images/games/sunflower-teen-patti.svg",
    imageAlt: "Sunflower Teen Patti table with three face-down cards, player avatars and chips around a round felt table",
    players: "3–5 players",
    roundTime: "2–4 min",
    level: "Medium",
    kind: "cards",
    intro: [
      "Teen Patti — or 3 Patti — is the quickest game in the app. Each round lasts a couple of minutes, and most of it is about reading the table rather than the cards. It's the game people play in the queue at the bank, and then keep playing on the bus home.",
      "If you've never played, don't worry. There are only six hand types to remember, and the app shows the rankings on the table whenever you need a reminder.",
    ],
    steps: [
      {
        title: "Everyone gets three cards",
        text: "Each player is dealt three cards face down. A small boot amount is placed in the pot to start the round.",
      },
      {
        title: "Play blind or seen",
        text: "You can play 'blind' without looking at your cards, or look and play 'seen'. Blind players put in half as much per turn, which makes it a cheeky strategy.",
      },
      {
        title: "Chaal or pack",
        text: "On your turn you either continue (chaal) by matching the current stake, or pack (fold) and sit the round out.",
      },
      {
        title: "Side show",
        text: "A seen player can ask the previous seen player for a side show. Both compare cards privately, and the weaker hand packs.",
      },
      {
        title: "Show",
        text: "When only two players remain, either can ask for a show. Cards are revealed and the best hand takes the pot.",
      },
    ],
    tips: [
      "Learn the rankings until they're automatic. Hesitating on a Pure Sequence vs a Sequence costs you rounds.",
      "Playing blind for a couple of turns is a legitimate way to stay in cheaply and keep others guessing.",
      "Pack early with weak cards. There's no shame in folding a 2-5-9 of mixed suits.",
      "Use side shows to knock out one player at a time when you're holding something decent.",
      "Set yourself a limit before you sit down, and stick to it. More on that in our [responsible gaming](/responsible-gaming) page.",
    ],
    body: [
      { type: "h2", text: "Teen Patti hand rankings (highest to lowest)" },
      {
        type: "ol",
        items: [
          "**Trail (Trio)** – three cards of the same rank, like A A A. Unbeatable except by a higher trail.",
          "**Pure Sequence** – three cards in order, same suit. Q♠ K♠ A♠ is the top one.",
          "**Sequence (Run)** – three cards in order, mixed suits, like 5♦ 6♣ 7♥.",
          "**Colour (Flush)** – any three cards of the same suit that aren't in order.",
          "**Pair** – two cards of the same rank plus one other card.",
          "**High Card** – nothing matches, so the highest card decides.",
        ],
      },
      {
        type: "tip",
        title: "Easy way to remember",
        text: "Three of a kind beats everything. After that, 'in order' beats 'same suit', and 'same suit' beats a pair. Most new players get the Sequence vs Colour order wrong — now you won't.",
      },
      { type: "h2", text: "Blind versus seen — what's the difference?" },
      {
        type: "p",
        text: "A blind player hasn't looked at their cards. They pay half the stake a seen player does each turn, but they're also flying without instruments. Seen players have more information but pay more. A lot of the fun in Teen Patti comes from this tension: is that blind player lucky, or just stubborn?",
      },
      {
        type: "p",
        text: "In Sunflower Teen Patti, you can switch from blind to seen at any time by tapping 'See cards'. You can't switch back, obviously.",
      },
    ],
    faqs: [
      {
        q: "What is the best hand in Teen Patti?",
        a: "A Trail of Aces (A-A-A) is the highest possible hand. After trails, the best is a pure sequence of Q-K-A in one suit.",
      },
      {
        q: "What does 'chaal' mean?",
        a: "Chaal simply means you're staying in the round by matching the current stake. It's the Teen Patti word for 'call'.",
      },
      {
        q: "Can I ask for a show at any time?",
        a: "Only when two players are left. With more players at the table, a seen player can request a side show with the player before them instead.",
      },
    ],
  },
  {
    slug: "callbreak",
    name: "Sunflower Callbreak",
    seoTitle: "Sunflower Callbreak – How to Play, Rules & Winning Tips",
    metaDescription:
      "Play Callbreak in the Sunflower Game app. Learn bidding, trump spades, scoring over five rounds and the tricks strong players use to hit their call.",
    tagline: "Call your tricks, then prove it.",
    summary:
      "A four-player trick-taking game where spades are always trump. Bid how many hands you'll win, then try to hit it exactly.",
    image: "/images/games/sunflower-callbreak.svg",
    imageAlt: "Sunflower Callbreak game with four players, spade trump cards and bid counters displayed on the table",
    players: "4 players",
    roundTime: "8–12 min",
    level: "Medium",
    kind: "cards",
    intro: [
      "Callbreak is huge in Nepal and parts of India, and it's catching on everywhere else because it's easy to learn and surprisingly deep. You get 13 cards, you guess how many tricks you'll win, and then you spend the round trying to make that guess come true.",
      "It's a thinking game, but not a slow one. Five rounds usually wrap up in about ten minutes, and there's always a moment where one card decides whether someone makes their call or breaks it.",
    ],
    steps: [
      {
        title: "Deal 13 cards each",
        text: "The full 52-card deck is dealt between four players, so everyone holds 13 cards.",
      },
      {
        title: "Make your call",
        text: "Look at your hand and bid how many tricks (hands) you think you'll win, from 1 to 8. That number is your 'call'.",
      },
      {
        title: "Follow the suit",
        text: "The first player leads a card. Everyone else must follow the same suit if they can. If they can't, they must play a spade (trump) if they have one.",
      },
      {
        title: "Win the trick",
        text: "The highest spade wins the trick. If no spade is played, the highest card of the led suit wins. The winner leads the next trick.",
      },
      {
        title: "Score after five rounds",
        text: "Hit or beat your call and you score it (plus 0.1 for each extra trick). Fall short and your call is subtracted. After five rounds, the highest total wins.",
      },
    ],
    tips: [
      "Count your Aces, Kings and spades before you bid. Each high spade is almost a guaranteed trick.",
      "Bidding low and winning a few extra is safer than bidding high and falling one short.",
      "Keep track of which spades have been played. Once the Ace and King are gone, your Queen becomes a monster.",
      "If you're short in a suit, that's good — you'll be able to trump sooner.",
      "Near your call? Start playing low cards so you don't accidentally win tricks you don't need.",
    ],
    body: [
      { type: "h2", text: "Understanding Callbreak scoring" },
      {
        type: "p",
        text: "Say you call 4. If you win exactly 4 tricks, you score 4.0. If you win 5, you score 4.1 — the extra trick is only worth a tenth of a point. If you only win 3, you lose 4 points. That imbalance is what makes Callbreak interesting: underbidding is safe but slow, overbidding is dangerous but can pay off.",
      },
      { type: "h2", text: "Why spades matter so much" },
      {
        type: "p",
        text: "Spades are always trump in Callbreak. Any spade beats any card of another suit, which is why holding the A♠ or K♠ feels like holding a free trick. The catch is that you have to follow suit when you can, so you won't always get to play them when you want.",
      },
      {
        type: "p",
        text: "Sunflower Callbreak highlights the cards you're allowed to play on each turn, which saves a lot of beginner mistakes. You can also see the running bid and trick count for every player at the top of the screen.",
      },
    ],
    faqs: [
      {
        q: "How many players do you need for Callbreak?",
        a: "Exactly four. If you don't have four friends online, the app fills empty seats with other players from the lobby.",
      },
      {
        q: "What is the minimum call in Callbreak?",
        a: "The minimum call is 1. Most tables cap the maximum at 8, since winning more than that is extremely rare.",
      },
      {
        q: "Do I have to play a spade if I can't follow suit?",
        a: "Yes, if you have one. Only when you have neither the led suit nor a spade can you throw any other card.",
      },
    ],
  },
  {
    slug: "carrom",
    name: "Sunflower Carrom",
    seoTitle: "Sunflower Carrom – Carrom Board Rules & Aiming Tips",
    metaDescription:
      "Play Carrom online in the Sunflower Game app. Freestyle and classic modes, how to pocket the queen, fouls to avoid and aiming tips for cleaner shots.",
    tagline: "Flick, pocket, repeat.",
    summary:
      "The living-room classic, with smooth physics and precise aiming. Pocket your coins and cover the queen before your opponent.",
    image: "/images/games/sunflower-carrom.svg",
    imageAlt: "Top-down view of a Sunflower Carrom board with black and white coins, the red queen and a striker lined up for a shot",
    players: "2–4 players",
    roundTime: "6–15 min",
    level: "Skill-heavy",
    kind: "board",
    intro: [
      "Carrom is the one game in the app that's more about your thumb than your memory. You line up the striker, drag back to set the power, and let go. It sounds simple, and then you watch your coin bounce off the pocket edge for the third time in a row.",
      "We spent a long time on the physics so that shots feel right — coins slide, spin and rebound the way they do on a real board with a bit of powder on it. Good players will notice. New players will just notice that it's fun.",
    ],
    steps: [
      {
        title: "Choose your colour",
        text: "One player (or team) plays the white coins, the other plays black. The red coin in the middle is the queen.",
      },
      {
        title: "Place the striker",
        text: "Slide the striker along your baseline to position it. It must stay between the two baseline circles.",
      },
      {
        title: "Aim and shoot",
        text: "Drag back to aim and set power. A guide line shows the direction. Release to strike.",
      },
      {
        title: "Pocket and cover the queen",
        text: "Pocket the queen, then pocket one of your own coins right after to 'cover' it. If you don't, the queen goes back to the centre.",
      },
      {
        title: "Clear your coins",
        text: "Keep shooting as long as you pocket your own coins. The first to clear all their coins (with the queen covered) wins.",
      },
    ],
    tips: [
      "Soft shots are underrated. Most missed pockets come from too much power, not too little.",
      "Go for the queen once a few of your coins are gone, so you have easy covering shots available.",
      "Use the rebound off the side cushion — some of the cleanest pockets are bank shots.",
      "Avoid pocketing the striker. It's a foul and costs you a coin.",
      "Leave your opponent awkward angles. Clustering their coins near your baseline makes their life harder.",
    ],
    body: [
      { type: "h2", text: "Freestyle vs classic Carrom" },
      {
        type: "ul",
        items: [
          "**Classic** – you can only pocket your own colour, and the queen must be covered. The traditional rules most people grew up with.",
          "**Freestyle** – pocket any coin for points. White coins are worth 20, black are 10, and the queen is 50. Most points wins.",
          "**Doubles** – two teams of two sit opposite each other, just like on a real board.",
        ],
      },
      { type: "h2", text: "Fouls to watch out for" },
      {
        type: "p",
        text: "Pocketing the striker, pocketing your opponent's coin, or pocketing the queen without covering it are the three fouls that catch people most. A foul means a coin goes back to the centre and your turn ends. The app handles all of this automatically and shows a quick explanation so you know exactly what happened.",
      },
    ],
    faqs: [
      {
        q: "How do I cover the queen in Carrom?",
        a: "After pocketing the red queen, you must pocket one of your own coins on your very next shot. That 'covers' the queen and it's yours to keep.",
      },
      {
        q: "Is Sunflower Carrom hard to control on a small phone?",
        a: "Not really. The aim guide and fine-tune mode help a lot. You can also turn on a longer guide line in settings while you're learning.",
      },
      {
        q: "Can I play Carrom offline?",
        a: "There's a practice mode against the computer that works without a stable connection. Multiplayer tables need internet.",
      },
    ],
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
