import { Container } from "./ui";

const bonuses = [
  { label: "Bônus 1", title: "Materiais de Apoio", value: "Valor R$97" },
  { label: "Bônus 2", title: "Comunidade exclusiva no WhatsApp", value: "Valor R$97" },
  { label: "Bônus 3", title: "Aula extra: entendendo o mercado", value: "Valor R$147" },
];

export function BonusSection() {
  return (
    <section className="border-t border-white/5 bg-ink-soft py-20">
      <Container>
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-ivory sm:text-4xl">
          Bônus exclusivos para você aproveitar!
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {bonuses.map(({ label, title, value }) => (
            <div key={label} className="glass-panel rounded-xl p-6 transition duration-300 hover:-translate-y-1">
              <span className="inline-block rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan">
                {label}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ivory">{title}</h3>
              <p className="mt-1 text-sm text-mist">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
