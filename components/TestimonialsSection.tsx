import Image from "next/image";
import { Star } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Fiz o curso de Jornalismo no Futebol com o Mauro Beting no FI e aquilo abriu minha cabeça pra o que era possível dentro do mercado. De lá, surgiu a RWE 360, uma web rádio criada pelos próprios alunos. Me joguei nisso também e fui alavancando a carreira com cortes de gol no Instagram. Até que a Ulisses TV apareceu. Hoje sou narrador e apresentador de lá, e não poderia estar mais feliz com o caminho que escolhi.",
    name: "Felipe Ito",
    role: "Narrador da Ulisses TV",
    photo: "/images/testimonials/felipe-ito.png",
  },
  {
    quote:
      "Sou aluno do Futebol Interativo em vários cursos. Através das formações, consegui entrar no CSE, onde tive uma ótima passagem com títulos e crescimento de carreira. Após anos de destaque no clube, recebi o convite para o CSA, onde estou hoje na área de Marketing e Comercial.",
    name: "Paulo Marques",
    role: "Coordenador de Marketing e Comercial do CSA",
    photo: "/images/testimonials/paulo-marques.png",
  },
  {
    quote:
      "Fiz o curso de Análise de Desempenho e Mercado e consegui entrar no clube através do grupo de vagas. Surgiu uma oportunidade no grupo, inicialmente de estágio na área de Análise. Me candidatei e fui contratado. Após 7 meses, fui efetivado pelo clube.",
    name: "Guilherme Gonçalves",
    role: "Analista de Desempenho da Portuguesa/SP",
    photo: "/images/testimonials/guilherme-goncalves.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-soft py-20">
      <div className="pointer-events-none absolute right-[-6rem] bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]" />
      <Container>
        <Reveal>
          <SectionHeading
            title="Quem passou pelo FI, conta"
            description="Mais de 25 mil alunos já passaram pelo ecossistema Futebol Interativo."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {testimonials.map(({ quote, name, role, photo }) => (
              <div key={name} className="glass-panel flex flex-col rounded-2xl p-6">
                <div className="flex gap-0.5 text-cyan">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-cyan text-cyan" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-mist">
                  “{quote}”
                </p>
                <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-5">
                  <Image
                    src={photo}
                    alt={name}
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] shrink-0 rounded-full object-cover ring-2 ring-cyan/20"
                  />
                  <div>
                    <p className="text-sm font-bold text-ivory">{name}</p>
                    <p className="text-xs text-mist">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}