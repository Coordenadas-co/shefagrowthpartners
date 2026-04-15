import { useLang } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Shefa Growth Partners. {t("All rights reserved.", "Todos los derechos reservados.")}</p>
      </div>
    </footer>
  );
}
