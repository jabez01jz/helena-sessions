import type { CSSProperties } from "react";

type Props = { className?: string; title?: string; style?: CSSProperties };

/**
 * Símbolo da Psicologia (Psi) com as hastes em folha, desenhado em traço
 * editorial e sutil. Herda a cor do texto (currentColor).
 */
export function PsiSymbol({ className, title, style }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      {/* haste central */}
      <path d="M30.4 8h3.2v42.6h6.9v3.1H23.5v-3.1h6.9V8Z" />
      {/* asa esquerda em folha */}
      <path d="M19.6 12.4c1.1 0 1.9.9 1.7 2-1.6 8.6.6 14.9 5.7 18.3l-1.1 2.9C17.4 32 14 24 16.6 14.1c.3-1 1.1-1.7 2-1.7h1Z" />
      {/* asa direita em folha */}
      <path d="M44.4 12.4c.9 0 1.7.7 2 1.7C49 24 45.6 32 38.1 35.6L37 32.7c5.1-3.4 7.3-9.7 5.7-18.3-.2-1.1.6-2 1.7-2h1Z" />
      {/* folhas inferiores */}
      <path d="M26.6 38.9c.9 3.4.2 6.4-2.1 8.9-3-1.6-4.4-4.3-4.1-8 2.2-1 4.3-1.3 6.2-.9Z" />
      <path d="M37.4 38.9c1.9-.4 4 -.1 6.2.9.3 3.7-1.1 6.4-4.1 8-2.3-2.5-3-5.5-2.1-8.9Z" />
    </svg>
  );
}
