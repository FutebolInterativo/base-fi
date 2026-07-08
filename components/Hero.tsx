import { ShieldCheck } from "lucide-react";
import { Container, Eyebrow, CTAButton } from "./ui";

const proof = [
  { value: "+25 mil", label: "alunos formados" },
  { value: "+120", label: "clubes parceiros" },
  { value: "8 anos", label: "de mercado" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-20 pt-10 sm:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-[-14rem] -z-10 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-blue/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] top-[6rem] -z-10 h-72 w-72 rounded-full bg-cyan/15 blur-[110px]" />

      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Formação 100% online · Turma de lançamento</Eyebrow>

        <h1 className="mt-6 max-w-3xl font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
          Entre no mercado do futebol em{" "}
          <span className="bg-gradient-to-r from-cyan to-cyan-soft bg-clip-text text-transparent">
            30 dias
          </span>{" "}
          — mesmo sem contatos
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          A formação do Futebol Interativo que mostra como clubes e empresas do setor
          realmente contratam — e o caminho exato pra sua primeira oportunidade. Com
          certificado de conclusão.
        </p>

        <CTAButton className="mt-8">Quero começar agora</CTAButton>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-mist">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-cyan" />
            Pagamento seguro
          </span>
          <span>· Acesso imediato ·</span>
          <span className="font-semibold text-ivory">Garantia de 7 dias</span>
        </p>

        <p className="mt-3 text-sm text-ivory/90">
          12x de <span className="font-bold text-cyan-soft">R$24,75</span> sem juros — menos
          de R$1 por dia
        </p>

        <div className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {proof.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-extrabold text-cyan sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-mist">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
