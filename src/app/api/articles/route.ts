import { NextResponse } from 'next/server';
import { fetchArticles } from '@/libs/articles';

export const revalidate = 300;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const fields = searchParams.get('fields') || 'id,title,eyecatch,publishedAt,tag,contents';

  try {
    const data = await fetchArticles(
      {
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
        fields,
      },
      { revalidateSeconds: revalidate },
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch articles', error: (error as Error).message },
      { status: 500 },
    );
  }
}
