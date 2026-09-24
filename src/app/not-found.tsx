import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { SunflowerMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <SunflowerMark className="animate-spin-slow mx-auto h-24 w-24" />
        <p className="text-gradient mt-6 font-display text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">This card isn&apos;t in the deck</h1>
        <p className="mt-4 text-lg text-white/65">
          The page you&apos;re looking for has moved or never existed. Try one of these instead:
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/download" variant="ghost">
            Sunflower Game download
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-white/50">
          Or browse <Link href="/games" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">all games</Link> and the{" "}
          <Link href="/blog" className="text-sun-300 underline decoration-sun-300/40 underline-offset-4 hover:decoration-sun-300">blog</Link>.
        </p>
      </div>
    </section>
  );
}
