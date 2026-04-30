import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { useParallax } from "@/hooks/useParallax";
import heroBg from "@/assets/hero-bg.png";

const bullets = {
  en: [
    "Close rate jumps 2-3× — so every lead is worth more",
    "Predictable pipeline — no more guessing where next month's revenue comes from",
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
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
      {/* Background image */}
      <img
        src={heroBg}
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
        className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {t("Growth Partner for B2B & SaaS", "Growth Partner para B2B y SaaS")}
        </p>
        <h1 className="mb-4 break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          <span className="inline-block animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <>
              {t("Increase revenue to your", "Aumenta los ingresos de tu")}
              <br />
              {t("business in 90 days", "negocio en 90 días")}
            </>
          </span>
          <br />
          <span className="mt-2 inline-block break-words text-gradient-gold animate-fade-in text-xl leading-tight sm:text-2xl lg:text-3xl" style={{ animationDelay: "0.45s" }}>
            {t("without hiring a single rep", "sin contratar un solo vendedor")}
          </span>
        </h1>
        <p className="mx-auto mb-4 md:mb-5 max-w-xl text-sm sm:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {t(
            "I become your Growth Partner: I redesign your commercial system to generate predictable revenue, execute alongside you, and only get paid when your company grows. 30+ companies have already scaled under this model.",
            "Me convierto en tu Growth Partner: rediseño tu sistema comercial para generar ingresos predecibles, ejecuto contigo y solo gano cuando tu empresa crece. Más de 30 compañías ya escalaron bajo este modelo."
          )}
        </p>

        <ul className="mx-auto mb-3 md:mb-4 flex max-w-lg flex-col gap-2 md:gap-2.5 text-left animate-fade-in" style={{ animationDelay: "0.75s" }}>
          {(lang === "en" ? bullets.en : bullets.es).map((b, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[13px] sm:text-sm text-foreground/90">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>

        <GuaranteeBadge variant="compact" className="mb-3 md:mb-4 animate-fade-in" />

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4 sm:justify-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <Button size="lg" className="w-full sm:w-auto gap-2 text-base font-semibold animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-[0_0_25px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_40px_hsl(43_52%_54%/0.5)] transition-shadow" onClick={openBooking}>
            {t("Book your strategic diagnostic now", "Agenda tu diagnóstico estratégico ahora")}
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
