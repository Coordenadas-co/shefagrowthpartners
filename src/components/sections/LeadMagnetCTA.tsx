import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CheckCircle2, Download } from "lucide-react";

export default function LeadMagnetCTA() {
  const { t } = useLang();
  const { openBooking } = useBooking();
  const { ref, visible } = useScrollReveal();

  const bullets = [
    t(
      "Identify the lever with the highest impact on your revenue",
      "Identifica la palanca de mayor impacto en tus ingresos"
    ),
    t(
      "Self-assessment: is your company ready to scale?",
      "Autoevaluación: ¿tu empresa está lista para escalar?"
    ),
    t(
      "Capital, partners and acquisition without burning runway",
      "Capital, alianzas y adquisición sin quemar runway"
    ),
  ];

  return (
    <section className="bg-section-alt py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-6 shadow-[0_0_40px_hsl(43_52%_54%/0.08)] transition-all duration-700 sm:p-10 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            {/* PDF mockup */}
            <div className="mx-auto md:mx-0">
              <div className="relative flex h-44 w-32 sm:h-52 sm:w-40 flex-col items-center justify-center rounded-lg border border-primary/40 bg-gradient-to-b from-primary/20 to-primary/5 p-4 shadow-[0_10px_30px_-10px_hsl(43_52%_54%/0.4)]">
                <BookOpen className="mb-2 h-10 w-10 text-primary" />
                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-primary">
                  {t("Free Guide", "Guía Gratis")}
                </p>
                <p className="mt-1 text-center text-[11px] font-semibold leading-tight text-foreground">
                  {t("The 5 Levers", "Las 5 Palancas")}
                </p>
                <span className="mt-2 rounded bg-primary/20 px-2 py-0.5 text-[9px] font-bold text-primary">
                  PDF
                </span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {t("Free download", "Descarga gratuita")}
              </p>
              <h2 className="mb-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                <span className="text-gradient-gold">
                  {t(
                    "The 5 levers that double your company's growth in 12 months",
                    "Las 5 palancas que duplican el crecimiento de tu empresa en 12 meses"
                  )}
                </span>
              </h2>
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                {t(
                  "A proven framework for founders and executives who want to scale with clarity, smart capital and the right partners.",
                  "Un marco probado para fundadores y directivos que quieren escalar con claridad, capital inteligente y los socios correctos."
                )}
              </p>

              <ul className="mb-5 space-y-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  onClick={openBooking}
                  className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)] sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  {t("Download free guide", "Descargar guía gratis")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  {t("PDF · 100% free · No spam", "PDF · 100% gratis · Sin spam")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
