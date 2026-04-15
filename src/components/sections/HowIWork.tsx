import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { Handshake, BarChart3, Shield, Zap, Search, PenTool, PlayCircle, RefreshCw } from "lucide-react";

const points = {
  en: [
    { icon: Handshake, title: "Partnership, not agency", desc: "I embed with your team as a fractional CRO. You give me 2 hours/week and CRM access. I do the rest." },
    { icon: BarChart3, title: "Performance-based", desc: "No retainer. If you don't grow, I don't earn. My incentives are 100% aligned with yours." },
    { icon: Shield, title: "Skin in the game", desc: "I invest my time and expertise upfront because I believe in the outcome." },
    { icon: Zap, title: "Speed to impact", desc: "We start executing week 1. First results by day 30. Full system live by day 90." },
  ],
  es: [
    { icon: Handshake, title: "Partnership, no agencia", desc: "Me integro a tu equipo como CRO fraccional. Me das 2 horas/semana y acceso al CRM. Yo hago el resto." },
    { icon: BarChart3, title: "Basado en rendimiento", desc: "Sin retainer. Si no creces, no gano. Mis incentivos están 100% alineados con los tuyos." },
    { icon: Shield, title: "Piel en el juego", desc: "Invierto mi tiempo y expertise desde el inicio porque creo en el resultado." },
    { icon: Zap, title: "Velocidad de impacto", desc: "Empezamos a ejecutar en la semana 1. Primeros resultados en 30 días. Sistema completo en 90 días." },
  ],
};

const methodology = {
  en: [
    { icon: Search, num: "01", title: "Diagnose", desc: "Deep audit of your commercial system, funnel, and team." },
    { icon: PenTool, num: "02", title: "Design", desc: "Custom growth blueprint with clear KPIs and 90-day milestones." },
    { icon: PlayCircle, num: "03", title: "Implement", desc: "Hands-on execution alongside your team — not a deck, a transformation." },
    { icon: RefreshCw, num: "04", title: "Optimize", desc: "Continuous iteration based on data. We refine until it scales." },
  ],
  es: [
    { icon: Search, num: "01", title: "Diagnosticar", desc: "Auditoría profunda de tu sistema comercial, funnel y equipo." },
    { icon: PenTool, num: "02", title: "Diseñar", desc: "Blueprint de crecimiento con KPIs claros y hitos a 90 días." },
    { icon: PlayCircle, num: "03", title: "Implementar", desc: "Ejecución mano a mano con tu equipo — no un deck, una transformación." },
    { icon: RefreshCw, num: "04", title: "Optimizar", desc: "Iteración continua basada en datos. Refinamos hasta que escale." },
  ],
};

export default function HowIWork() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const offset = useParallax(0.15);
  const items = lang === "en" ? points.en : points.es;
  const steps = lang === "en" ? methodology.en : methodology.es;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background image with parallax */}
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("How I work", "Cómo trabajo")}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          {t("This isn't consulting. It's a true partnership built on shared outcomes.",
            "Esto no es consultoría. Es una alianza real basada en resultados compartidos.")}
        </p>

        {/* Partnership principles */}
        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-lg border border-border/60 bg-card/80 backdrop-blur-sm p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology (merged from Methodology section) */}
        <h3 className="mb-8 text-center text-2xl font-bold">
          {t("The 4-Step Loop", "El Ciclo de 4 Pasos")}
        </h3>
        <div className="relative space-y-6">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border/60 sm:block" />
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-6 sm:pl-16">
              <div className="absolute left-0 hidden h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background sm:flex">
                <span className="text-xs font-bold text-primary">{step.num}</span>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/80 backdrop-blur-sm p-5 w-full">
                <div className="mb-1 flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-primary sm:hidden" />
                  <h4 className="text-lg font-bold">{step.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
