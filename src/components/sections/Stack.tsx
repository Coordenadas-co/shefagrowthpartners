import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Briefcase, Layers, MapPin, Search, Megaphone } from "lucide-react";

const tools = [
  { icon: Mail, name: "Klaviyo", tag: "Partners & Experts" },
  { icon: Briefcase, name: "HubSpot", tag: "CRM" },
  { icon: Layers, name: "GoHighLevel", tag: "Automation" },
  { icon: MapPin, name: "Coordenadas.co", tag: "Partners" },
  { icon: Search, name: "Google Ads", tag: "Paid Search" },
  { icon: Megaphone, name: "Meta Ads", tag: "Paid Social" },
];

export default function Stack() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="stack" className="bg-section-alt py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
          {t("Tools we work with", "Herramientas con las que trabajamos")}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          {t(
            "Certified partnerships and battle-tested tech behind every system we build.",
            "Alianzas certificadas y tecnología probada detrás de cada sistema que construimos."
          )}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <tool.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-bold">{tool.name}</p>
              <p className="text-xs text-muted-foreground">{tool.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
