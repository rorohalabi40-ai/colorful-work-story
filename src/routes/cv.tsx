import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Briefcase, Calendar, ExternalLink, GraduationCap, Heart, MapPin, User, Waves } from "lucide-react";
import makkah from "@/assets/makkah.jpg";
import { education, experience, hobbies, profile } from "@/lib/portfolio";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "السيرة الذاتية | روضة الحلبي" },
      { name: "description", content: "السيرة الذاتية لروضة الحلبي: معلمة تحفيظ القرآن الكريم والتجويد في مكة المكرمة." },
      { property: "og:title", content: "السيرة الذاتية | روضة الحلبي" },
      { property: "og:description", content: "السيرة الذاتية لروضة الحلبي: معلمة تحفيظ القرآن الكريم والتجويد في مكة المكرمة." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

const hobbyStyle = {
  swim: { Icon: Waves, cls: "bg-lagoon text-accent-foreground" },
  read: { Icon: BookOpen, cls: "bg-sun text-sun-foreground" },
  horse: { Icon: Heart, cls: "bg-candy text-primary-foreground" },
} as const;

function SectionTitle({ kicker, title, Icon }: { kicker: string; title: string; Icon: typeof User }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-sm font-bold text-primary">{kicker}</p>
        <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function CvPage() {
  const info = [
    { label: "الاسم", value: profile.name, Icon: User, tone: "bg-primary text-primary-foreground" },
    { label: "العمر", value: profile.age, Icon: Calendar, tone: "bg-secondary text-secondary-foreground" },
    { label: "السكن", value: profile.city, Icon: MapPin, tone: "bg-accent text-accent-foreground" },
    { label: "المؤهل", value: profile.qualification, Icon: GraduationCap, tone: "bg-sun text-sun-foreground" },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={makkah} alt="مكة المكرمة وقت الغروب" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="blob -top-10 left-10 h-64 w-64 bg-primary" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 md:pt-32">
          <span className="inline-flex rounded-full bg-sun px-4 py-1.5 font-display text-sm font-bold text-sun-foreground">السيرة الذاتية</span>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">{profile.name}</h1>
          <p className="mt-4 max-w-xl text-lg opacity-90">{profile.title} — {profile.tagline}</p>
          <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn-vivid mt-8">
            النسخة الأصلية <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Info tiles */}
      <section className="mx-auto -mt-8 max-w-6xl px-4">
        <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4">
          {info.map(({ label, value, Icon, tone }) => (
            <div key={label} className={`rounded-3xl p-5 shadow-card ${tone}`}>
              <Icon className="h-5 w-5 opacity-80" />
              <p className="mt-3 text-xs font-semibold opacity-80">{label}</p>
              <p className="font-display text-lg font-extrabold leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-20">
        {/* About */}
        <section>
          <SectionTitle kicker="من أنا" title="نبذة عني" Icon={User} />
          <p className="rounded-[2rem] border-2 border-foreground bg-card p-7 text-lg leading-loose shadow-card">{profile.about}</p>
        </section>

        {/* Experience */}
        <section>
          <SectionTitle kicker="ماذا أعمل" title="الخبرة العملية" Icon={Briefcase} />
          <ol className="relative space-y-6 border-r-4 border-dashed border-primary/40 pr-8">
            {experience.map((e, i) => (
              <li key={e.title} className="relative">
                <span className={`absolute -right-[46px] top-6 h-6 w-6 rounded-full border-4 border-background ${i % 2 ? "bg-accent" : "bg-primary"}`} />
                <div className="rounded-3xl bg-card p-6 shadow-card">
                  <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold text-foreground">{e.when}</span>
                  <h3 className="mt-3 text-2xl font-extrabold">{e.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section>
          <SectionTitle kicker="مسيرتي" title="التعليم" Icon={GraduationCap} />
          {education.map((ed) => (
            <div key={ed.title} className="relative overflow-hidden rounded-[2rem] bg-sunset p-8 text-primary-foreground shadow-pop">
              <div className="blob -bottom-16 -left-10 h-56 w-56 bg-accent opacity-60" />
              <GraduationCap className="relative h-10 w-10" />
              <h3 className="relative mt-4 text-3xl font-black">{ed.title}</h3>
              <p className="relative mt-1 font-display font-bold opacity-90">{ed.place}</p>
              <p className="relative mt-4 max-w-2xl leading-relaxed opacity-95">{ed.text}</p>
            </div>
          ))}
        </section>

        {/* Hobbies */}
        <section>
          <SectionTitle kicker="ما أحب" title="الهوايات" Icon={Heart} />
          <div className="grid gap-5 md:grid-cols-3">
            {hobbies.map((h) => {
              const { Icon, cls } = hobbyStyle[h.key];
              return (
                <div key={h.key} className={`group rounded-[2rem] p-7 shadow-card transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 ${cls}`}>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-card/90 text-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-black">{h.title}</h3>
                  <p className="mt-2 opacity-90">{h.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
