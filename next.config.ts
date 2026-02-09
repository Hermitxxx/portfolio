import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
};

export default nextConfig;
