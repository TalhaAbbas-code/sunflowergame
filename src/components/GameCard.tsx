import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/data/games";
import { ArrowRightIcon, ClockIcon, UsersIcon } from "./Icons";

export default function GameCard({ game, headingLevel = "h3" }: { game: Game; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-sun-400/40 hover:shadow-2xl hover:shadow-rose-sun/10">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={game.image}
          alt={game.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-semibold text-sun-300 backdrop-blur">
          {game.level}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-xl font-bold">
          <Link href={`/games/${game.slug}`} className="after:absolute after:inset-0">
            {game.name}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-[0.95rem] leading-7 text-white/65">{game.summary}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-white/55">
          <span className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <UsersIcon className="h-4 w-4" />
              {game.players}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              {game.roundTime}
            </span>
          </span>
          <ArrowRightIcon className="h-5 w-5 text-sun-400 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
