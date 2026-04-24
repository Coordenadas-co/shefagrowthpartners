import { useLang } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import SectionCTA from "@/components/SectionCTA";

const faqs = [
  {
    en: {
      q: "How do I know this will actually generate results in my company?",
      a: "I don't work with promises — I work with systems and execution. Before starting, we analyze your current situation and pinpoint exactly where money is being lost in your commercial process. If I see no real growth potential, I'll tell you directly. If we move forward together, it's because there's a clear opportunity to generate ROI.",
    },
    es: {
      q: "¿Cómo sé que esto realmente va a generar resultados en mi empresa?",
      a: "No trabajo con promesas, trabajo con sistemas y ejecución. Antes de empezar, analizamos tu situación actual y detectamos exactamente dónde se está perdiendo el dinero en tu proceso comercial. Si veo que no hay potencial real de crecimiento, te lo digo directamente. Si entramos a trabajar juntos, es porque hay una oportunidad clara de generar ROI.",
    },
  },
  {
    en: {
      q: "How involved are you in the execution?",
      a: "I'm not an external consultant who delivers recommendations and disappears. I integrate into your operation, structure the commercial system, and work alongside your team on implementation. The goal isn't just to improve results — it's to leave behind a system that runs even without me.",
    },
    es: {
      q: "¿Qué tan involucrado estás en la ejecución?",
      a: "No soy un consultor externo que entrega recomendaciones y desaparece. Me integro a tu operación, estructuro el sistema comercial y trabajo junto a tu equipo en la implementación. El objetivo no es solo mejorar resultados, sino dejar un sistema que funcione incluso sin mi presencia.",
    },
  },
  {
    en: {
      q: "How are you different from an agency or traditional consultant?",
      a: "An agency executes tasks. A consultant gives recommendations. I build with you the system that generates predictable revenue. I work from strategy through commercial execution (offer, sales process, team, metrics) with total focus on real growth.",
    },
    es: {
      q: "¿En qué te diferencias de una agencia o consultor tradicional?",
      a: "Una agencia ejecuta tareas. Un consultor da recomendaciones. Yo construyo contigo el sistema que genera ingresos de forma predecible. Trabajo desde la estrategia hasta la ejecución comercial (oferta, proceso de ventas, equipo, métricas), con enfoque total en crecimiento real.",
    },
  },
  {
    en: {
      q: "How long until I see results?",
      a: "It depends on the starting point, but typically the first changes show in weeks, not months. We optimize first what you already have (offer, conversion, commercial process), generating quick impact before scaling.",
    },
    es: {
      q: "¿En cuánto tiempo puedo ver resultados?",
      a: "Depende del punto de partida, pero normalmente los primeros cambios se ven en semanas, no en meses. Optimizamos primero lo que ya tienes (oferta, conversión, proceso comercial), lo que permite generar impacto rápido antes de escalar.",
    },
  },
  {
    en: {
      q: "Is this service for my type of business?",
      a: "I work with businesses that already sell and want to grow with structure: B2B, B2C, e-commerce, infoproducts and traditional businesses. More than the industry, what matters is having a real base and the will to scale.",
    },
    es: {
      q: "¿Este servicio es para mi tipo de negocio?",
      a: "Trabajo con empresas que ya venden y quieren crecer con estructura: B2B, B2C, e-commerce, infoproductos y negocios tradicionales. Más que la industria, lo importante es que exista una base real y voluntad de escalar.",
    },
  },
  {
    en: {
      q: "Do I need to have a sales team to work with you?",
      a: "Not necessarily. I can help you structure, optimize, or even design your commercial system from scratch. If you already have a team, we align it and make it more efficient. If not, we build one with you.",
    },
    es: {
      q: "¿Necesito tener un equipo de ventas para trabajar contigo?",
      a: "No necesariamente. Puedo ayudarte a estructurar, optimizar o incluso diseñar tu sistema comercial desde cero. Si ya tienes equipo, lo alineamos y lo hacemos más eficiente. Si no, construimos uno contigo.",
    },
  },
  {
    en: {
      q: "How does the investment work?",
      a: "The model depends on the type of engagement, but it's designed to align with results. The goal is for the investment to make financial sense from the growth it generates. This is defined clearly during the diagnostic call.",
    },
    es: {
      q: "¿Cómo funciona la inversión?",
      a: "El modelo depende del tipo de intervención, pero está diseñado para alinearse con resultados. El objetivo es que la inversión tenga sentido financiero desde el crecimiento que se genera. Esto se define con claridad en la llamada diagnóstica.",
    },
  },
  {
    en: {
      q: "Will this consume too much of my team's time?",
      a: "We don't add unnecessary load — we eliminate friction. Implementation is designed to integrate into your current operation and make it more efficient, not more complex.",
    },
    es: {
      q: "¿Esto va a consumir demasiado tiempo de mi equipo?",
      a: "No buscamos añadir carga innecesaria, sino eliminar fricción. La implementación está diseñada para integrarse a tu operación actual y hacerla más eficiente, no más compleja.",
    },
  },
  {
    en: {
      q: "Who don't you work with?",
      a: "I don't work with companies looking for quick fixes without structure, or with businesses that haven't yet validated their ability to generate sales. This approach is for companies that want to build sustainable, scalable growth.",
    },
    es: {
      q: "¿Con quién no trabajas?",
      a: "No trabajo con empresas que buscan soluciones rápidas sin estructura, ni con negocios que aún no han validado su capacidad de generar ventas. Este enfoque es para empresas que quieren construir crecimiento sostenible y escalable.",
    },
  },
  {
    en: {
      q: "What happens during the diagnostic call?",
      a: "We analyze your current situation, identify growth opportunities, and define whether it makes sense to work together. If there's a fit, I'll explain exactly how we'd execute it. If not, you'll walk away with total clarity on what to do next.",
    },
    es: {
      q: "¿Qué pasa en la llamada diagnóstica?",
      a: "Analizamos tu situación actual, identificamos oportunidades de crecimiento y definimos si tiene sentido trabajar juntos. Si hay fit, te explico exactamente cómo lo ejecutaríamos. Si no, te llevas claridad total sobre qué hacer a continuación.",
    },
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
        <p className="mb-8 text-center text-muted-foreground">
          {t(
            "Everything you need to know before booking your diagnostic call.",
            "Todo lo que necesitas saber antes de agendar tu llamada diagnóstica."
          )}
        </p>

        <GuaranteeBadge className="mb-8" />

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

        <SectionCTA
          label={t("Book your private strategy session", "Reserva tu sesión estratégica privada")}
          className="mt-12"
        />
      </div>
    </section>
  );
}
