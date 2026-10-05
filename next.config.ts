import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the app screenshots, where small UI text must stay legible.
    qualities: [75, 90],
  },
};

export default nextConfig;
