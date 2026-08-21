import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, TrendingUp, Wrench, Trophy, HelpCircle, Check } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const blocks = {
  en: {
    role: "Growth Partner · Commercial Systems Architect",
    intro: "I'm Juan Sebastián Medrano, Growth Partner and commercial systems architect with over 13 years of experience scaling operations across Latin America and Europe. I've led teams of 200+ people, built companies from scratch, and designed systems that beat benchmarks in conversion, retention and profitability. There's a clear reason behind all this: most businesses don't grow because they don't have a system.",
    sections: [
      {
        icon: TrendingUp,
        title: "From sales to systems",
        body: "My foundation comes from high-performance sales in highly competitive environments, where I learned that growth doesn't depend on talent — it depends on systems that convert and scale. Since then, I specialize in building complete growth architectures: from acquisition to retention and revenue expansion.",
      },
      {
        icon: Wrench,
        title: "What I do today",
        body: "Through Shefa Growth Partners, I work with founders and leadership teams as a strategic growth partner. I don't execute isolated tactics — I take responsibility for results. I design and implement systems that integrate:",
        bullets: [
          "Acquisition (Paid Media, SEO, organic, UGC)",
          "Conversion (funnels, CRO, UX)",
          "Monetization (pricing, AOV, value ladder)",
          "Retention (email, CRM, automation)",
          "Data & operations (KPIs, dashboards, tracking)",
        ],
        outcome: "Result: more revenue, more control and higher profitability.",
      },
      {
        icon: Trophy,
        title: "Results",
        bullets: [
          "+30% revenue in 90 days",
          "Lower CAC",
          "Higher LTV",
          "Integrated, scalable systems",
          "Teams aligned with clear metrics",
        ],
        outcome: "Less effort. More results.",
      },
      {
        icon: HelpCircle,
        title: "How I can help you",
        body: "If your business has:",
        bullets: [
          "Unstable sales",
          "Dependence on ads",
          "Lack of clarity in metrics",
          "Misaligned teams",
        ],
        outcome: "You don't need more marketing. You need a system.",
      },
    ],
  },
  es: {
    role: "Growth Partner · Arquitecto de Sistemas Comerciales",
    intro: "Soy Juan Sebastián Medrano, Growth Partner y arquitecto de sistemas comerciales con más de 13 años de experiencia escalando operaciones en Latinoamérica y Europa. He liderado equipos de más de 200 personas, construido empresas desde cero y diseñado sistemas que superan benchmarks en conversión, retención y rentabilidad. Y hay una razón clara detrás de todo esto: la mayoría de negocios no crecen porque no tienen un sistema.",
    sections: [
      {
        icon: TrendingUp,
        title: "De ventas a sistemas",
        body: "Mi base viene de ventas de alto rendimiento en entornos altamente competitivos, donde entendí que el crecimiento no depende del talento. Depende de sistemas que convierten y escalan. Desde entonces, me especializo en construir arquitecturas completas de crecimiento: desde adquisición hasta retención y expansión de ingresos.",
      },
      {
        icon: Wrench,
        title: "Qué hago hoy",
        body: "A través de Shefa Growth Partners, trabajo con founders y equipos directivos como socio estratégico de crecimiento. No ejecuto tácticas sueltas — tomo responsabilidad sobre resultados. Diseño e implemento sistemas que integran:",
        bullets: [
          "Adquisición (Paid Media, SEO, orgánico, UGC)",
          "Conversión (funnels, CRO, UX)",
          "Monetización (pricing, AOV, value ladder)",
          "Retención (email, CRM, automatización)",
          "Data & operaciones (KPIs, dashboards, tracking)",
        ],
        outcome: "Resultado: más ingresos, más control y mayor rentabilidad.",
      },
      {
        icon: Trophy,
        title: "Resultados",
        bullets: [
          "+30% en ingresos en 90 días",
          "Reducción de CAC",
          "Aumento de LTV",
          "Sistemas integrados y escalables",
          "Equipos alineados con métricas claras",
        ],
        outcome: "No más esfuerzo. Más resultados.",
      },
      {
        icon: HelpCircle,
        title: "Cómo puedo ayudarte",
        body: "Si tu negocio tiene:",
        bullets: [
          "Ventas inestables",
          "Dependencia de ads",
          "Falta de claridad en métricas",
          "Equipos desalineados",
        ],
        outcome: "No necesitas más marketing. Necesitas un sistema.",
      },
    ],
  },
};

export default function AboutMe() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const data = lang === "en" ? blocks.en : blocks.es;

  return (
    <section id="about" className="bg-section-alt py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl">Juan Sebastián Medrano</h2>
          <p className="mb-3 text-sm font-semibold text-primary">{data.role}</p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {/* Intro */}
        <p className="mb-10 text-base leading-relaxed text-foreground/90">
          {data.intro}
        </p>

        {/* Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.sections.map((s, i) => (
            <div
              key={i}
              className="rounded-lg border border-border/60 bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
              </div>
              {"body" in s && s.body && (
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              )}
              {"bullets" in s && s.bullets && (
                <ul className="mb-3 space-y-2">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <GoldNumbers text={b} />
                    </li>

                  ))}
                </ul>
              )}
              {"outcome" in s && s.outcome && (
                <p className="mt-3 text-sm font-semibold text-primary">{s.outcome}</p>
              )}
            </div>
          ))}
        </div>

        <SectionCTA
          label={t("Activate your growth today", "Activa tu crecimiento hoy mismo")}
          className="mt-12"
        />
      </div>
    </section>
  );
}
