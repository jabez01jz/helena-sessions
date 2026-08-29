import { CtaButton } from "../ui/CtaButton";
import { Reveal } from "../Reveal";
import { PsiSymbol } from "../PsiSymbol";
import silvia from "@/assets/silvia-2.png";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-[8.5rem] md:pt-[9.5rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-[34rem] w-[34rem] rounded-full bg-cream/60 blur-[90px]"
      />
      <div className="relative mx-auto grid max-w-[80rem] items-center gap-12 px-5 pb-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-28">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Psicóloga clínica · Maracanaú, Ceará</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 text-balance font-display text-[2.7rem] leading-[1.08] text-ink sm:text-[3.6rem]">
              Há um tempo próprio
              <span className="block italic text-cocoa">para se escutar.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-stone">
              Atendimento em psicanálise para adultos, em um espaço neutro e acolhedor, onde cada
              pessoa é compreendida como protagonista da própria história — sem respostas prontas.
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-6">
            <CtaButton />
            <a
              href="#sobre"
              className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-stone underline-offset-8 transition-colors hover:text-cocoa hover:underline"
            >
              Conhecer o trabalho
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="pointer-events-none absolute inset-x-8 bottom-10 top-2 -z-10 rounded-[16rem_16rem_3rem_3rem] bg-[radial-gradient(circle_at_50%_18%,rgba(241,226,194,0.72),rgba(239,220,190,0.18)_35%,rgba(239,220,190,0.02)_66%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-x-10 bottom-4 top-10 -z-10 rounded-[12rem_12rem_2.5rem_2.5rem] border border-clay/25 bg-gradient-to-b from-cream/20 via-cream/10 to-transparent" />
          <img
            src={silvia}
            alt="Retrato da psicóloga Silvia Helena"
            className="relative z-10 mx-auto w-full max-w-[26rem]"
          />
          <div className="relative mx-auto mt-[-3.5rem] flex max-w-[24rem] flex-col gap-3">
            <div className="flex items-center gap-3 border border-clay/50 bg-background/85 px-5 py-3.5 backdrop-blur-sm">
              <PsiSymbol className="h-5 w-5 shrink-0 text-cocoa" />
              <p className="min-w-0 text-[0.8rem] leading-snug text-stone">
                Abordagem psicanalítica
                <span className="block text-ink">escuta sem julgamentos</span>
              </p>
            </div>
            <div className="ml-auto flex w-[88%] items-center gap-3 border border-clay/50 bg-background/85 px-5 py-3.5 backdrop-blur-sm">
              <span aria-hidden="true" className="h-8 w-px shrink-0 bg-clay" />
              <p className="min-w-0 text-[0.8rem] leading-snug text-stone">
                Mestra em Psicologia
                <span className="block text-ink">UNIFOR</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
