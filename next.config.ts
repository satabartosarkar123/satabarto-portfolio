import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sarabartosarkar.vercel.app",
          },
        ],
        destination: "https://satabartosarkar.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
