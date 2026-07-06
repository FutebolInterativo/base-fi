import Image from "next/image";
import { Check } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const bullets = [
  "Linguagem técnica do mercado do futebol",
  "Cases reais de clubes e empresas parceiras",
  "Networking com profissionais da indústria",
];

export function TransformationSection() {
  return (
    <section className="bg-ink py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-cyan/10 blur-[80px]" />
          <Image
            src="/images/instructor.png"
            alt="Instrutor apresentando em sala sobre o mercado do futebol"
            width={558}
            height={558}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex flex-col items-start gap-5">
          <Eyebrow>O que muda na sua carreira</Eyebrow>
          <h2 className="font-display text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-ivory sm:text-4xl">
            Do zero ao primeiro passo dentro do futebol
          </h2>
          <p className="text-base leading-relaxed text-mist">
            Em 4 semanas você sai do achismo e passa a entender como clubes, federações e
            empresas do setor realmente funcionam, com linguagem, ferramentas e contatos que
            abrem portas reais no mercado esportivo.
          </p>
          <ul className="flex flex-col gap-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ivory/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
