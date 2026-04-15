import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { useParallax } from "@/hooks/useParallax";

const bullets = {
  en: [
    "+30% revenue growth in 90 days",
    "Performance-based partnership",
    "Proven system, not guesswork",
  ],
  es: [
    "+30% de crecimiento de ingresos en 90 días",
    "Alianza basada en resultados",
    "Sistema probado, no improvisación",
  ],
};

export default function Hero() {
  const { lang, t } = useLang();
  const { openBooking } = useBooking();
  const offset = useParallax(0.3);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
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
            {t("Scale your revenue.", "Escala tus ingresos.")}
          </span>
          <br />
          <span className="inline-block text-gradient-gold animate-fade-in" style={{ animationDelay: "0.45s" }}>
            {t("Fix your system.", "Repara tu sistema.")}
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {t(
            "I help B2B and SaaS companies build a predictable, scalable commercial system — so growth stops depending on luck and starts depending on structure.",
            "Ayudo a empresas B2B y SaaS a construir un sistema comercial predecible y escalable — para que el crecimiento deje de depender de la suerte y empiece a depender de la estructura."
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
            {t("Apply for a Strategy Session", "Solicita una sesión estratégica")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <a href="#problem" className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
            {t("See how it works ↓", "Descubre cómo funciona ↓")}
          </a>
        </div>
      </div>
    </section>
  );
}
