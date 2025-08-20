import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedEnv: true,
  },
  images: {
    remotePatterns: [new URL('https://www.howtouseabortionpill.org/**')],
  },
};

export default nextConfig;
