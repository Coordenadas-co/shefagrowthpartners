import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, FileText, Headphones, BarChart, Users, Settings } from "lucide-react";

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
    { icon: FileText, title: "Scripts y Playbooks de Ventas", desc: "Mensajes probados en batalla para cada escenario" },
    { icon: Headphones, title: "Entrenamiento SDR/AE", desc: "Desarrollo de habilidades que realmente funciona" },
    { icon: BarChart, title: "Analítica de Ingresos", desc: "Dashboards que impulsan decisiones, no solo reportes" },
    { icon: Users, title: "Optimización de CRM", desc: "Tu CRM se convierte en motor de crecimiento, no en un depósito de datos" },
    { icon: Settings, title: "Automatización de Procesos", desc: "Elimina trabajo manual, acelera la velocidad de deals" },
  ],
};

export default function CommercialSystem() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? capabilities.en : capabilities.es;

  return (
    <section className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("Your commercial engine, rebuilt", "Tu motor comercial, reconstruido")}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          {t("Everything your revenue team needs to perform at its best.",
            "Todo lo que tu equipo de ingresos necesita para rendir al máximo.")}
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
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
