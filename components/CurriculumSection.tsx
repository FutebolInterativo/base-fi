import { Container, SectionHeading } from "./ui";

const modules = [
  { number: "01", title: "Diagnóstico de perfil" },
  { number: "02", title: "Conhecimento do mercado" },
  { number: "03", title: "Posicionamento profissional no futebol" },
  { number: "04", title: "Onde encontrar as melhores vagas em clubes" },
  { number: "05", title: "Contratação em clubes" },
  {
    number: "06",
    title: "Aula Extra: crescimento e oportunidades dessa indústria",
    highlight: true,
  },
];

export function CurriculumSection() {
  return (
    <section className="border-t border-white/5 bg-ink-soft py-20">
      <Container>
        <SectionHeading
          eyebrow="Conteúdo programático"
          title="5 módulos para destravar sua entrada no mercado"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {modules.map(({ number, title, highlight }) => (
            <div
              key={number}
              className={`rounded-xl p-6 transition duration-300 hover:-translate-y-0.5 ${
                highlight ? "glass-panel glow-cyan" : "glass-panel hover:border-cyan/25"
              }`}
            >
              <span className="font-display text-xl font-extrabold text-cyan">{number}</span>
              <h3 className="mt-2 font-display text-base font-bold text-ivory">{title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
