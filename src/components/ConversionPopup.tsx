import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "shefa_popup_shown";

export default function ConversionPopup() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const { openBooking } = useBooking();

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-primary/30 bg-card sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-bold">
            <span className="text-gradient-gold">
              {t("You're leaking revenue. Let me show you where.", "Estás perdiendo ingresos. Déjame mostrarte dónde.")}
            </span>
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-muted-foreground">
            {t(
              "Free 30-min diagnostic. I'll identify your #1 revenue bottleneck and give you a clear action plan. If I can't find at least 3 leaks, you get my full audit framework free.",
              "Diagnóstico gratis de 30 min. Identificaré tu principal cuello de botella de ingresos y te daré un plan de acción claro. Si no encuentro al menos 3 fugas, te envío mi framework de auditoría gratis."
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3">
          <Button size="lg" className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)]" onClick={() => { setOpen(false); openBooking(); }}>
            {t("Book My Free Diagnostic", "Agendar Mi Diagnóstico Gratis")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("Maybe later", "Quizás después")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
