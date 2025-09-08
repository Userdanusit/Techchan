const links = [
  { title: "สมัครเรียน", href: "https://admission.vec.go.th" },
  { title: "ตารางเรียน", href: "https://course.technicchan.ac.th" },
  { title: "ตรวจผลการเรียน", href: "https://student.vec.go.th" },
  { title: "ห้องสมุด", href: "https://technicchan.vlcloud.net" },
  { title: "แจ้งนักศึกษา", href: "/news?cat=นักศึกษา" },
  { title: "จัดซื้อ–จัดจ้าง", href: "/procurement" }
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {links.map(l => (
        <a key={l.title} href={l.href}
           className="group rounded-xl border bg-white py-3 px-4 shadow-sm hover:shadow-card transition">
          <div className="font-semibold group-hover:text-brand">{l.title}</div>
          <div className="text-xs text-slate-500">ไปยังบริการ</div>
        </a>
      ))}
    </div>
  );
}
