import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export default function FinalCTA() {
  const { t } = useLang();
  const { openBooking } = useBooking();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cta" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          {t("Ready to scale?", "¿Listo para escalar?")}
        </h2>
        <p className="mb-8 text-muted-foreground">
          {t(
            "Book a free 30-minute strategy session. We'll diagnose your growth bottleneck and map the first steps together.",
            "Agenda una sesión estratégica gratuita de 30 minutos. Diagnosticaremos tu cuello de botella de crecimiento y trazaremos los primeros pasos juntos."
          )}
        </p>

        <Button size="lg" className="gap-2 text-base font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_30px_hsl(43_52%_54%/0.5)] transition-shadow" onClick={openBooking}>
          {t("Apply for a Strategy Session", "Solicita una sesión estratégica")}
          <ArrowRight className="h-4 w-4" />
        </Button>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {t("Limited spots available — I only take 5 partners at a time.",
            "Cupos limitados — solo trabajo con 5 partners a la vez.")}
        </div>
      </div>
    </section>
  );
}
