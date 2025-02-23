import { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.optimization.splitChunks.maxSize = 24000000;
        return config;
    },
};

export default nextConfig;
