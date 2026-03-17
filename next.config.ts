// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'cloudinary', // Opcional si usas CldImage
    path: 'https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;