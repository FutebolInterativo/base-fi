"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Preciso ter experiência no futebol para fazer o curso?",
    answer:
      "Não. O curso foi desenhado para quem está começando do zero e também para quem já atua e quer se especializar.",
  },
  {
    question: "O curso é ao vivo ou gravado?",
    answer:
      "O conteúdo é 100% gravado, com acesso imediato, para você estudar no seu próprio ritmo.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso é vitalício, incluindo futuras atualizações do conteúdo.",
  },
  {
    question: "Recebo certificado?",
    answer: "Sim, certificado de conclusão é emitido automaticamente ao final do curso.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional, com devolução total do valor pago.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-ink-soft py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />

          <div className="mt-10 divide-y divide-white/5 border-t border-white/5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-ivory">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-200 ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-mist">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
