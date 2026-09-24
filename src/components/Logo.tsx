import Link from "next/link";

export function SunflowerMark({ className = "h-9 w-9" }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="petal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE07A" />
          <stop offset="0.6" stopColor="#FFB627" />
          <stop offset="1" stopColor="#FF8A3D" />
        </linearGradient>
        <radialGradient id="seed" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#8a4b1f" />
          <stop offset="1" stopColor="#3a1a0a" />
        </radialGradient>
      </defs>
      {petals.map((deg) => (
        <ellipse key={deg} cx="32" cy="13" rx="6" ry="12" fill="url(#petal)" transform={`rotate(${deg} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="11" fill="url(#seed)" />
      <circle cx="28.5" cy="28.5" r="2.4" fill="#FF4D8D" opacity="0.9" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <SunflowerMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-45" />
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Sunflower<span className="text-gradient">Game</span>
      </span>
    </Link>
  );
}
