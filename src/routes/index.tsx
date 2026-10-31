import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, GraduationCap, MapPin, Sparkles, Star } from "lucide-react";
import makkah from "@/assets/makkah.jpg";
import horawdShot from "@/assets/horawd/screenshot.jpg";
import cover from "@/assets/work-cover.jpg";
import { profile, project } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "روضة الحلبي | معرض الأعمال" },
      { name: "description", content: "معلمة القرآن الكريم من مكة المكرمة — اكتشف سيرتي الذاتية ومشروعي «روضة الخيل»." },
      { property: "og:title", content: "روضة الحلبي | معرض الأعمال" },
      { property: "og:description", content: "معلمة القرآن الكريم من مكة المكرمة — اكتشف سيرتي الذاتية ومشروعي «روضة الخيل»." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const words = ["تحفيظ القرآن", "التجويد", "التلاوة", "الفروسية", "السباحة", "القراءة", "تصميم المواقع"];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="blob -top-10 -right-10 h-72 w-72 bg-primary" />
        <div className="blob top-40 -left-16 h-80 w-80 bg-accent [animation-delay:-4s]" />
        <div className="blob bottom-0 right-1/3 h-64 w-64 bg-sun [animation-delay:-8s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 md:grid-cols-2 md:pt-20">
          <div className="animate-rise">
            <span className="chip">
              <Sparkles className="h-4 w-4 text-primary" /> معرض أعمالي
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.15] md:text-7xl">
              أهلًا، أنا
              <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="chip"><MapPin className="h-4 w-4 text-secondary" />{profile.city}</span>
              <span className="chip"><GraduationCap className="h-4 w-4 text-accent" />{profile.qualification}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="btn-vivid">
                شاهد أعمالي <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link to="/cv" className="btn-outline-vivid">السيرة الذاتية</Link>
            </div>
          </div>

          {/* Stacked cards */}
          <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[500px]">
            <div className="animate-float absolute right-0 top-0 w-[72%] overflow-hidden rounded-3xl border-4 border-card bg-card shadow-pop [--tilt:6deg]">
              <img src={makkah} alt="مكة المكرمة وقت الغروب" width={1280} height={1600} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                <p className="font-display font-bold text-ink-foreground">السيرة الذاتية</p>
              </div>
            </div>
            <div className="animate-float absolute bottom-0 left-0 w-[70%] overflow-hidden rounded-3xl border-4 border-card bg-card shadow-sun [--tilt:-5deg] [animation-delay:-3s]">
              <img src={horawdShot} alt="لقطة من موقع روضة الخيل" width={1600} height={900} className="aspect-[4/3] w-full object-cover object-right" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                <p className="font-display font-bold text-ink-foreground">{project.name}</p>
              </div>
            </div>
            <div className="absolute left-[38%] top-[42%] grid h-20 w-20 rotate-12 place-items-center rounded-full bg-sun font-display text-sm font-black text-sun-foreground shadow-sun">
              <span className="text-center leading-tight">21<br />سنة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-2 border-foreground bg-sunset py-4 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-xl font-extrabold">
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              {w} <Star className="h-5 w-5 fill-current" />
            </span>
          ))}
        </div>
      </div>

      {/* Two doors */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-display text-sm font-bold text-primary">اختر وجهتك</p>
        <h2 className="mt-2 text-4xl font-black md:text-5xl">بابان إلى عالمي</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            to="/cv"
            className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] bg-candy p-8 text-primary-foreground shadow-pop transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="blob -bottom-10 -left-10 h-48 w-48 bg-sun opacity-70" />
            <BookOpen className="relative h-12 w-12" />
            <div className="relative">
              <p className="text-sm font-semibold opacity-85">01</p>
              <h3 className="mt-1 text-4xl font-black">السيرة الذاتية</h3>
              <p className="mt-3 max-w-sm opacity-90">خبراتي في تحفيظ القرآن والتجويد، تعليمي، وهواياتي.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 font-display font-bold text-foreground transition-transform group-hover:-translate-x-1">
                اقرأ السيرة <ArrowLeft className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <Link
            to="/work"
            className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[2rem] text-ink-foreground shadow-sun transition-transform duration-300 hover:-translate-y-2"
          >
            <img src={cover} alt="" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <div className="relative p-8">
              <p className="text-sm font-semibold opacity-85">02 · من هواياتي</p>
              <h3 className="mt-1 text-4xl font-black">{project.name}</h3>
              <p className="mt-3 max-w-sm opacity-90">موقع لعالم الفروسية صمّمته من شغفي بركوب الخيل.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 font-display font-bold text-sun-foreground transition-transform group-hover:-translate-x-1">
                شاهد المشروع <ArrowLeft className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground">
        <div className="blob -top-20 left-1/4 h-72 w-72 bg-primary" />
        <div className="blob -bottom-20 right-1/4 h-72 w-72 bg-accent [animation-delay:-6s]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-3xl font-extrabold leading-relaxed md:text-4xl">
            «خيركم من تعلّم القرآن <span className="text-gradient">وعلّمه</span>»
          </p>
          <p className="mt-4 text-sm opacity-70">الرسالة التي أعيشها كل يوم مع طلابي</p>
        </div>
      </section>
    </>
  );
}
