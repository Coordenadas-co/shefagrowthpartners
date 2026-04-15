import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = {
  en: [
    {
      company: "B2B SaaS — LatAm",
      problem: "Stagnant pipeline, 3% close rate",
      action: "Redesigned sales process, implemented lead scoring & new scripts",
      metric: "+42%",
      metricLabel: "revenue in 90 days",
      result: "Close rate → 11%",
    },
    {
      company: "Professional Services Firm",
      problem: "100% referral-dependent, zero outbound",
      action: "Built outbound engine with ICP targeting and automated sequences",
      metric: "35",
      metricLabel: "qualified meetings/mo",
      result: "$180K new pipeline in 60 days",
    },
    {
      company: "EdTech Scale-up",
      problem: "High CAC, retention below 60%",
      action: "Overhauled onboarding funnel and pricing tiers",
      metric: "2.1×",
      metricLabel: "LTV increase",
      result: "CAC ↓ 38%, retention → 82%",
    },
  ],
  es: [
    {
      company: "SaaS B2B — LatAm",
      problem: "Pipeline estancado, tasa de cierre del 3%",
      action: "Rediseñé el proceso de ventas, implementé lead scoring y nuevos scripts",
      metric: "+42%",
      metricLabel: "ingresos en 90 días",
      result: "Tasa de cierre → 11%",
    },
    {
      company: "Firma de Servicios Profesionales",
      problem: "100% dependiente de referidos, cero outbound",
      action: "Construí motor outbound con targeting por ICP y secuencias automatizadas",
      metric: "35",
      metricLabel: "reuniones calificadas/mes",
      result: "$180K nuevo pipeline en 60 días",
    },
    {
      company: "EdTech en Escalamiento",
      problem: "CAC alto, retención por debajo del 60%",
      action: "Reestructuré funnel de onboarding y tiers de precios",
      metric: "2.1×",
      metricLabel: "aumento de LTV",
      result: "CAC ↓ 38%, retención → 82%",
    },
  ],
};

export default function Results() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? cases.en : cases.es;

  return (
    <section id="results" className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("Real results", "Resultados reales")}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          {t("Here's what happens when you replace improvisation with a system.",
            "Esto es lo que pasa cuando reemplazas la improvisación con un sistema.")}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((c, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-lg border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="border-b border-border/40 bg-primary/5 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{c.company}</p>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">{t("Problem", "Problema")}</p>
                  <p className="text-sm">{c.problem}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">{t("Action", "Acción")}</p>
                  <p className="text-sm">{c.action}</p>
                </div>
                <div className="mt-auto rounded-md bg-primary/10 px-4 py-4 text-center">
                  <p className="text-3xl font-extrabold text-primary">{c.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.metricLabel}</p>
                  <p className="text-sm font-semibold text-foreground mt-2">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
