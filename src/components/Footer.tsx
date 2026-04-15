import { useLang } from "@/contexts/LanguageContext";
import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { en: "Problem", es: "Problema", href: "#problem" },
  { en: "Solution", es: "Solución", href: "#solution" },
  { en: "Results", es: "Resultados", href: "#results" },
  { en: "Method", es: "Método", href: "#methodology" },
  { en: "About", es: "Sobre mí", href: "#about" },
];

export default function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Shefa Growth Partners" className="h-10 w-auto" />
              <p className="text-xl font-bold tracking-tight">
                <span className="text-gradient-gold">Shefa</span>{" "}
                <span className="text-foreground">Growth Partners</span>
              </p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {t("Predictable growth, by design.", "Crecimiento predecible, por diseño.")}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {lang === "en" ? item.en : item.es}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@shefagrowth.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Shefa Growth Partners. {t("All rights reserved.", "Todos los derechos reservados.")}</p>
        </div>
      </div>
    </footer>
  );
}
