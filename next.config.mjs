import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    serverSourceMaps: true,
    viewTransition: true,
  },
  images: {
    deviceSizes: [750, 1500, 2250, 3000],
    minimumCacheTTL: 600,
    qualities: [100],
    remotePatterns: [
      {
        hostname: "d1et5tg8povlkp.cloudfront.net",
      },
      {
        hostname: "d1z6iide3ysms0.cloudfront.net",
      },
      {
        hostname: "image.mux.com",
      },
    ],
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  trailingSlash: false,
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
