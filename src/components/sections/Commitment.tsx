import { Reveal } from "../Reveal";
import { PsiSymbol } from "../PsiSymbol";

const pillars = [
  { title: "Escuta qualificada", text: "Atenção ao que se repete, ao que insiste e ao que ainda não encontrou palavras." },
  { title: "Espaço seguro", text: "Um ambiente neutro, sem julgamentos, onde é possível falar no próprio ritmo." },
  { title: "Ética profissional", text: "Sigilo e conduta orientados pelo Código de Ética Profissional do Psicólogo." },
  { title: "Respeito à individualidade", text: "Nenhum percurso é comparado a outro; cada história tem seu próprio tempo." },
  { title: "Protagonismo de quem fala", text: "As direções não são prescritas: elas emergem do próprio sujeito." },
  { title: "Construção conjunta", text: "O processo terapêutico se constrói a dois, sessão após sessão." },
];

export function Commitment() {
  return (
    <section className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal>
            <PsiSymbol className="h-8 w-8 text-sand" />
            <span className="eyebrow mt-8 block text-clay">Compromisso com quem chega</span>
            <p className="mt-6 text-balance font-display text-[2rem] leading-[1.2] text-cream sm:text-[2.5rem]">
              Não há fórmulas para o sofrimento. Há{" "}
              <span className="italic text-sand">presença, tempo e escuta.</span>
            </p>
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-clay">
              O trabalho clínico não promete resultados nem prazos. Ele oferece as condições para que
              algo possa ser dito — e, a partir disso, compreendido de outro modo.
            </p>
          </Reveal>

          <div className="grid gap-px bg-clay/25 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full bg-ink px-6 py-8 transition-colors duration-500 hover:bg-cocoa/25">
                  <h3 className="text-[1.05rem] leading-snug text-cream">{p.title}</h3>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-clay">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
