import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { CalendarCheck, X } from "lucide-react";

export default function StickyCTA() {
  const { t } = useLang();
  const { openBooking } = useBooking();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-primary/30 bg-background/95 backdrop-blur-lg p-3 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          onClick={openBooking}
          className="flex-1 gap-2 font-semibold"
        >
          <CalendarCheck className="h-4 w-4" />
          {t("Book your call", "Agenda tu llamada")}
        </Button>
        <button
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="p-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
