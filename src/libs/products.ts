import { ProductInfo } from "@/types/products";

const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN || '';
const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1/blogs`;

const ensureEnv = () => {
  if (!serviceDomain || !apiKey) {
    throw new Error('Missing microCMS credentials');
  }
};

type ListParams = {
  limit?: number;
  offset?: number;
  fields?: string;
};

type FetchOptions = {
  revalidateSeconds?: number;
};

type ProductListResponse = {
  contents: ProductInfo[];
  totalCount: number;
};

const fetchJson = async <T>(url: URL, options?: FetchOptions): Promise<T> => {
  ensureEnv();
  const res = await fetch(url.toString(), {
    headers: {
      'X-MICROCMS-API-KEY': apiKey,
    },
    next: {
      revalidate: options?.revalidateSeconds ?? 300,
      tags: ['blogs'],
    },
  });

  if (!res.ok) {
    throw new Error(`microCMS request failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};

export const fetchProducts = async (
  params: ListParams = {},
  options?: FetchOptions,
): Promise<ProductListResponse> => {
  const url = new URL(BASE_URL);
  if (params.limit !== undefined) url.searchParams.set('limit', String(params.limit));
  if (params.offset !== undefined) url.searchParams.set('offset', String(params.offset));
  if (params.fields) url.searchParams.set('fields', params.fields);

  const data = await fetchJson<ProductListResponse>(url, options);
  const contents: ProductInfo[] = (data?.contents ?? []).map((item: ProductInfo) => (
	{
    id: item.id,
    title: item.title ?? '',
	description: item.description,
	content : item.content,
	eyecatch: {
		url: item.eyecatch?.url ?? '',
		height: item.eyecatch?.height ?? '',
		width: item.eyecatch?.width ?? ''
	},
    tag: Array.isArray(item.tag) ? item.tag[0] : item.tag,
  }));

  return {
    contents,
    totalCount: data?.totalCount ?? contents.length,
  };
};

export const fetchProductById = async (
  id: string,
  options?: FetchOptions,
): Promise<ProductInfo> => {
  const url = new URL(`${BASE_URL}/${id}`);
  const data = await fetchJson<ProductInfo>(url, options);

  const detail: ProductInfo = {
	id: data.id,
	title: data.title ?? '',
	tag: Array.isArray(data.tag) ? data.tag[0] : data.tag,
	description: data.description ?? '',
	content: data.content ?? '',
	eyecatch : {
		url: data.eyecatch?.url,
		width: data.eyecatch?.width,
		height: data.eyecatch?.height,
	}
  };

  return detail;
};
