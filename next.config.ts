module.exports = {
    optimization: {
        minimize: true, // 最小化を有効にする
        splitChunks: {
            chunks: "all", // 共有の依存関係を分割
            maxSize: 250000, // 分割されたファイルサイズの上限
        },
    },
};
