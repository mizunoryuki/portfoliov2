export interface Content {
    text: string;
    url: string;
    color?: string;
}

export interface ContentsList {
    text: string; //大見出しのテキスト
    more: boolean; //moreボタンを表示するか否か
    children: React.ReactNode;
}
