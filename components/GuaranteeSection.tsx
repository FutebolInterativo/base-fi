import Image from "next/image";
import { Container } from "./ui";

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-r from-blue-deep to-ink-soft py-14">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <Image
          src="/images/guarantee-badge.png"
          alt="Selo de garantia incondicional de 7 dias"
          width={112}
          height={112}
          className="shrink-0"
        />
        <div>
          <h2 className="font-display text-xl font-extrabold tracking-tight text-ivory sm:text-2xl">
            Garantia incondicional de 7 dias
          </h2>
          <p className="mt-1 text-sm text-mist">
            Se em até 7 dias você sentir que o curso não é para você, devolvemos 100% do seu
            investimento.
          </p>
        </div>
      </Container>
    </section>
  );
}
