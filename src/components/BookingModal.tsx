import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/FHOxAqdafvXaA2qoyd7c";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: Props) {
  const { t } = useLang();
  const [loading, setLoading] = useState(true);

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setLoading(true); }}>
      <DialogContent className="max-w-3xl h-[85vh] p-0 gap-0 border-primary/30 bg-card overflow-hidden max-sm:max-w-[100vw] max-sm:h-[100dvh] max-sm:rounded-none max-sm:border-0">
        <DialogTitle className="sr-only">
          {t("Book a Strategy Session", "Agenda una sesión estratégica")}
        </DialogTitle>
        <div className="relative w-full h-full">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            src={BOOKING_URL}
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
