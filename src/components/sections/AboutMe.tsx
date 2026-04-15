import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin } from "lucide-react";

export default function AboutMe() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="bg-section-alt py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* Photo placeholder */}
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
            <span className="text-4xl font-bold text-primary">JSM</span>
          </div>

          <div>
            <h2 className="mb-2 text-3xl font-bold">Juan Sebastián Medrano</h2>
            <p className="mb-1 text-sm font-semibold text-primary">
              {t("Fractional CRO & Growth Partner", "CRO Fraccional & Growth Partner")}
            </p>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              {t(
                "With over a decade of experience building and scaling revenue engines for B2B and SaaS companies across Latin America and the US, I've led commercial transformations that generated millions in incremental revenue. I believe growth shouldn't depend on luck — it should depend on systems. That's why I partner with ambitious founders and revenue leaders who are ready to build something predictable and scalable.",
                "Con más de una década de experiencia construyendo y escalando motores de ingresos para empresas B2B y SaaS en Latinoamérica y EE.UU., he liderado transformaciones comerciales que generaron millones en ingresos incrementales. Creo que el crecimiento no debería depender de la suerte — debería depender de sistemas. Por eso me aliado con fundadores ambiciosos y líderes de revenue que están listos para construir algo predecible y escalable."
              )}
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
