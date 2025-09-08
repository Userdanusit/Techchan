import "./globals.css";
import { Sarabun, Kanit } from "next/font/google";

const body = Sarabun({ subsets: ["thai","latin"], weight: ["400","600"] });
const display = Kanit({ subsets: ["thai","latin"], weight: ["600","700"], variable: "--font-display" });

export const metadata = {
  title: "วิทยาลัยเทคนิคจันทบุรี",
  description: "เว็บไซต์ทางการ – วิทยาลัยเทคนิคจันทบุรี"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={display.variable}>
      <body className={`${body.className} text-slate-800 antialiased`}>
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

// --- คุณสามารถย้ายสองคอมโพเนนต์นี้ไปที่ /src/components ได้ ---
function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6">
        <a className="font-[var(--font-display)] text-xl text-brand" href="/">วิทยาลัยเทคนิคจันทบุรี</a>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="/about" className="hover:text-brand">เกี่ยวกับ</a>
          <a href="/academics" className="hover:text-brand">การศึกษา</a>
          <a href="/news" className="hover:text-brand">ข่าว & กิจกรรม</a>
          <a href="/procurement" className="hover:text-brand">จัดซื้อจัดจ้าง</a>
          <a href="/services" className="hover:text-brand">บริการ</a>
          <a href="/departments" className="hover:text-brand">หน่วยงาน/แผนก</a>
        </nav>
      </div>
    </header>
  );
}
function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold mb-2">ติดต่อ</div>
          <p className="text-sm leading-6">วิทยาลัยเทคนิคจันทบุรี<br/>โทร. 0-3931-1198</p>
        </div>
        <div>
          <div className="font-semibold mb-2">ลิงก์ด่วน</div>
          <ul className="text-sm space-y-1">
            <li><a href="/services" className="hover:text-brand">บริการทั้งหมด</a></li>
            <li><a href="/procurement" className="hover:text-brand">ประกาศจัดซื้อจัดจ้าง</a></li>
            <li><a href="/news" className="hover:text-brand">ข่าวล่าสุด</a></li>
          </ul>
        </div>
        <div className="text-sm opacity-70">
          © {new Date().getFullYear()} วิทยาลัยเทคนิคจันทบุรี — อิงข้อมูลจากเว็บไซต์ทางการ
        </div>
      </div>
    </footer>
  );
}
