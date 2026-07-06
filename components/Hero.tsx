import Image from "next/image";
import { Container, Eyebrow, CTAButton } from "./ui";

export function Hero() {
  return (
    <section id="topo" className="grain relative overflow-hidden pb-20 pt-10 sm:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-[-14rem] -z-10 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-blue/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] top-[6rem] -z-10 h-72 w-72 rounded-full bg-cyan/15 blur-[110px]" />

      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Formação rápida · 100% online</Eyebrow>

        <h1 className="mt-6 max-w-3xl font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
          Aprenda a construir sua carreira no mercado do futebol em{" "}
          <span className="bg-gradient-to-r from-cyan to-cyan-soft bg-clip-text text-transparent">
            30 dias
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          Aprenda com quem vive esse mercado na prática: habilidades, funções, oportunidades
          e mercado explicados de forma prática para quem quer entrar ou crescer no setor.
        </p>

        <CTAButton className="mt-8">Garantir minha vaga agora</CTAButton>

        <div className="relative mt-12 w-full max-w-3xl">
          <div className="glass-panel glow-cyan relative flex aspect-[16/8] w-full flex-col items-center justify-center overflow-hidden rounded-2xl px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(59,111,242,0.18),transparent_70%)]" />
            <Image
              src="/images/logo.png"
              alt="Base FI"
              width={280}
              height={112}
              className="w-44 sm:w-56"
              priority
            />
            <span className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
              Construindo carreira no futebol
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
