import { Check } from "lucide-react";
import { Container, Eyebrow, CTAButton } from "./ui";
import { Reveal } from "./Reveal";

const features = [
  "Acesso vitalício à formação",
  "5 módulos + materiais de apoio",
  "3 bônus exclusivos inclusos",
  "Certificado de conclusão",
  "Comunidade de alunos",
];

export function PricingSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-[140px]" />
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>Oferta especial de lançamento</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-ivory sm:text-4xl">
            Garanta seu acesso por um investimento simbólico
          </h2>

          <div className="glass-panel glow-cyan mt-10 w-full max-w-md rounded-2xl p-8">
            <span className="inline-block rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan">
              Vagas limitadas
            </span>

            <p className="mt-5 text-sm text-mist">
              De <span className="line-through">R$997</span> por
            </p>
            <p className="font-display text-5xl font-extrabold text-ivory">
              R$<span className="text-cyan">297</span>
            </p>
            <p className="mt-2 text-xs text-mist">à vista, ou 12x de R$24,75 no cartão</p>

            <ul className="mt-6 flex flex-col gap-3 text-left">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ivory/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <CTAButton
              href="https://alunos.futebolinterativo.com/pay/base-fi-construindo-carreira-no-futebol"
              className="mt-7 w-full"
            >
              Quero garantir minha vaga
            </CTAButton>
            <p className="mt-3 text-xs text-mist">
              Pagamento 100% seguro · Acesso imediato após a confirmação
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
