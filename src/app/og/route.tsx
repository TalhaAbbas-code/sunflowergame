import { ImageResponse } from "next/og";

/** Generates the 1200×630 social share image. Usage: /og?title=Your%20Title */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "Sunflower Game").slice(0, 90);
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #120b24 0%, #281b4a 45%, #5b1d4f 80%, #8a3a1c 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg width="520" height="520" viewBox="0 0 64 64" style={{ position: "absolute", right: -110, top: -90, opacity: 0.35 }}>
          {petals.map((deg) => (
            <ellipse key={deg} cx="32" cy="13" rx="6" ry="12" fill="#FFB627" transform={`rotate(${deg} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="11" fill="#4a220d" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          <span>Sunflower</span>
          <span style={{ color: "#FFD23F", marginLeft: 8 }}>Game</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1 }}>{title}</div>
          <div style={{ marginTop: 26, fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            Rummy · Ludo · Teen Patti · Callbreak · Carrom
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              padding: "16px 34px",
              borderRadius: 999,
              fontSize: 28,
              fontWeight: 700,
              color: "#0b0717",
              background: "linear-gradient(120deg, #FFD23F, #FF8A3D, #FF4D8D)",
            }}
          >
            Free Download for Android
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>sunflowergame.net</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, immutable" },
    },
  );
}
