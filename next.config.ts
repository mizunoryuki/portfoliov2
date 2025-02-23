import { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config, { isServer }) {
        if (!isServer) {
            config.performance = {
                maxAssetSize: 25 * 1024 * 1024, // 最大アセットサイズ 25MB
            };
        }
        return config;
    },
};

export default nextConfig;
