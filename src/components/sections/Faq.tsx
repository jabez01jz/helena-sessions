import { useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { FAQItem } from "../FAQItem";
import { Reveal } from "../Reveal";

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "O primeiro encontro é uma conversa inicial. É o momento de falar sobre o que motivou a busca por acompanhamento e de esclarecer dúvidas sobre o processo. Não é necessário chegar com nada organizado ou explicado: a escuta começa justamente por aí.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "As sessões de psicoterapia costumam ter duração aproximada de 50 minutos. A duração e o formato do acompanhamento são combinados diretamente com Silvia no primeiro contato.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer:
      "O consultório fica em Maracanaú, no Ceará. Para confirmar a disponibilidade de atendimento presencial e online, o ideal é conversar pelo WhatsApp — as informações são passadas conforme a agenda vigente.",
  },
  {
    question: "Com que frequência acontecem as sessões?",
    answer:
      "Na clínica psicanalítica, a frequência é definida caso a caso, considerando a demanda e o momento de cada pessoa. Em geral, encontros semanais oferecem continuidade ao trabalho.",
  },
  {
    question: "Para quem a psicoterapia é indicada?",
    answer:
      "Não é preciso estar em crise para iniciar. A psicoterapia pode acompanhar quem enfrenta sofrimento psíquico, momentos de transição, perdas, questões relacionadas ao trabalho e às relações, ou simplesmente deseja se compreender melhor.",
  },
  {
    question: "A terapia é confidencial?",
    answer:
      "Sim. O sigilo é um princípio fundamental da profissão, previsto no Código de Ética Profissional do Psicólogo. O conteúdo das sessões permanece protegido.",
  },
  {
    question: "Como faço para agendar uma sessão?",
    answer:
      "O agendamento acontece pelo WhatsApp. Basta enviar uma mensagem para combinar horário, formato do atendimento e demais detalhes diretamente com Silvia.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="perguntas" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[80rem] gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-8">
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title={
            <>
              Antes de <span className="italic text-cocoa">começar</span>
            </>
          }
          intro="Dúvidas comuns de quem está considerando iniciar um acompanhamento."
        />
        <Reveal>
          <div className="border-t border-clay/40">
            {faqs.map((f, i) => (
              <FAQItem
                key={f.question}
                question={f.question}
                answer={f.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
