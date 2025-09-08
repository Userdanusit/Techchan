import { AnnounceStrip } from "@/components/AnnounceStrip";
import { QuickLinks } from "@/components/QuickLinks";
import { NewsGrid } from "@/components/NewsGrid";

export default async function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 relative">
          <h1 className="font-[var(--font-display)] text-3xl md:text-5xl text-slate-900">
            พัฒนาอาชีวะคุณภาพสู่สังคม
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            ศูนย์กลางข่าวสาร บริการ และการเรียนรู้ของวิทยาลัยเทคนิคจันทบุรี
          </p>
          <div className="mt-8"><QuickLinks/></div>
        </div>
      </section>

      <AnnounceStrip/>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <NewsGrid title="ข่าวล่าสุด" limit={6}/>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <NewsGrid title="ประกาศสำหรับนักศึกษา" limit={6} categoryLike="นักศึกษา"/>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <NewsGrid title="จัดซื้อ–จัดจ้าง" limit={6} categoryLike="จัดซื้อ"/>
      </section>
    </>
  );
}
