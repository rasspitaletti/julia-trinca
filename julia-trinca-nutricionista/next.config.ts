import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  // esconde o botão "N" do Next que aparece no canto em modo de desenvolvimento
  devIndicators: false,
};

export default nextConfig;
