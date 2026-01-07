import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Opcional: para servir imagens estáticas
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
