export type ListParams = {
  limit?: number;
  offset?: number;
  fields?: string;
};

export type FetchOptions = {
  revalidateSeconds?: number;
};
