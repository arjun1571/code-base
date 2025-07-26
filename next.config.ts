import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "naviforce.com.bd",
  //       port: "",
  //       pathname: "/wp-content/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "olevs.com.bd",
  //       port: "",
  //       pathname: "/wp-content/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "currenbd.com",
  //       port: "",
  //       pathname: "/wp-content/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "islamiclifebd.com",
  //       port: "",
  //       pathname: "/wp-content/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "bikreta.com.bd",
  //       port: "",
  //       pathname: "/wp-content/uploads/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "api.bikretabd.com",
  //       port: "",
  //       pathname: "/beta/uploads/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
