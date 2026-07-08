import { Check, Clock, Flame } from "lucide-react";
import { Container, Eyebrow, SectionHeading, CTAButton, CHECKOUT_URL } from "./ui";
import { Reveal } from "./Reveal";

const features = [
  { label: "Formação completa (5 módulos + aula bônus)", value: "R$997" },
  { label: "Certificado de conclusão", value: "incluso" },
  { label: "Materiais de apoio e templates de carreira", value: "R$97" },
  { label: "Comunidade exclusiva de alunos no WhatsApp", value: "R$97" },
  { label: "Bônus: guia “Onde estão as vagas” (canais mapeados)", value: "R$147" },
  { label: "Acesso vitalício + atualizações futuras", value: "incluso" },
];

export function PricingSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-[140px]" />
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex w-full flex-col items-center">
          <Eyebrow>Oferta especial de lançamento</Eyebrow>
          <SectionHeading
            title="Tudo que você recebe hoje"
            description="Um único pagamento. Acesso vitalício. Sem mensalidade."
          />

          <div className="glass-panel glow-cyan mt-10 w-full max-w-lg rounded-2xl p-8 sm:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan">
              <Flame className="h-3.5 w-3.5" />
              Condição de lançamento — 1ª turma
            </span>

            <ul className="mt-6 flex flex-col text-left">
              {features.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-start justify-between gap-3 border-b border-dashed border-white/10 py-3 text-sm text-ivory/90"
                >
                  <span className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    {label}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-mist">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-cyan/20 bg-cyan/[0.04] p-6">
              <p className="text-xs text-mist">
                Valor total: <span className="font-bold text-ivory">R$1.338</span> — hoje por:
              </p>
              <p className="mt-2 text-sm text-mist">
                De <span className="line-through">R$1.338</span> por apenas
              </p>
              <p className="font-display text-6xl font-extrabold text-cyan">R$297</p>
              <p className="mt-1 text-base text-ivory/90">
                ou <span className="font-bold text-cyan-soft">12x de R$24,75</span> sem juros
                no cartão
              </p>
              <p className="mt-1 text-xs text-mist">
                Menos de R$1 por dia pra entrar no mercado que você sempre quis.
              </p>
            </div>

            <CTAButton href={CHECKOUT_URL} className="mt-7 w-full">
              Quero garantir minha vaga
            </CTAButton>
            <p className="mt-3 text-xs text-mist">
              Pagamento 100% seguro · Acesso imediato após confirmação
            </p>

            <div className="mt-6 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left text-xs text-mist">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-soft" />
              <span>
                O valor de <span className="font-semibold text-cyan-soft">R$297</span> é
                exclusivo da turma de lançamento. Na próxima turma, a formação passa a custar{" "}
                <span className="font-semibold text-cyan-soft">R$397</span>.
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
