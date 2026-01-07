type Dateinfo = {
  year: number;
  month: number;
  day?: number;
}

export type Historyinfo = {
  date: Dateinfo;
  title: string;
  content: string;
}

export type HistoryProps = {
  hitoryinfo: Historyinfo;
}
