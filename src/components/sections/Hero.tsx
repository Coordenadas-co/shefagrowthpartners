import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, CalendarCheck } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import VSLPlayer from "@/components/VSLPlayer";
import GoldNumbers from "@/components/GoldNumbers";
import { useParallax } from "@/hooks/useParallax";
import heroBgAsset from "@/assets/jsm-office.png.asset.json";

const heroBg = heroBgAsset.url;

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
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
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
        className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {t("Growth Partner for Predictable Revenue Systems", "Growth Partner para sistemas de ingresos predecibles")}
        </p>
        <h1 className="mb-4 break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          <span className="inline-block animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <GoldNumbers
              text={t(
                "5 Ways for $20K+/Month Businesses to Turn an Unpredictable Sales System Into a 30%+ Close Rate in 90 Days",
                "5 formas de dejar atrás un sistema comercial impredecible y alcanzar una tasa de cierre superior al 30% en 90 días para empresas que facturan más de USD $20.000 al mes."
              )}
            />
          </span>

          <br />
          <span className="mt-2 inline-block break-words text-gradient-gold animate-fade-in text-xl leading-tight sm:text-2xl lg:text-3xl" style={{ animationDelay: "0.45s" }}>
            {t(
              "Guaranteed, without depending on the owner — using the Shefa Growth Architecture System™",
              "Garantizado, sin depender del dueño, utilizando el Shefa Growth Architecture System™"
            )}
          </span>
        </h1>

        <VSLPlayer />

        <div className="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-4 sm:justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Button size="lg" className="w-full sm:w-auto gap-2 text-base font-semibold animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-[0_0_25px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_40px_hsl(43_52%_54%/0.5)] transition-shadow" onClick={openBooking}>
            <CalendarCheck className="h-4 w-4" />
            {t("Book your free call", "Agenda tu llamada gratis")}
          </Button>
          <p className="text-xs text-muted-foreground">
            {t(
              "Free 30-min diagnostic · No commitment",
              "Diagnóstico gratis de 30 min · Sin compromiso"
            )}
          </p>
        </div>


        <GuaranteeBadge variant="compact" className="mb-5 animate-fade-in" />

        <p className="mx-auto mb-4 max-w-xl text-sm sm:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.85s" }}>
          {t(
            "I become your Growth Partner: I redesign your commercial system to generate predictable revenue, execute alongside you, and only get paid when your company grows. 30+ companies have already scaled under this model.",
            "Me convierto en tu Growth Partner: rediseño tu sistema comercial para generar ingresos predecibles, ejecuto contigo y solo gano cuando tu empresa crece. Más de 30 compañías ya escalaron bajo este modelo."
          )}
        </p>

        <ul className="mx-auto flex max-w-lg flex-col gap-2 md:gap-2.5 text-left animate-fade-in" style={{ animationDelay: "0.95s" }}>
          {(lang === "en" ? bullets.en : bullets.es).map((b, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[13px] sm:text-sm text-foreground/90">
              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
