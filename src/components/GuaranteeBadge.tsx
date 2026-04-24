import { useLang } from "@/contexts/LanguageContext";
import { ShieldCheck } from "lucide-react";

interface Props {
  variant?: "compact" | "full";
  className?: string;
}

export default function GuaranteeBadge({ variant = "full", className = "" }: Props) {
  const { t } = useLang();

  const text = t(
    "We're so confident we'll bring you value that if you don't consider our diagnostic call delivered a valuable strategy to scale your revenue, my team and I will send you $100 USD for your time. Zero risk.",
    "Estamos tan seguros de darte valor que si en la llamada no consideras que te entregamos una estrategia valiosa para escalar tus ingresos, mi equipo y yo te enviamos $100 USD por haber perdido tu tiempo. Cero riesgo."
  );

  if (variant === "compact") {
    return (
      <div className={`mx-auto flex max-w-xl items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs text-foreground/90 ${className}`}>
        <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
        <span className="text-left">
          <strong className="text-primary">{t("$100 USD guarantee:", "Garantía $100 USD:")}</strong>{" "}
          {t("if no value, we pay you back.", "si no hay valor, te pagamos.")}
        </span>
      </div>
    );
  }

  return (
    <div className={`mx-auto flex max-w-2xl items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-left ${className}`}>
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <p className="text-sm text-foreground/90">
        <strong className="text-primary">{t("Guarantee: ", "Garantía: ")}</strong>
        {text}
      </p>
    </div>
  );
}
