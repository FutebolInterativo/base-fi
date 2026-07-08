import { CTAButton } from "./ui";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-5 py-3 backdrop-blur-md relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-5">
        <p className="hidden text-sm text-mist sm:block">
          <span className="text-mist">Turma de lançamento · </span>
          12x de <span className="font-bold text-cyan">R$24,75</span>
        </p>
        <p className="text-sm text-mist sm:hidden">
          12x de <span className="font-bold text-cyan">R$24,75</span>
        </p>
        <CTAButton className="!px-6 !py-2.5 !text-xs">Garantir vaga</CTAButton>
      </div>
    </div>
  );
}
