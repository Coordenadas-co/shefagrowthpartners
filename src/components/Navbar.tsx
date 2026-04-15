import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { en: "Problem", es: "Problema", href: "#problem" },
  { en: "Solution", es: "Solución", href: "#solution" },
  { en: "Results", es: "Resultados", href: "#results" },
  { en: "Method", es: "Método", href: "#methodology" },
  { en: "About", es: "Sobre mí", href: "#about" },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gradient-gold">Shefa</span>{" "}
          <span className="text-foreground">Growth Partners</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {lang === "en" ? item.en : item.es}
            </a>
          ))}
          <Button size="sm" onClick={toggleLang} variant="outline" className="min-w-[48px] text-xs font-semibold">
            {lang === "en" ? "ES" : "EN"}
          </Button>
          <Button size="sm" asChild>
            <a href="#cta">{t("Apply Now", "Aplica ahora")}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-border/40 bg-background px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {lang === "en" ? item.en : item.es}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button size="sm" onClick={toggleLang} variant="outline" className="text-xs font-semibold">
              {lang === "en" ? "ES" : "EN"}
            </Button>
            <Button size="sm" asChild>
              <a href="#cta" onClick={() => setOpen(false)}>{t("Apply Now", "Aplica ahora")}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
