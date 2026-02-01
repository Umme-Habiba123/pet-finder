/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
