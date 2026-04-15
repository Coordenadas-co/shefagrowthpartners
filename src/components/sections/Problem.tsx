import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, TrendingDown, Users, Target, ArrowRight } from "lucide-react";

const pains = {
  en: [
    { icon: TrendingDown, title: "Revenue plateaus", desc: "You're working harder but the numbers won't move. No system = no leverage." },
    { icon: Users, title: "Reps improvise every call", desc: "No playbook, no scripts, no process. Every deal is a coin flip." },
    { icon: Target, title: "Leads come in, revenue doesn't", desc: "Marketing spends, pipeline fills, but close rates stay at 3-5%." },
    { icon: AlertTriangle, title: "Everything is ad hoc", desc: "Pipeline stages, follow-ups, forecasting — held together with duct tape." },
  ],
  es: [
    { icon: TrendingDown, title: "Ingresos estancados", desc: "Trabajas más duro pero los números no se mueven. Sin sistema = sin apalancamiento." },
    { icon: Users, title: "Reps improvisan cada llamada", desc: "Sin playbook, sin scripts, sin proceso. Cada deal es lanzar una moneda." },
    { icon: Target, title: "Entran leads, no salen ingresos", desc: "Marketing gasta, el pipeline se llena, pero la tasa de cierre se queda en 3-5%." },
    { icon: AlertTriangle, title: "Todo es ad hoc", desc: "Etapas de pipeline, seguimientos, pronósticos — sostenidos con cinta adhesiva." },
  ],
};

const comparison = {
  en: {
    old: ["Hire more reps", "Buy more leads", "Another CRM migration", "Hope the new VP fixes it"],
    new: ["Fix the system once", "Make every lead worth 3×", "Train the team you have", "Build a machine that compounds"],
  },
  es: {
    old: ["Contratar más reps", "Comprar más leads", "Otra migración de CRM", "Esperar que el nuevo VP lo arregle"],
    new: ["Arreglar el sistema una vez", "Hacer que cada lead valga 3×", "Entrenar al equipo que tienes", "Construir una máquina que se multiplique"],
  },
};

export default function Problem() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? pains.en : pains.es;
  const comp = lang === "en" ? comparison.en : comparison.es;

  return (
    <section id="problem" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("You're losing money every month you wait", "Estás perdiendo dinero cada mes que esperas")}
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          {t(
            'These aren\'t "nice to fix" problems. Each one is a revenue leak costing you $10K-$50K/month.',
            'Estos no son problemas "buenos de arreglar". Cada uno es una fuga de ingresos que te cuesta $10K-$50K/mes.'
          )}
        </p>
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
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
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full rounded-lg object-cover opacity-80"
            />
          </div>
        </div>

        {/* Old way vs New way (merged from ParadigmShift) */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-8">
            <h3 className="mb-4 text-lg font-bold text-destructive">{t("The old way", "La vieja forma")}</h3>
            <ul className="space-y-3">
              {comp.old.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-destructive">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-8">
            <h3 className="mb-4 text-lg font-bold text-primary">{t("The Shefa way", "La forma Shefa")}</h3>
            <ul className="space-y-3">
              {comp.new.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
