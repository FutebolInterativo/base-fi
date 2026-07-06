import Image from "next/image";
import { Container } from "./ui";

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-deep via-blue to-cyan py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-display text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
          Sua carreira no futebol começa com uma decisão
        </h2>
        <p className="mt-3 text-base text-white/85">Garanta seu acesso agora por R$297.</p>
        <a
          href="https://alunos.futebolinterativo.com/pay/base-fi-construindo-carreira-no-futebol"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25"
        >
          Quero garantir minha vaga
        </a>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Image src="/images/logo.png" alt="Base FI" width={104} height={41} />
        <p className="text-xs text-mist">
          © {new Date().getFullYear()} Futebol Interativo. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
