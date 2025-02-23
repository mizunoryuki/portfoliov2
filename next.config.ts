import { NextConfig } from "next";
module.exports = {
    webpack(config: NextConfig) {
        config.optimization.splitChunks = {
            chunks: "all",
            maxSize: 2500000, // 2.5MBを超えないように分割
        };

        config.module.rules.push({
            test: /\.(txt|md|xml)$/,
            use: "null-loader",
        });

        return config;
    },
};
