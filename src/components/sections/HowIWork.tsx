import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Handshake, BarChart3, Shield, Zap } from "lucide-react";

const points = {
  en: [
    { icon: Handshake, title: "Partnership, not agency", desc: "I embed with your team as a fractional CRO / growth partner." },
    { icon: BarChart3, title: "Performance-based", desc: "If you don't grow, I don't earn. My incentives are 100% aligned with yours." },
    { icon: Shield, title: "Skin in the game", desc: "I invest my time and expertise upfront because I believe in the outcome." },
    { icon: Zap, title: "Speed to impact", desc: "We start executing in week one — not month three." },
  ],
  es: [
    { icon: Handshake, title: "Partnership, no agencia", desc: "Me integro a tu equipo como CRO fraccional / growth partner." },
    { icon: BarChart3, title: "Basado en rendimiento", desc: "Si no creces, no gano. Mis incentivos están 100% alineados con los tuyos." },
    { icon: Shield, title: "Piel en el juego", desc: "Invierto mi tiempo y expertise desde el inicio porque creo en el resultado." },
    { icon: Zap, title: "Velocidad de impacto", desc: "Empezamos a ejecutar en la semana uno — no en el mes tres." },
  ],
};

export default function HowIWork() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const items = lang === "en" ? points.en : points.es;

  return (
    <section className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {t("How I work", "Cómo trabajo")}
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          {t("This isn't consulting. It's a true partnership built on shared outcomes.",
            "Esto no es consultoría. Es una alianza real basada en resultados compartidos.")}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-lg border border-border/60 bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
