const BASE = "https://www.technicchan.ac.th";

type WPPost = {
  id: number; date: string; link: string; title: { rendered: string };
  excerpt?: { rendered: string }; _embedded?: any;
};

export async function fetchWPPosts({ perPage = 6, search = "", categoryLike = "" } = {}) {
  // 1) พยายามใช้ REST
  const qs = new URLSearchParams({
    per_page: String(perPage),
    _embed: "1",
    search
  }).toString();

  try {
    const r = await fetch(`${BASE}/wp-json/wp/v2/posts?${qs}`, { next: { revalidate: 600 } });
    if (r.ok) {
      const posts: WPPost[] = await r.json();
      // กรองแบบหยาบด้วยชื่อหมวด (เมื่อ REST ไม่มีพารามิเตอร์ category id ในมือ)
      const filtered = categoryLike
        ? posts.filter(p => JSON.stringify(p._embedded || {}).includes(categoryLike))
        : posts;
      return filtered.slice(0, perPage).map(mapPost);
    }
    throw new Error(r.statusText);
  } catch {
    // 2) Fallback: RSS /feed
    const rss = await fetch(`${BASE}/feed`, { next: { revalidate: 600 } }).then(r => r.text());
    const { XMLParser } = await import("fast-xml-parser");
    const parser = new XMLParser({ ignoreAttributes: false });
    const obj = parser.parse(rss);
    const items = obj?.rss?.channel?.item ?? [];
    const pick = (items as any[]).filter(i =>
      categoryLike ? String(i?.category ?? "").includes(categoryLike) : true
    ).slice(0, perPage);
    return pick.map((i: any) => ({
      id: i.guid?.["#text"] ?? i.link,
      title: i.title,
      href: i.link,
      date: i.pubDate,
      excerpt: i.description
    }));
  }
}

function mapPost(p: WPPost) {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const img = media?.source_url;
  return {
    id: p.id,
    title: p.title?.rendered?.replace(/<[^>]+>/g,""),
    href: p.link,
    date: p.date,
    excerpt: p.excerpt?.rendered?.replace(/<[^>]+>/g,""),
    image: img
  };
}
