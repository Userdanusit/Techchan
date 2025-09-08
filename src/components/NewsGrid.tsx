import Image from "next/image";
import Link from "next/link";
import { fetchWPPosts } from "@/lib/fetchers";

export async function NewsGrid({ title, limit = 6, categoryLike = "" }:{
  title: string; limit?: number; categoryLike?: string;
}) {
  const posts = await fetchWPPosts({ perPage: limit, categoryLike });
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-[var(--font-display)] text-2xl">{title}</h2>
        <Link href="/news" className="text-sm text-brand hover:underline">ดูทั้งหมด</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.id} className="bg-white rounded-xl shadow-card overflow-hidden">
            {p.image && (
              <Image src={p.image} alt="" width={640} height={360} className="w-full h-40 object-cover" />
            )}
            <div className="p-4">
              <h3 className="font-semibold leading-snug line-clamp-2"
                  dangerouslySetInnerHTML={{__html: p.title}}/>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
              <div className="mt-3">
                <a href={p.href} className="text-sm text-brand hover:underline">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
