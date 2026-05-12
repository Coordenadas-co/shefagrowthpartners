import { useState, useEffect } from "react";
import { z } from "zod";
import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { useLeadMagnet } from "@/contexts/LeadMagnetContext";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { ArrowRight, BookOpen, CheckCircle2, Download, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const PDF_URLS: Record<"en" | "es", string> = {
  en: "/lead-magnet/5-Levers-Shefa-Growth-Partners-EN.pdf",
  es: "/lead-magnet/5-Palancas-Shefa-Growth-Partners-ES.pdf",
};

const leadSchema = z.object({
  name: z.string().trim().min(2, { message: "Name too short" }).max(120),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s().-]{6,32}$/u, { message: "Invalid phone" }),
});

type Step = "form" | "download" | "upsell";

export default function LeadMagnetPopup() {
  const { isOpen: open, setOpen, openLeadMagnet } = useLeadMagnet();
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { lang, t } = useLang();
  const { openBooking } = useBooking();

  // Reset to first step whenever the popup is closed
  useEffect(() => {
    if (!open) {
      const id = setTimeout(() => setStep("form"), 250);
      return () => clearTimeout(id);
    }
  }, [open]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({ name, email });
    if (!parsed.success) {
      toast.error(t("Please enter a valid name and email.", "Por favor ingresa un nombre y email válidos."));
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("lead_magnet_downloads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      lang,
    });
    setLoading(false);
    if (error) {
      console.error(error);
      toast.error(t("Something went wrong. Try again.", "Algo salió mal. Intenta de nuevo."));
      return;
    }
    setStep("download");
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = PDF_URLS[lang];
    a.download = lang === "es" ? "5-Palancas-Shefa-Growth-Partners.pdf" : "5-Levers-Shefa-Growth-Partners.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setStep("upsell"), 600);
  };

  const handleBooking = () => {
    setOpen(false);
    setTimeout(() => openBooking(), 200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-primary/30 bg-card sm:max-w-lg">
        {step === "form" && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto mb-3 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3 w-3" />
                {t("Free Guide", "Guía Gratuita")}
              </div>
              <DialogTitle className="text-xl font-bold leading-tight sm:text-2xl">
                <span className="text-gradient-gold">
                  {t(
                    "The 5 levers that double your company's growth in 12 months",
                    "Las 5 palancas que duplican el crecimiento de tu empresa en 12 meses"
                  )}
                </span>
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                {t(
                  "A proven framework for founders and executives who want to scale with clarity, smart capital and the right partners.",
                  "Un marco probado para fundadores y directivos que quieren escalar con claridad, capital inteligente y los socios correctos."
                )}
              </DialogDescription>
            </DialogHeader>

            <ul className="my-2 space-y-2 text-sm text-foreground/90">
              {[
                t("Identify the lever with the highest impact on your revenue", "Identifica la palanca de mayor impacto en tus ingresos"),
                t("Self-assessment: is your company ready to scale?", "Autoevaluación: ¿tu empresa está lista para escalar?"),
                t("Capital, partners and acquisition without burning runway", "Capital, alianzas y adquisición sin quemar runway"),
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
              <Input
                type="text"
                placeholder={t("Your name", "Tu nombre")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={120}
                required
                disabled={loading}
              />
              <Input
                type="email"
                placeholder={t("Your work email", "Tu email de trabajo")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
                disabled={loading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)]"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    {t("Send Me The Guide", "Enviarme La Guía")}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                {t("No spam. Unsubscribe anytime.", "Sin spam. Cancela cuando quieras.")}
              </p>
            </form>
          </>
        )}

        {step === "download" && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <DialogTitle className="text-2xl font-bold">
                <span className="text-gradient-gold">
                  {t("Your guide is ready!", "¡Tu guía está lista!")}
                </span>
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                {t(
                  "Click below to download your copy of the 5 Levers framework.",
                  "Haz click abajo para descargar tu copia del marco de las 5 Palancas."
                )}
              </DialogDescription>
            </DialogHeader>

            <div className="mx-auto my-3 flex w-full max-w-xs items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3">
              <BookOpen className="h-8 w-8 shrink-0 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  {t("The 5 Levers", "Las 5 Palancas")}
                </p>
                <p className="text-xs text-muted-foreground">PDF · Shefa Growth Partners</p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleDownload}
              className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)]"
            >
              <Download className="h-4 w-4" />
              {t("Download PDF", "Descargar PDF")}
            </Button>
          </>
        )}

        {step === "upsell" && (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto mb-3 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {t("Next Step", "Siguiente Paso")}
              </div>
              <DialogTitle className="text-xl font-bold leading-tight sm:text-2xl">
                <span className="text-gradient-gold">
                  {t(
                    "You have the map. Want us to apply it together?",
                    "Ya tienes el mapa. ¿Quieres que lo apliquemos juntos?"
                  )}
                </span>
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                {t(
                  "30-min free diagnostic. We'll identify the 2-3 levers with the highest impact for your company — no commitment.",
                  "Diagnóstico gratis de 30 min. Identificamos las 2-3 palancas de mayor impacto para tu empresa — sin compromiso."
                )}
              </DialogDescription>
            </DialogHeader>

            <GuaranteeBadge variant="compact" className="my-3" />

            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                onClick={handleBooking}
                className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)]"
              >
                {t("Book My Free Diagnostic", "Agendar Mi Diagnóstico Gratis")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("No thanks, I'll read the guide first", "No gracias, leeré la guía primero")}
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
