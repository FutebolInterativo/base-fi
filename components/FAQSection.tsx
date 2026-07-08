"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Preciso já trabalhar com futebol pra fazer a formação?",
    answer:
      "Não. A formação foi desenhada pra quem está começando do zero ou migrando de outra área. O módulo 1 é justamente um diagnóstico do seu perfil.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Acesso vitalício, incluindo atualizações futuras do conteúdo. Você estuda no seu ritmo.",
  },
  {
    question: "O certificado é reconhecido?",
    answer:
      "Você recebe o certificado de conclusão do Futebol Interativo, empresa com 8 anos de mercado e mais de 120 clubes parceiros — um ativo real pro seu currículo e LinkedIn.",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer:
      "As aulas são gravadas e liberadas imediatamente após a compra, pra você assistir quando e onde quiser. A comunidade no WhatsApp é o espaço vivo de networking e dúvidas.",
  },
  {
    question: "Em quanto tempo consigo uma vaga no futebol?",
    answer:
      "Sendo transparente: ninguém sério pode garantir emprego — e quem promete isso está mentindo. O que garantimos é o método, o conhecimento e o networking que encurtam esse caminho. A velocidade depende da sua dedicação.",
  },
  {
    question: "Posso parcelar?",
    answer: "Sim — em até 12x de R$24,75 sem juros no cartão de crédito. Também aceitamos Pix à vista.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Não gostou, devolvemos 100% do valor.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-ink-soft py-20">
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blue/10 blur-[120px]" />
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            description="Tudo que você precisa saber antes de começar."
          />

          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`glass-panel rounded-xl transition-colors duration-300 ${
                    isOpen ? "border-cyan/25" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
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
                    <p className="overflow-hidden px-6 text-sm leading-relaxed text-mist">
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
