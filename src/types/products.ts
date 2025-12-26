export interface ProductInfo {
    id: string;
    title: string;
    description: string;
    content: string;
    eyecatch: {
        url:string;
        height:string;
        width:string;
    }
    tag: "ハッカソン" | "個人開発" | "演習";
}


export interface ProductProps {
    description: ProductInfo;
}
