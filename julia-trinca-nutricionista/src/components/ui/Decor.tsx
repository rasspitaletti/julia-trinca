/**
 * Ilustrações decorativas de nutrição (traço fino, cores da marca).
 * Usadas com moderação: duas no hero e duas na seção de abordagem.
 */
type Kind = "tape" | "scale" | "apple" | "bottle";

const art: Record<Kind, React.ReactNode> = {
  // Fita métrica: estojo redondo com a fita saindo e marcações
  tape: (
    <>
      <circle cx="44" cy="52" r="30" fill="var(--decor-fill)" />
      <circle cx="44" cy="52" r="30" />
      <circle cx="44" cy="52" r="11" />
      <circle cx="44" cy="52" r="3" fill="currentColor" stroke="none" />
      <path d="M70 66h44a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H62" fill="var(--decor-fill)" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${74 + i * 5} 66v${i % 2 ? 5 : 9}`} strokeWidth="1.6" />
      ))}
      <path d="M118 72v10" strokeWidth="3" />
    </>
  ),
  // Balança: plataforma com visor e ponteiro
  scale: (
    <>
      <rect x="14" y="22" width="92" height="84" rx="20" fill="var(--decor-fill)" />
      <rect x="14" y="22" width="92" height="84" rx="20" />
      <path d="M38 52a22 22 0 0 1 44 0Z" fill="var(--white-ish)" />
      <path d="M38 52a22 22 0 0 1 44 0" />
      <path d="M60 52 70 37" strokeWidth="2.6" className="decor__needle" />
      {[-60, -30, 0, 30, 60].map((a) => (
        <path key={a} d="M60 34v4" transform={`rotate(${a} 60 52)`} strokeWidth="1.6" />
      ))}
      <path d="M32 92h56" strokeDasharray="2 7" />
    </>
  ),
  // Maçã com folha
  apple: (
    <>
      <path d="M60 38c-8-6-30-8-36 12s6 50 22 52c6 1 9-3 14-3s8 4 14 3c16-2 28-32 22-52s-28-18-36-12Z" fill="var(--decor-fill)" />
      <path d="M60 38c-8-6-30-8-36 12s6 50 22 52c6 1 9-3 14-3s8 4 14 3c16-2 28-32 22-52s-28-18-36-12Z" />
      <path d="M60 38c0-8 2-16 8-22" />
      <path d="M64 24c6-10 18-12 26-8-4 9-15 13-26 8Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M38 58c-2 6-1 14 3 20" strokeWidth="1.6" />
    </>
  ),
  // Garrafa de água com marcações de nível
  bottle: (
    <>
      <path d="M48 14h24v12l8 10v70a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V36l8-10Z" fill="var(--decor-fill)" />
      <path d="M48 14h24v12l8 10v70a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V36l8-10Z" />
      <path d="M44 8h32v6H44Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 62c7 4 13-4 20 0s13 4 20 0" strokeWidth="1.6" />
      <path d="M68 74h8M68 86h8M68 98h8" strokeWidth="1.6" />
    </>
  ),
};

export function Decor({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <svg
      className={`decor decor--${kind} ${className}`}
      viewBox="0 0 130 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {art[kind]}
    </svg>
  );
}
