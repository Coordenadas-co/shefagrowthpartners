import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Magnet, ArrowRightLeft, DollarSign, RotateCcw, Rocket, Database, FileText, Headphones, BarChart, Users, Settings } from "lucide-react";

const engines = {
  en: [
    { icon: Magnet, title: "Acquisition", desc: "Attract qualified prospects systematically — no more spray-and-pray" },
    { icon: ArrowRightLeft, title: "Conversion", desc: "Turn interest into revenue with optimized processes and scripts" },
    { icon: DollarSign, title: "Monetization", desc: "Maximize deal size and pricing so every close is worth more" },
    { icon: RotateCcw, title: "Retention", desc: "Keep clients longer, expand accounts, compound LTV" },
    { icon: Rocket, title: "Scaling", desc: "Replicate what works without adding chaos or headcount" },
  ],
  es: [
    { icon: Magnet, title: "Adquisición", desc: "Atrae prospectos calificados de forma sistemática — no más disparar al aire" },
    { icon: ArrowRightLeft, title: "Conversión", desc: "Transforma interés en ingresos con procesos y scripts optimizados" },
    { icon: DollarSign, title: "Monetización", desc: "Maximiza el tamaño de los deals y precios para que cada cierre valga más" },
    { icon: RotateCcw, title: "Retención", desc: "Mantén clientes más tiempo, expande cuentas, multiplica LTV" },
    { icon: Rocket, title: "Escalamiento", desc: "Replica lo que funciona sin agregar caos ni headcount" },
  ],
};

const capabilities = {
  en: [
    { icon: Database, title: "Pipeline Architecture", desc: "Structured stages, clear criteria, no dead leads" },
    { icon: FileText, title: "Sales Scripts & Playbooks", desc: "Battle-tested messaging for every scenario" },
    { icon: Headphones, title: "SDR/AE Training", desc: "Skill-building that actually sticks" },
    { icon: BarChart, title: "Revenue Analytics", desc: "Dashboards that drive decisions, not just reports" },
    { icon: Users, title: "CRM Optimization", desc: "Your CRM becomes a growth engine, not a data dump" },
    { icon: Settings, title: "Process Automation", desc: "Eliminate manual work, accelerate deal velocity" },
  ],
  es: [
    { icon: Database, title: "Arquitectura de Pipeline", desc: "Etapas estructuradas, criterios claros, sin leads muertos" },
    { icon: FileText, title: "Scripts y Playbooks", desc: "Mensajes probados para cada escenario" },
    { icon: Headphones, title: "Entrenamiento SDR/AE", desc: "Desarrollo de habilidades que realmente funciona" },
    { icon: BarChart, title: "Analítica de Ingresos", desc: "Dashboards que impulsan decisiones, no solo reportes" },
    { icon: Users, title: "Optimización de CRM", desc: "Tu CRM como motor de crecimiento, no depósito de datos" },
    { icon: Settings, title: "Automatización", desc: "Elimina trabajo manual, acelera la velocidad de deals" },
  ],
};

export default function Solution() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? engines.en : engines.es;
  const caps = lang === "en" ? capabilities.en : capabilities.es;

  return (
    <section id="solution" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("Your commercial engine, rebuilt", "Tu motor comercial, reconstruido")}
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          {t(
            "Five integrated engines + the tactical toolkit to make them run. Everything your revenue team needs.",
            "Cinco motores integrados + el kit táctico para hacerlos funcionar. Todo lo que tu equipo de ingresos necesita."
          )}
        </p>

        {/* 5 growth engines */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {items.map((step, i) => (
            <div
              key={i}
              className={`group relative rounded-lg border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_30px_hsl(43_52%_54%/0.08)] hover:-translate-y-1 duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="absolute top-3 right-3 text-xs font-bold text-primary/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Tactical capabilities (merged from CommercialSystem) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg border border-border/40 bg-card p-5">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
