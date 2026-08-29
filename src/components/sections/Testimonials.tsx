import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { TestimonialCard } from "../TestimonialCard";
import { Reveal } from "../Reveal";
import { testimonials } from "@/data/testimonials";
import { INSTAGRAM_URL } from "@/lib/site";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  const hasItems = testimonials.length > 0;

  return (
    <section id="depoimentos" className="border-y border-clay/30 bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Depoimentos"
            title={
              <>
                O que dizem sobre <span className="italic text-cocoa">o acompanhamento</span>
              </>
            }
          />
          {hasItems ? (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => embla?.scrollPrev()}
                aria-label="Depoimento anterior"
                className="grid h-11 w-11 place-items-center border border-clay/60 text-cocoa transition-colors hover:bg-background"
              >
                <ArrowLeft size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => embla?.scrollNext()}
                aria-label="Próximo depoimento"
                className="grid h-11 w-11 place-items-center border border-clay/60 text-cocoa transition-colors hover:bg-background"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>

        {hasItems ? (
          <>
            <div className="mt-14 overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((item) => (
                  <div
                    key={item.name + item.text.slice(0, 12)}
                    className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[70%] lg:basis-[46%]"
                  >
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={`dot-${item.name}-${i}`}
                  type="button"
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  aria-current={selected === i}
                  className={`h-px w-10 transition-colors duration-500 ${
                    selected === i ? "bg-cocoa" : "bg-clay/60"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <Reveal delay={100}>
            <div className="mt-14 max-w-2xl border border-clay/50 bg-background px-8 py-12 md:px-12">
              <p className="font-display text-[1.4rem] leading-snug text-ink">
                Esta seção é reservada a avaliações reais, publicadas por quem já foi atendido.
              </p>
              <p className="mt-5 text-[0.93rem] leading-relaxed text-stone">
                Por respeito ao sigilo e à ética profissional, nenhum depoimento é criado ou atribuído
                a pacientes. Assim que houver avaliações públicas verificáveis, elas serão exibidas
                aqui com a fonte indicada. Enquanto isso, é possível acompanhar o trabalho de Silvia
                no Instagram.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-cocoa underline-offset-8 hover:underline"
              >
                Acompanhar no Instagram
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
