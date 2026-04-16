import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    en: { q: "How is this different from hiring a sales consultant?", a: "I don't advise — I execute. I embed with your team, build the systems myself, and only get paid when you grow. No PowerPoint decks, no 90-page reports that collect dust." },
    es: { q: "¿En qué se diferencia de contratar un consultor de ventas?", a: "No asesoro — ejecuto. Me integro con tu equipo, construyo los sistemas yo mismo y solo cobro cuando creces. Sin presentaciones de PowerPoint, sin reportes de 90 páginas que juntan polvo." },
  },
  {
    en: { q: "What kind of results can I expect?", a: "Typical partners see 2-3× improvement in close rates and a predictable pipeline within 90 days. The exact numbers depend on your current setup, which is why the diagnostic call exists — so I can give you a realistic projection, not a generic promise." },
    es: { q: "¿Qué tipo de resultados puedo esperar?", a: "Los partners típicos ven una mejora de 2-3× en tasas de cierre y un pipeline predecible en 90 días. Los números exactos dependen de tu configuración actual, por eso existe la llamada diagnóstica — para darte una proyección realista, no una promesa genérica." },
  },
  {
    en: { q: "How long until I see results?", a: "We start executing in week 1. First measurable results by day 30. Full commercial system live by day 90. This isn't a 6-month engagement where you wait and hope." },
    es: { q: "¿Cuánto tiempo hasta ver resultados?", a: "Empezamos a ejecutar en la semana 1. Primeros resultados medibles para el día 30. Sistema comercial completo en vivo para el día 90. Esto no es un engagement de 6 meses donde esperas y cruzas los dedos." },
  },
  {
    en: { q: "What do I need to commit?", a: "2 hours per week of your time and access to your CRM. That's it. I handle strategy, execution, and optimization. You focus on running your business." },
    es: { q: "¿Qué necesito comprometer?", a: "2 horas por semana de tu tiempo y acceso a tu CRM. Eso es todo. Yo me encargo de la estrategia, ejecución y optimización. Tú te enfocas en manejar tu negocio." },
  },
  {
    en: { q: "What if it doesn't work?", a: "This is performance-based. If you don't grow, I don't earn. I'm putting my time and expertise on the line alongside you — we both have skin in the game." },
    es: { q: "¿Qué pasa si no funciona?", a: "Esto es basado en resultados. Si no creces, no cobro. Pongo mi tiempo y experiencia en juego junto contigo — ambos tenemos skin in the game." },
  },
  {
    en: { q: "Do you work with companies outside B2B/SaaS?", a: "My sweet spot is B2B and SaaS companies doing $500K–$10M ARR. That's where my frameworks deliver the fastest ROI. If you're outside that range, the diagnostic call will tell us quickly if there's a fit." },
    es: { q: "¿Trabajas con empresas fuera de B2B/SaaS?", a: "Mi punto fuerte son empresas B2B y SaaS con $500K–$10M ARR. Ahí es donde mis frameworks entregan el ROI más rápido. Si estás fuera de ese rango, la llamada diagnóstica nos dirá rápidamente si hay fit." },
  },
];

export default function FAQ() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="faq" className="bg-background py-16 lg:py-20 xl:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          {t("Frequently Asked Questions", "Preguntas Frecuentes")}
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          {t(
            "Everything you need to know before booking your diagnostic call.",
            "Todo lo que necesitas saber antes de agendar tu llamada diagnóstica."
          )}
        </p>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => {
            const item = lang === "en" ? faq.en : faq.es;
            return (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-border/40 bg-card px-4"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
