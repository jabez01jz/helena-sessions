import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/site";

type Variant = "solid" | "outline" | "light";

const base =
  "group inline-flex items-center gap-3 rounded-sm px-7 py-3.5 font-sans text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-500";

const variants: Record<Variant, string> = {
  solid: "bg-cocoa text-background hover:bg-ink",
  outline: "border border-clay text-cocoa hover:border-cocoa hover:bg-cream/60",
  light: "bg-sand text-ink hover:bg-cream",
};

export function CtaButton({
  children = "Agendar sessão",
  variant = "solid",
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block h-px w-6 bg-current transition-all duration-500 group-hover:w-9"
      />
    </a>
  );
}
