/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
    ],
  },
  // webpack5: false,

  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, async_hooks: false };
    return config;
  },
};

export default nextConfig;
