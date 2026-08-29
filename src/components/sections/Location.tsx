import { MapPin } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { Reveal } from "../Reveal";
import { ADDRESS, MAPS_EMBED_URL, MAPS_URL } from "@/lib/site";

export function Location() {
  return (
    <section id="contatos" className="py-24 md:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <SectionTitle
          eyebrow="Localização"
          title={
            <>
              O espaço de <span className="italic text-cocoa">atendimento</span>
            </>
          }
          intro="O consultório fica em Maracanaú, na região metropolitana de Fortaleza."
        />

        <div className="mt-14 grid gap-px border border-clay/40 bg-clay/40 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-background px-8 py-10 md:px-10 md:py-12">
            <MapPin size={20} aria-hidden="true" className="text-cocoa" />
            <h3 className="mt-6 text-[1.3rem] leading-snug text-ink">Endereço</h3>
            <address className="mt-4 not-italic text-[0.95rem] leading-relaxed text-stone">
              {ADDRESS}
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-clay px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-cocoa transition-colors hover:border-cocoa hover:bg-cream/60"
            >
              Abrir no Google Maps
            </a>
            <p className="mt-8 text-[0.78rem] leading-relaxed text-stone">
              Horários de atendimento confirmados diretamente pelo WhatsApp.
            </p>
          </div>

          <Reveal className="bg-background">
            <div className="h-full min-h-[22rem] w-full overflow-hidden bg-muted">
              <iframe
                title={`Mapa da localização do consultório: ${ADDRESS}`}
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0 grayscale-[0.35] contrast-[0.95]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
