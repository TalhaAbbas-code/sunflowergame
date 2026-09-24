import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1b1234, #5b1d4f)",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 64 64">
          {petals.map((deg) => (
            <ellipse key={deg} cx="32" cy="13" rx="6" ry="12" fill="#FFB627" transform={`rotate(${deg} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="11" fill="#4a220d" />
          <circle cx="28.5" cy="28.5" r="2.4" fill="#FF4D8D" />
        </svg>
      </div>
    ),
    size,
  );
}
