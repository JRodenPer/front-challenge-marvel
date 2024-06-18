/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
    ASSETS_MINIMIZED: process.env.ASSETS_MINIMIZED,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [new TerserPlugin()];
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css",
        }),
      );
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
