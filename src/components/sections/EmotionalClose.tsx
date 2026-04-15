import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EmotionalClose() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {t(
            "You don't need more traffic.",
            "No necesitas más tráfico."
          )}
          <br />
          <span className="text-gradient-gold">
            {t("You need a better system.", "Necesitas un mejor sistema.")}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          {t(
            "Stop patching. Start building. Let's create a commercial engine that actually scales.",
            "Deja de parchar. Empieza a construir. Creemos un motor comercial que realmente escale."
          )}
        </p>
      </div>
    </section>
  );
}
