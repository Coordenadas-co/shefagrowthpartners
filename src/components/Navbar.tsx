import { useLang } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <img src={logo} alt="Shefa Growth Partners" className="h-8 w-auto" />
          <span>
            <span className="text-gradient-gold">Shefa</span>{" "}
            <span className="text-foreground">Growth Partners</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${activeSection === item.href.slice(1) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
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
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-4 border-t border-border/40 bg-background px-6 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${activeSection === item.href.slice(1) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
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
      </div>
    </nav>
  );
}
