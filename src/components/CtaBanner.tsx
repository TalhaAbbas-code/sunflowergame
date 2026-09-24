import { ButtonLink } from "./ui";
import { SunflowerMark } from "./Logo";
import { DownloadIcon } from "./Icons";
import { siteConfig } from "@/lib/site";

export default function CtaBanner({
  title = "Ready for your first hand?",
  text = "The Sunflower Game download is free, takes about a minute on a normal connection, and you can be sitting at a Rummy or Ludo table right after.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="gradient-border relative overflow-hidden rounded-[2rem] bg-ink-800 px-6 py-14 text-center sm:px-12 lg:py-20">
        <div className="bg-aurora pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
        <SunflowerMark className="animate-spin-slow pointer-events-none absolute -top-16 -right-16 h-64 w-64 opacity-20" />
        <SunflowerMark className="animate-spin-slow pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 opacity-10" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/75">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/download">
              <DownloadIcon className="h-5 w-5" />
              Download Sunflower Game
            </ButtonLink>
            <ButtonLink href="/how-to-play" variant="ghost">
              Learn the rules first
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Version {siteConfig.app.version} · {siteConfig.app.fileSize} · {siteConfig.app.minAndroid}
          </p>
        </div>
      </div>
    </section>
  );
}
