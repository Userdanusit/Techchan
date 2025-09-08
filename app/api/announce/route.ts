import { NextResponse } from "next/server";
import { fetchWPPosts } from "@/lib/fetchers";
export async function GET() {
  const latest = await fetchWPPosts({ perPage: 5 });
  return NextResponse.json({ items: latest.map(p => p.title) });
}
