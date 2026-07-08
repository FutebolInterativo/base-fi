import { Users, FileQuestion, Clock } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const pains = [
  {
    icon: Users,
    title: "Sem rede de contatos",
    description:
      "Você não conhece ninguém dentro de um clube ou empresa do setor — e vê vaga boa ir pra quem \"conhece alguém\".",
  },
  {
    icon: FileQuestion,
    title: "Conteúdo genérico",
    description:
      "Cursos tradicionais não falam a língua específica do futebol e do alto rendimento.",
  },
  {
    icon: Clock,
    title: "Sem tempo nem dinheiro",
    description:
      "Pós-graduações custam caro e levam anos. Você precisa de resultado prático e rápido.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-soft py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blue/10 blur-[120px]" />
      <Container>
        <Reveal>
          <SectionHeading
            title="O mercado do futebol parece fechado para quem está de fora"
            description="Se você já sentiu isso, não é impressão. Mas existe um caminho estruturado pra entrar."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pains.map(({ icon: Icon, title, description }) => (
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
        </Reveal>
      </Container>
    </section>
  );
}
