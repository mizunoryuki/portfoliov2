interface Dateinfo {
  year: number;
  month: number;
  day?: number;
}

export interface Historyinfo {
  date: Dateinfo;
  title: string;
  content: string;
}

export interface HistoryProps {
  hitoryinfo: Historyinfo;
}
