import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

import { fetchArticleById } from "@/libs/articles";

export const runtime = "edge";
export const revalidate = 300;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const article = await fetchArticleById(id, {
      revalidateSeconds: revalidate,
    });
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch article", error: (error as Error).message },
      { status: 500 },
    );
  }
}
