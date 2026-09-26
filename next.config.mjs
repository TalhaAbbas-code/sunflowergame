// Plain JavaScript on purpose: Hostinger's servers can't run Next's native compiler,
// and the WebAssembly fallback fails to load a TypeScript config file.

/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async redirects() {
    // Send www traffic to the bare domain so Google only indexes one version.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sunflowergame.net" }],
        destination: "https://sunflowergame.net/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
