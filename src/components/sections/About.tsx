import { Reveal } from "../Reveal";
import silvia from "@/assets/silvia-1.png";

const formacao = [
  "Mestra em Psicologia — Universidade de Fortaleza (UNIFOR)",
  "Especialização em Saúde do Trabalhador — Universidade Estadual do Ceará (UECE)",
  "Especialização em Psicologia Hospitalar",
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[80rem] items-start gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-6 h-40 w-40 border border-clay/50"
          />
          <img
            src={silvia}
            alt="Silvia Helena, psicóloga clínica, em seu consultório"
            loading="lazy"
            className="relative w-full object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
            }}
          />
          <p className="relative mt-6 max-w-xs text-[0.78rem] leading-relaxed text-stone">
            Psicóloga clínica · atendimento em Maracanaú, Ceará.
          </p>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre Silvia Helena</span>
            <h2 className="mt-6 text-balance text-[2rem] leading-[1.15] text-ink sm:text-[2.6rem]">
              Uma clínica construída em <span className="italic text-cocoa">dez anos</span> de estudo
              e escuta.
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-stone">
            <p>
              A trajetória acadêmica de Silvia se fez com vida, coragem e espontaneidade: graduação,
              extensão, pesquisa e iniciação à docência na Universidade de Fortaleza, até a conclusão
              do Mestrado em Psicologia — ao todo, cerca de dez anos dedicados aos estudos e à
              construção de novas narrativas e travessias.
            </p>
            <p>
              Sua perspectiva clínica é fundamentada na psicanálise e entende cada cliente como
              sujeito e protagonista da própria história. A proposta não é oferecer respostas prontas
              nem ditar regras, mas sustentar um espaço neutro, seguro e acolhedor para que cada
              pessoa possa compreender a origem de suas dores psíquicas a partir das próprias
              experiências e vivências.
            </p>
            <blockquote className="border-l border-clay pl-6 font-display text-[1.35rem] italic leading-snug text-cocoa">
              “Cada sessão é um espaço de acolhimento, escuta e gentileza.”
            </blockquote>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_0.6fr]">
            <Reveal delay={200}>
              <h3 className="eyebrow">Formação</h3>
              <ul className="mt-5 space-y-4">
                {formacao.map((f) => (
                  <li
                    key={f}
                    className="flex gap-4 border-b border-clay/30 pb-4 text-[0.92rem] leading-relaxed text-ink"
                  >
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-cocoa" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <h3 className="eyebrow">Abordagem</h3>
              <p className="mt-5 font-display text-[1.6rem] leading-tight text-cocoa">Psicanálise</p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-stone">
                Escuta orientada pela singularidade de cada sujeito.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
