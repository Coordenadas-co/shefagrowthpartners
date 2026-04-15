import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Magnet, ArrowRightLeft, DollarSign, RotateCcw, Rocket } from "lucide-react";

const steps = {
  en: [
    { icon: Magnet, title: "Acquisition", desc: "Attract qualified prospects systematically" },
    { icon: ArrowRightLeft, title: "Conversion", desc: "Turn interest into revenue with optimized processes" },
    { icon: DollarSign, title: "Monetization", desc: "Maximize deal size and pricing strategy" },
    { icon: RotateCcw, title: "Retention", desc: "Keep clients longer, expand accounts" },
    { icon: Rocket, title: "Scaling", desc: "Replicate what works without adding chaos" },
  ],
  es: [
    { icon: Magnet, title: "Adquisición", desc: "Atrae prospectos calificados de forma sistemática" },
    { icon: ArrowRightLeft, title: "Conversión", desc: "Transforma interés en ingresos con procesos optimizados" },
    { icon: DollarSign, title: "Monetización", desc: "Maximiza el tamaño de los deals y la estrategia de precios" },
    { icon: RotateCcw, title: "Retención", desc: "Mantén clientes más tiempo, expande cuentas" },
    { icon: Rocket, title: "Escalamiento", desc: "Replica lo que funciona sin agregar caos" },
  ],
};

export default function Solution() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? steps.en : steps.es;

  return (
    <section id="solution" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("The Growth System", "El Sistema de Crecimiento")}
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          {t(
            "Five integrated engines that work together to drive predictable growth.",
            "Cinco motores integrados que trabajan juntos para impulsar un crecimiento predecible."
          )}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((step, i) => (
            <div key={i} className="group relative rounded-lg border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_30px_hsl(43_52%_54%/0.08)]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
              {i < items.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary/40 lg:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
