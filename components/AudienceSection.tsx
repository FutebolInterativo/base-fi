import { CheckCircle2, XCircle, Check, X } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const fits = [
  "Quer entrar no mercado do futebol e não sabe por onde começar",
  "Já atua em outra área e quer migrar pro esporte",
  "É estudante e quer sair na frente antes de se formar",
  "Quer entender o mercado antes de investir em uma formação maior",
];

const notFits = [
  "Procura promessa de emprego garantido",
  "Quer virar jogador profissional",
  "Não pretende dedicar ao menos 30 minutos por dia",
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="pointer-events-none absolute left-[-6rem] top-10 -z-10 h-72 w-72 rounded-full bg-blue/15 blur-[120px]" />
      <Container>
        <Reveal>
          <SectionHeading
            title="Essa formação é pra você?"
            description="Transparência total — é assim que a gente trabalha."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-7">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ivory">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                É pra você que…
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {fits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ivory/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-xl p-7">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ivory">
                <XCircle className="h-5 w-5 shrink-0 text-red-400" />
                Não é pra você que…
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {notFits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ivory/90">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
