import Image from "next/image";
import { Container } from "./ui";
import { Reveal } from "./Reveal";

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-r from-blue-deep to-ink-soft py-14">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Image
            src="/images/guarantee-badge.png"
            alt="Selo de garantia de 7 dias"
            width={112}
            height={112}
            className="shrink-0"
          />
          <div>
            <h2 className="font-display text-xl font-extrabold tracking-tight text-ivory sm:text-2xl">
              Risco zero por 7 dias
            </h2>
            <p className="mt-1 text-sm text-mist">
              Entre, assista às primeiras aulas e participe da comunidade. Se sentir que não é
              pra você, devolvemos 100% do valor — sem perguntas, sem burocracia. Basta um
              e-mail.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
