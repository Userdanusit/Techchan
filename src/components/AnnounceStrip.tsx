"use client";
import useSWR from "swr";
const fetcher = (u:string)=>fetch(u).then(r=>r.json());

export function AnnounceStrip() {
  const { data } = useSWR("/api/announce", fetcher, { refreshInterval: 60_000 });
  if (!data?.items?.length) return null;
  return (
    <div role="region" aria-live="polite" className="bg-rose-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-2 whitespace-nowrap overflow-hidden">
        <div className="animate-[marquee_25s_linear_infinite] flex gap-8">
          {data.items.map((t:string, i:number)=> <span key={i} className="opacity-90">• {t}</span>)}
        </div>
      </div>
      <style jsx>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
