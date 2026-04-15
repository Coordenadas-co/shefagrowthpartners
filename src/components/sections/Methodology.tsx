import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, PenTool, PlayCircle, RefreshCw } from "lucide-react";

const steps = {
  en: [
    { icon: Search, num: "01", title: "Diagnose", desc: "Deep audit of your current commercial system, funnel, and team." },
    { icon: PenTool, num: "02", title: "Design", desc: "Custom growth blueprint with clear KPIs and 90-day milestones." },
    { icon: PlayCircle, num: "03", title: "Implement", desc: "Hands-on execution alongside your team — not a deck, a transformation." },
    { icon: RefreshCw, num: "04", title: "Optimize", desc: "Continuous iteration based on data. We refine until it scales." },
  ],
  es: [
    { icon: Search, num: "01", title: "Diagnosticar", desc: "Auditoría profunda de tu sistema comercial, funnel y equipo actual." },
    { icon: PenTool, num: "02", title: "Diseñar", desc: "Blueprint de crecimiento personalizado con KPIs claros y hitos a 90 días." },
    { icon: PlayCircle, num: "03", title: "Implementar", desc: "Ejecución mano a mano con tu equipo — no un deck, una transformación." },
    { icon: RefreshCw, num: "04", title: "Optimizar", desc: "Iteración continua basada en datos. Refinamos hasta que escale." },
  ],
};

export default function Methodology() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? steps.en : steps.es;

  return (
    <section id="methodology" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("The methodology", "La metodología")}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          {t("A proven 4-step loop that compounds results over time.",
            "Un ciclo probado de 4 pasos que multiplica resultados con el tiempo.")}
        </p>
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border/60 sm:block" />
          {items.map((step, i) => (
            <div key={i} className="relative flex gap-6 sm:pl-16">
              <div className="absolute left-0 hidden h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background sm:flex">
                <span className="text-xs font-bold text-primary">{step.num}</span>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-6 w-full">
                <div className="mb-2 flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-primary sm:hidden" />
                  <h3 className="text-lg font-bold">{step.title}</h3>
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
