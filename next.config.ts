import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact-us-1",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
