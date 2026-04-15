import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "shefa_popup_shown";

export default function ConversionPopup() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

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
              {t("Get Your Free Growth Diagnostic", "Obtén tu Diagnóstico de Crecimiento Gratis")}
            </span>
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-muted-foreground">
            {t(
              "In 30 minutes, we'll identify your #1 revenue bottleneck and map a clear action plan — no strings attached.",
              "En 30 minutos, identificaremos tu principal cuello de botella de ingresos y trazaremos un plan de acción claro — sin compromiso."
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3">
          <Button size="lg" className="w-full gap-2 font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)]" asChild>
            <a href="https://api.leadconnectorhq.com/widget/booking/FHOxAqdafvXaA2qoyd7c" target="_blank" rel="noopener noreferrer">
              {t("Book My Free Session", "Agendar Mi Sesión Gratis")}
              <ArrowRight className="h-4 w-4" />
            </a>
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
