import { MessageCircle, Compass, Users2 } from "lucide-react";
import { Container, Eyebrow, SectionHeading, CTAButton } from "./ui";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: MessageCircle,
    title: "Fala a língua do mercado",
    description:
      "Termos, funções e estruturas que fazem você ser levado a sério em qualquer conversa do setor.",
  },
  {
    icon: Compass,
    title: "Sabe onde estão as vagas",
    description: "Os canais reais onde clubes e empresas contratam — e como se posicionar pra elas.",
  },
  {
    icon: Users2,
    title: "Constrói networking certo",
    description: "Comunidade de alunos + cases reais de clubes e empresas parceiras do FI.",
  },
];

export function TransformationSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="pointer-events-none absolute right-[-8rem] top-1/4 -z-10 h-80 w-80 rounded-full bg-cyan/10 blur-[130px]" />
      <Container>
        <Reveal className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>O que muda na sua carreira</Eyebrow>
            <SectionHeading
              title="Do zero ao primeiro passo dentro do futebol"
              description="Em 30 dias você sai do achismo e passa a entender como clubes, federações e empresas do setor realmente funcionam — com linguagem, ferramentas e networking que abrem portas reais."
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {cards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-panel rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/25"
              >
                <Icon className="h-6 w-6 text-cyan" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg font-bold text-ivory">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <CTAButton>Garantir minha vaga</CTAButton>
            <span className="text-xs text-mist">Acesso vitalício · Certificado incluso</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
