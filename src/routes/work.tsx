import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ExternalLink, Heart } from "lucide-react";
import shot from "@/assets/horawd/screenshot.jpg";
import hero from "@/assets/horawd/hero.jpg";
import girls from "@/assets/horawd/girls.jpg";
import stables from "@/assets/horawd/stables.jpg";
import training from "@/assets/horawd/training.jpg";
import race from "@/assets/horawd/race.jpg";
import shop from "@/assets/horawd/shop.jpg";
import { project } from "@/lib/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "أعمالي: روضة الخيل | روضة الحلبي" },
      { name: "description", content: "مشروع «روضة الخيل» — موقع لعالم الفروسية في مكة المكرمة، صممته روضة الحلبي من شغفها بركوب الخيل." },
      { property: "og:title", content: "أعمالي: روضة الخيل | روضة الحلبي" },
      { property: "og:description", content: "موقع لعالم الفروسية في مكة المكرمة، صممته روضة الحلبي من شغفها بركوب الخيل." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const gallery = [
  { img: hero, t: "الخيول العربية", w: 1600, h: 912, span: "md:col-span-2 md:row-span-2" },
  { img: girls, t: "خيول البنات الصغار", w: 1024, h: 768, span: "" },
  { img: stables, t: "الإسطبلات", w: 1024, h: 768, span: "" },
  { img: training, t: "التدريبات", w: 1024, h: 768, span: "" },
  { img: race, t: "المسابقات", w: 1024, h: 768, span: "" },
  { img: shop, t: "المتجر", w: 1024, h: 768, span: "md:col-span-2" },
];

const tones = ["bg-primary", "bg-secondary", "bg-accent", "bg-sun", "bg-lime", "bg-primary"];

function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="blob -top-16 left-0 h-72 w-72 bg-secondary" />
        <div className="blob top-32 -right-10 h-72 w-72 bg-primary [animation-delay:-5s]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 text-center md:pt-20">
          <span className="chip"><Heart className="h-4 w-4 fill-primary text-primary" /> مشروع من هواياتي</span>
          <p className="mt-6 font-display text-sm font-bold tracking-[0.4em] text-secondary" dir="ltr">{project.latin}</p>
          <h1 className="mt-2 text-6xl font-black md:text-8xl">
            <span className="text-gradient">{project.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
          <a href={project.url} target="_blank" rel="noreferrer" className="btn-vivid mt-8">
            زيارة الموقع <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Browser frame */}
        <div className="relative mx-auto max-w-5xl px-4 pb-20">
          <div className="overflow-hidden rounded-[1.75rem] border-4 border-foreground bg-foreground shadow-pop">
            <div className="flex items-center gap-2 px-4 py-3" dir="ltr">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="h-3 w-3 rounded-full bg-sun" />
              <span className="h-3 w-3 rounded-full bg-lime" />
              <span className="mx-auto truncate rounded-full bg-background/15 px-4 py-1 text-xs text-background/80">
                arabian-saddle-market.lovable.app
              </span>
            </div>
            <img src={shot} alt="الصفحة الرئيسية لموقع روضة الخيل" width={1600} height={900} className="w-full" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground">
        <div className="blob -bottom-24 left-10 h-72 w-72 bg-accent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <p className="font-display text-sm font-bold text-sun">القصة</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">من الشغف إلى الشاشة</h2>
            <p className="mt-6 text-lg leading-loose opacity-90">{project.story}</p>
          </div>
          <ul className="grid gap-3">
            {project.features.map((f, i) => (
              <li key={f} className="flex items-center gap-3 rounded-2xl bg-ink-foreground/10 p-4 backdrop-blur">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${tones[i]} text-foreground`}>
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="font-semibold">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-display text-sm font-bold text-primary">جولة داخل الموقع</p>
        <h2 className="mt-2 text-4xl font-black md:text-5xl">أقسام روضة الخيل</h2>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <figure key={g.t} className={`group relative overflow-hidden rounded-3xl shadow-card ${g.span}`}>
              <img src={g.img} alt={g.t} width={g.w} height={g.h} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 right-3">
                <span className={`rounded-full px-3 py-1 font-display text-sm font-bold text-foreground ${tones[i]}`}>{g.t}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[2rem] bg-sunset p-10 text-center text-primary-foreground shadow-pop">
          <h3 className="text-3xl font-black">جاهز للجولة الكاملة؟</h3>
          <p className="opacity-90">ادخل الموقع واكتشف كل الأقسام بنفسك.</p>
          <a href={project.url} target="_blank" rel="noreferrer" className="btn-outline-vivid">
            افتح روضة الخيل <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
