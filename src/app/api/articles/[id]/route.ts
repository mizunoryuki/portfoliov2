import { NextResponse } from 'next/server';
import { fetchArticleById } from '@/libs/articles';

export const revalidate = 300;

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  try {
    const article = await fetchArticleById(id, { revalidateSeconds: revalidate });
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch article', error: (error as Error).message },
      { status: 500 },
    );
  }
}
