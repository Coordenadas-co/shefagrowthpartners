import { useLang } from "@/contexts/LanguageContext";

const VIDEO_IDS = {
  en: "yAJMUIdEwx8",
  es: "JdajKCPv3D4",
};

export default function VSLPlayer() {
  const { lang } = useLang();
  const videoId = VIDEO_IDS[lang];

  return (
    <div
      className="mx-auto mb-6 w-full max-w-3xl animate-fade-in"
      style={{ animationDelay: "0.55s" }}
    >
      <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-background/40 shadow-[0_0_40px_hsl(43_52%_54%/0.25)]">
        <div className="aspect-video w-full">
          <iframe
            key={`${lang}-${videoId}`}
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
            title="Sales Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
