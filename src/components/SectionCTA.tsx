import { useBooking } from "@/contexts/BookingContext";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Props {
  label?: string;
  className?: string;
}

export default function SectionCTA({ label, className = "" }: Props) {
  const { openBooking } = useBooking();
  const { t } = useLang();

  const text = label ?? t("Download the free guide", "Descarga la guía gratis");

  return (
    <div className={`flex justify-center ${className}`}>
      <Button
        size="lg"
        onClick={openBooking}
        className="w-full sm:w-auto gap-2 text-base font-semibold shadow-[0_0_20px_hsl(43_52%_54%/0.3)] hover:shadow-[0_0_30px_hsl(43_52%_54%/0.5)] transition-shadow"
      >
        <Download className="h-4 w-4" />
        {text}
      </Button>
    </div>
  );
}
