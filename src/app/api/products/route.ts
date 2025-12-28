import { NextResponse } from "next/server";

import { fetchProducts } from "@/libs/products";

export const runtime = "edge";
export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchProducts({}, { revalidateSeconds: revalidate });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products", error: (error as Error).message },
      { status: 500 },
    );
  }
}
