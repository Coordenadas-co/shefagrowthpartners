import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import atmosfera from "@/assets/clients/atmosfera.jpeg";
import leset from "@/assets/clients/leset.png";
import tag from "@/assets/clients/tag.png";
import draLinaTriana from "@/assets/clients/dra-lina-triana.png";
import agefit from "@/assets/clients/agefit.png";
import exness from "@/assets/clients/exness.png";
import cronox from "@/assets/clients/cronox.png";
import amparoAguirre from "@/assets/clients/amparo-aguirre.png";
import unox from "@/assets/clients/unox.png";
import visdecol from "@/assets/clients/visdecol.png";

const logos = [
  { src: atmosfera, alt: "Atmósfera" },
  { src: leset, alt: "Leset" },
  { src: tag, alt: "TAG" },
  { src: draLinaTriana, alt: "Dra. Lina Triana" },
  { src: agefit, alt: "AgeFit" },
  { src: exness, alt: "Exness" },
  { src: cronox, alt: "Cronox" },
  { src: amparoAguirre, alt: "Amparo Aguirre" },
  { src: unox, alt: "Unox" },
  { src: visdecol, alt: "Visdecol" },
];

export default function ClientLogos() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {t("Trusted by", "Han confiado en nosotros")}
        </p>
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 max-w-[120px] object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
