import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";

const pains = {
  en: [
    { icon: TrendingDown, title: "Revenue plateaus", desc: "Growth stalls because there's no system — just effort." },
    { icon: Users, title: "Sales team underperforms", desc: "Reps improvise instead of following a proven playbook." },
    { icon: Target, title: "Low-quality leads", desc: "Marketing brings traffic, but nobody converts." },
    { icon: AlertTriangle, title: "No commercial process", desc: "Pipeline, scripts, follow-ups — all ad hoc." },
  ],
  es: [
    { icon: TrendingDown, title: "Ingresos estancados", desc: "El crecimiento se detiene porque no hay sistema — solo esfuerzo." },
    { icon: Users, title: "Equipo de ventas con bajo rendimiento", desc: "Los reps improvisan en vez de seguir un playbook probado." },
    { icon: Target, title: "Leads de baja calidad", desc: "Marketing trae tráfico, pero nadie convierte." },
    { icon: AlertTriangle, title: "Sin proceso comercial", desc: "Pipeline, scripts, seguimientos — todo es ad hoc." },
  ],
};

export default function Problem() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? pains.en : pains.es;

  return (
    <section id="problem" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("Sound familiar?", "¿Te suena familiar?")}
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          {t(
            "Most B2B companies don't have a revenue problem. They have a system problem.",
            "La mayoría de las empresas B2B no tienen un problema de ingresos. Tienen un problema de sistema."
          )}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
