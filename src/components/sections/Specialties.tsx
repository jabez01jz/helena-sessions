import { SectionTitle } from "../SectionTitle";
import { SpecialtyCard } from "../SpecialtyCard";
import { Reveal } from "../Reveal";

const items = [
  {
    number: "01",
    title: "Transtornos de Ansiedade",
    text: "Quando a antecipação e o excesso de alerta passam a ocupar o cotidiano, a escuta ajuda a dar contorno ao que aparece como urgência no corpo e no pensamento.",
  },
  {
    number: "02",
    title: "Processos de Luto e Perda",
    text: "Perdas não se resolvem em prazos. O trabalho clínico oferece um tempo protegido para que a dor possa ser dita, atravessada e recolocada na própria história.",
  },
  {
    number: "03",
    title: "Saúde Mental no Trabalho",
    text: "Sofrimento relacionado a excesso de demandas, conflitos e adoecimento laboral, com o olhar de quem se especializou em Saúde do Trabalhador.",
  },
  {
    number: "04",
    title: "Conflitos Interpessoais e Emocionais",
    text: "Relações familiares, afetivas e profissionais que se repetem em impasses. Um espaço para compreender o que se coloca em jogo em cada vínculo.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="border-y border-clay/30 bg-muted/60 py-24 md:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <SectionTitle
          eyebrow="Como posso te ajudar"
          title={
            <>
              Demandas que costumam <span className="italic text-cocoa">chegar ao consultório</span>
            </>
          }
          intro="Cada processo é singular. Estas são algumas das questões mais frequentes no acompanhamento clínico."
        />

        <div className="mt-16 grid gap-px bg-clay/40 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.number} delay={i * 90}>
              <SpecialtyCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
