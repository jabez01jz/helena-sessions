import { CtaButton } from "../ui/CtaButton";
import { Reveal } from "../Reveal";
import { PsiSymbol } from "../PsiSymbol";

export function FinalCta() {
  return (
    <section className="bg-ink py-24 text-cream md:py-28">
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <Reveal>
          <PsiSymbol className="h-7 w-7 text-sand" />
          <p className="mt-7 text-balance font-display text-[2rem] leading-[1.2] text-cream sm:text-[2.5rem]">
            O primeiro passo é apenas <span className="italic text-sand">dizer a primeira frase.</span>
          </p>
          <p className="mt-5 max-w-md text-[0.93rem] leading-relaxed text-clay">
            Se você deseja conversar sobre o atendimento, o contato pode ser feito quando fizer
            sentido para você.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:justify-self-end">
          <CtaButton variant="light" />
        </Reveal>
      </div>
    </section>
  );
}
