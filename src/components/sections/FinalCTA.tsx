import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Download, Clock } from "lucide-react";
import GuaranteeBadge from "@/components/GuaranteeBadge";

const objections = {
  en: [
    { q: '"I\'ve tried consultants before"', a: "I'm not a consultant. I execute. And I only get paid on results." },
    { q: '"We don\'t have budget for this"', a: "No retainer. I invest my time upfront. We both win or nobody pays." },
    { q: '"Our sales process is too complex"', a: "That's exactly what I fix. The more complex, the more I can unlock." },
    { q: '"We need to think about it"', a: "Revenue leaks don't wait. Book the free call, decide after." },
  ],
  es: [
    { q: '"Ya probé con consultores"', a: "No soy consultor. Yo ejecuto. Y solo cobro por resultados." },
    { q: '"No tenemos presupuesto para esto"', a: "Sin retainer. Invierto mi tiempo primero. Ambos ganamos o nadie paga." },
    { q: '"Nuestro proceso de ventas es muy complejo"', a: "Eso es exactamente lo que arreglo. Más complejo = más oportunidad." },
    { q: '"Necesitamos pensarlo"', a: "Las fugas de ingresos no esperan. Agenda la llamada gratis, decide después." },
  ],
};

export default function FinalCTA() {
  const { t, lang } = useLang();
  const { openBooking } = useBooking();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? objections.en : objections.es;

  return (
    <section id="cta" className="bg-section-alt py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          {t(
            "Stop patching. Start building.",
            "Deja de parchar. Empieza a construir."
          )}
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          {t(
            "Book a free 30-minute growth diagnostic. I'll show you exactly where you're leaking revenue and map the first steps to fix it.",
            "Agenda un diagnóstico de crecimiento gratuito de 30 minutos. Te mostraré exactamente dónde estás perdiendo ingresos y trazaremos los primeros pasos para arreglarlo."
          )}
        </p>

        {/* Guarantee */}
        <GuaranteeBadge className="mb-8" />

        <Button size="lg" className="gap-2 text-base font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_30px_hsl(43_52%_54%/0.5)] transition-shadow" onClick={openBooking}>
          <Download className="h-4 w-4" />
          {t("Download the free guide", "Descarga la guía gratis")}
        </Button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {t("Limited spots — I only take 5 partners at a time.",
            "Cupos limitados — solo trabajo con 5 partners a la vez.")}
        </div>

        {/* Objection handling */}
        <div className="mt-12 space-y-4 text-left">
          {items.map((obj, i) => (
            <div key={i} className="rounded-lg border border-border/40 bg-card p-4">
              <p className="text-sm font-semibold text-foreground/80 italic">{obj.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{obj.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
