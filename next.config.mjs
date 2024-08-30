/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "cloudinary.com" }] },
};

export default nextConfig;
