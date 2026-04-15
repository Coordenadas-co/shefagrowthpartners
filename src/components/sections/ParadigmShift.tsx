import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = {
  en: [
    ["Hire more reps", "Build a system that scales"],
    ["Rely on star performers", "Create repeatable playbooks"],
    ["Spend more on ads", "Optimize conversion at every stage"],
    ["Hope for referrals", "Engineer a predictable pipeline"],
    ["Pay fixed retainers", "Partner on performance"],
  ],
  es: [
    ["Contratar más vendedores", "Construir un sistema que escale"],
    ["Depender de estrellas", "Crear playbooks repetibles"],
    ["Gastar más en anuncios", "Optimizar la conversión en cada etapa"],
    ["Esperar referidos", "Diseñar un pipeline predecible"],
    ["Pagar retainers fijos", "Aliarse por resultados"],
  ],
};

export default function ParadigmShift() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const data = lang === "en" ? rows.en : rows.es;

  return (
    <section className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("A different way to grow", "Una forma diferente de crecer")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          {t("Stop doing more of what doesn't work.", "Deja de hacer más de lo que no funciona.")}
        </p>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-hidden rounded-lg border border-border/60">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-border/60 bg-destructive/10 px-6 py-3 text-center text-sm font-semibold text-destructive">
              {t("Old Way", "Viejo Modelo")}
            </div>
            <div className="border-b border-border/60 bg-primary/10 px-6 py-3 text-center text-sm font-semibold text-primary">
              {t("New Way", "Nuevo Modelo")}
            </div>
          </div>
          {data.map(([old, newW], i) => (
            <div key={i} className="grid grid-cols-2 border-b border-border/30 last:border-0">
              <div className="border-r border-border/30 px-6 py-4 text-sm text-muted-foreground line-through decoration-destructive/40">{old}</div>
              <div className="px-6 py-4 text-sm font-medium text-foreground">{newW}</div>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          {data.map(([old, newW], i) => (
            <div key={i} className="rounded-lg border border-border/60 overflow-hidden">
              <div className="bg-destructive/10 px-4 py-3 text-sm text-muted-foreground line-through decoration-destructive/40">
                {old}
              </div>
              <div className="bg-primary/5 px-4 py-3 text-sm font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">→</span> {newW}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
