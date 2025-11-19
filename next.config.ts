import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // assetPrefix: "/html/dalbhath-kitchen/",
  // trailingSlash: true,
};

export default nextConfig;
