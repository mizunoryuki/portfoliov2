export type Content = {
  text: string;
  url: string;
  color?: string;
};

export type ContentsList = {
  text: string; //大見出しのテキスト
  more?: string; //moreボタンで遷移する先を指定
  children: React.ReactNode;
};
