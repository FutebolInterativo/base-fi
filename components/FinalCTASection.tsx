import { Container } from "./ui";
import Image from "next/image";

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-deep via-blue to-cyan py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-display text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
          Daqui a 30 dias, você pode continuar de fora — ou estar dentro do mercado
        </h2>
        <p className="mt-3 max-w-xl text-base text-white/85">
          Milhares de pessoas amam futebol. Poucas se preparam pra trabalhar com ele. A
          diferença entre elas nunca foi contato: foi decisão.
        </p>
        <a
          href="#oferta"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-ink shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25"
        >
          Quero entrar no mercado do futebol
        </a>
        <p className="mt-3 text-xs text-white/80">
          R$297 ou 12x de R$24,75 · Garantia de 7 dias · Acesso imediato
        </p>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Image src="/images/logo.png" alt="Base FI" width={104} height={41} />
        <p className="text-xs text-mist">
          2026 Futebol Interativo. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
