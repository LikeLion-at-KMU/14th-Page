/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["preview.meowti.kr", "*.meowti.kr"],
};

export default nextConfig;
