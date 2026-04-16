import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const yes = {
  en: [
    "B2B or SaaS doing $500K+ ARR",
    "You have a product that works but growth has stalled",
    "You're willing to invest in building a real system",
    "You want a partner, not a vendor",
  ],
  es: [
    "B2B o SaaS con $500K+ ARR",
    "Tienes un producto que funciona pero el crecimiento se estancó",
    "Estás dispuesto a invertir en construir un sistema real",
    "Quieres un partner, no un proveedor",
  ],
};

const no = {
  en: [
    "Looking for a quick hack or silver bullet",
    "Not willing to change internal processes",
    "Need help finding product-market fit",
    "Want to outsource and forget",
  ],
  es: [
    "Buscas un hack rápido o una solución mágica",
    "No estás dispuesto a cambiar procesos internos",
    "Necesitas encontrar product-market fit",
    "Quieres externalizar y olvidarte",
  ],
};

export default function WhoItsFor() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("Is this for you?", "¿Esto es para ti?")}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          {t("I work with a small number of companies at a time. Here's how to know if we're a fit.",
            "Trabajo con un número reducido de empresas a la vez. Así sabrás si encajamos.")}
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-8">
            <h3 className="mb-6 text-lg font-bold text-primary">{t("Yes, it's for you", "Sí, es para ti")}</h3>
            <ul className="space-y-4">
              {(lang === "en" ? yes.en : yes.es).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-8">
            <h3 className="mb-6 text-lg font-bold text-destructive">{t("Not for you", "No es para ti")}</h3>
            <ul className="space-y-4">
              {(lang === "en" ? no.en : no.es).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
