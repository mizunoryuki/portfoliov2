interface description {
    imgUrl?: string;
    title: string;
    explanation: string;
    tag: "ハッカソン" | "個人開発";
}
export const ProductStack: description[] = [
    {
        imgUrl: "/codeCrush.png",
        title: "Code Crush",
        explanation:
            "コードを読む、消す、直す、答え合わせするという4つの段階を踏んでプログラミングについて学ぶプロダクト。マルチプレイで相手とワイワイや流ことができるのが魅力。",
        tag: "ハッカソン",
    },
    {
        title: "プロダクト２",
        explanation: "説明２",
        tag: "ハッカソン",
    },
    {
        title: "プロダクト３",
        explanation: "説明３",
        tag: "ハッカソン",
    },
    {
        title: "プロダクト４",
        explanation: "説明４",
        tag: "ハッカソン",
    },
];
