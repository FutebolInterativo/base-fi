import Image from "next/image";
import { Container, Eyebrow } from "./ui";

const stats = [
  { value: "+25 mil", label: "alunos formados" },
  { value: "+120", label: "clubes parceiros" },
  { value: "+8 anos", label: "de mercado" },
];

export function InstructorSection() {
  return (
    <section className="bg-ink py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5 lg:order-1">
          <Eyebrow>Quem vai te ensinar</Eyebrow>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl">
            George Klinger
          </h2>
          <p className="text-base leading-relaxed text-mist">
            CEO do Futebol Interativo e mestre em psicologia do esporte. Já impactou mais de
            4.500 alunos ao longo dos 8 anos de história do FI, aplicando uma metodologia
            única de ensino — Teoria, Prática e Networking.
          </p>
          <div className="mt-2 flex flex-wrap gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-extrabold text-cyan">{value}</p>
                <p className="text-xs uppercase tracking-wide text-mist">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:order-2">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
          <Image
            src="/images/instructor.png"
            alt="George Klinger apresentando sobre o mercado do futebol"
            width={558}
            height={558}
            className="w-full rounded-3xl"
          />
        </div>
      </Container>
    </section>
  );
}
