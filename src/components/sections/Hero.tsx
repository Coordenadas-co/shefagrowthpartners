import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { useParallax } from "@/hooks/useParallax";

const bullets = {
  en: [
    "Close rate jumps 2-3× — so every lead is worth more",
    "Predictable pipeline — so you stop guessing where next month's revenue comes from",
    "No retainer risk — I eat what I kill alongside you",
  ],
  es: [
    "Tasa de cierre sube 2-3× — cada lead vale más",
    "Pipeline predecible — deja de adivinar de dónde vendrán los ingresos del próximo mes",
    "Sin riesgo de retainer — solo gano cuando tú ganas",
  ],
};

export default function Hero() {
  const { lang, t } = useLang();
  const { openBooking } = useBooking();
  const offset = useParallax(0.3);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_52%_54%/0.06)_0%,transparent_70%)]"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <FloatingParticles />
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {t("Growth Partner for B2B & SaaS", "Growth Partner para B2B y SaaS")}
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="inline-block animate-fade-in" style={{ animationDelay: "0.25s" }}>
            {t(
              "Increase revenue to your B2B pipeline in 90 days",
              "Aumenta los ingresos de tu pipeline B2B en 90 días"
            )}
          </span>
          <br />
          <span className="inline-block text-gradient-gold animate-fade-in text-3xl sm:text-4xl lg:text-5xl" style={{ animationDelay: "0.45s" }}>
            {t("without hiring a single rep", "sin contratar un solo vendedor")}
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {t(
            "I embed with your team, rebuild your commercial engine, and only get paid when you grow. 30+ companies scaled this way.",
            "Me integro a tu equipo, reconstruyo tu motor comercial, y solo cobro cuando creces. 30+ empresas escalaron así."
          )}
        </p>

        <ul className="mx-auto mb-10 flex max-w-lg flex-col gap-3 text-left animate-fade-in" style={{ animationDelay: "0.75s" }}>
          {(lang === "en" ? bullets.en : bullets.es).map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
              <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <Button size="lg" className="w-full sm:w-auto gap-2 text-base font-semibold animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-[0_0_25px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_40px_hsl(43_52%_54%/0.5)] transition-shadow" onClick={openBooking}>
            {t("Book Your Free Growth Diagnostic", "Agenda tu Diagnóstico de Crecimiento Gratis")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground">
            {t("30-min call. I'll show you exactly where you're leaking revenue.", "Llamada de 30 min. Te mostraré exactamente dónde estás perdiendo ingresos.")}
          </p>
        </div>
      </div>
    </section>
  );
}
