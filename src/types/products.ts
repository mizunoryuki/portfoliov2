export interface Description {
    imgUrl?: string;
    title: string;
    explanation: string;
    tag: "ハッカソン" | "個人開発" | "演習";
}

export interface ProductProps {
    description: Description;
}
