/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["i.ibb.co"],
  },
};

export default nextConfig;
