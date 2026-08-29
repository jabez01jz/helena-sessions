import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? (
        <span className={tone === "light" ? "eyebrow text-clay" : "eyebrow"}>{eyebrow}</span>
      ) : null}
      <h2
        className={`text-balance text-[2rem] leading-[1.15] sm:text-[2.6rem] ${
          tone === "light" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`max-w-xl text-[0.98rem] leading-relaxed ${
            tone === "light" ? "text-clay" : "text-stone"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
