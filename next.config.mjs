import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

if (process.env.NODE_ENV !== "production") {
  const { initOpenNextCloudflareForDev } = await import(
    "@opennextjs/cloudflare"
  );
  initOpenNextCloudflareForDev();
}

export default nextConfig;