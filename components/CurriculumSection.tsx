import { Star } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const modules = [
  {
    number: "01",
    title: "Diagnóstico de perfil",
    description: "Descubra onde você se encaixa no mercado hoje — e o que falta.",
  },
  {
    number: "02",
    title: "Conhecimento do mercado",
    description: "Como clubes, federações e empresas do setor funcionam por dentro.",
  },
  {
    number: "03",
    title: "Posicionamento profissional",
    description: "Como se apresentar pra ser levado a sério no futebol.",
  },
  {
    number: "04",
    title: "Onde encontrar as melhores vagas",
    description: "Os canais reais de contratação que quase ninguém conhece.",
  },
  {
    number: "05",
    title: "Contratação em clubes",
    description: "O processo seletivo do futebol na prática — e como se destacar nele.",
  },
  {
    number: "bonus",
    title: "Aula bônus: crescimento da indústria",
    description: "As oportunidades que estão surgindo — e onde estarão os empregos.",
    highlight: true,
  },
];

export function CurriculumSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-soft py-20">
      <div className="pointer-events-none absolute right-[-6rem] top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan/10 blur-[120px]" />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Conteúdo programático"
            title="5 módulos + 1 aula bônus para destravar sua entrada"
            description="Sequência pensada pra te levar do diagnóstico à contratação."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {modules.map(({ number, title, description, highlight }) => (
              <div
                key={title}
                className={`flex gap-4 rounded-xl p-6 transition duration-300 hover:-translate-y-0.5 ${
                  highlight ? "glass-panel glow-cyan" : "glass-panel hover:border-cyan/25"
                }`}
              >
                {number === "bonus" ? (
                  <Star className="h-6 w-6 shrink-0 fill-cyan text-cyan" />
                ) : (
                  <span className="shrink-0 font-display text-xl font-extrabold text-cyan">
                    {number}
                  </span>
                )}
                <div>
                  <h3 className="font-display text-base font-bold text-ivory">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
