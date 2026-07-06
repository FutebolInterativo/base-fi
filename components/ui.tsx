import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-balance text-3xl font-extrabold leading-[1.15] text-ivory sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed text-mist ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function CTAButton({
  children,
  href = "#oferta",
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";
  const solid =
    "bg-gradient-to-b from-blue to-blue-deep text-white shadow-md shadow-blue-deep/40 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-deep/50";
  const outline =
    "border border-white/15 text-white hover:border-cyan/50 hover:text-cyan";
  return (
    <a href={href} className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
      {children}
    </a>
  );
}
