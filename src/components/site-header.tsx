import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/cv", label: "السيرة الذاتية" },
  { to: "/work", label: "أعمالي" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sunset text-primary-foreground shadow-pop">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-extrabold">روضة</span>
        </Link>
        <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-foreground data-[status=active]:text-background"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="blob -top-20 right-10 h-56 w-56 bg-primary" />
      <div className="blob -bottom-24 left-0 h-64 w-64 bg-secondary" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-12 text-center">
        <p className="font-display text-3xl font-extrabold text-gradient">روضة الحلبي</p>
        <p className="text-sm opacity-75">معلمة القرآن الكريم · مكة المكرمة</p>
        <p className="text-xs opacity-50">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
