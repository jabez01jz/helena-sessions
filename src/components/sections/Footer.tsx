import { PsiSymbol } from "../PsiSymbol";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-clay/40 bg-background py-16">
      <div className="mx-auto max-w-[80rem] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <PsiSymbol className="h-7 w-7 shrink-0 text-cocoa" />
              <span className="font-display text-xl tracking-[0.06em] text-ink">Silvia Helena</span>
            </div>
            <p className="mt-5 max-w-xs text-[0.85rem] leading-relaxed text-stone">
              Psicóloga clínica · Psicanálise. Atendimento em Maracanaú, Ceará.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9rem] text-stone underline-offset-4 transition-colors hover:text-cocoa hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Contato</h2>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone underline-offset-4 transition-colors hover:text-cocoa hover:underline"
                >
                  WhatsApp · {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone underline-offset-4 transition-colors hover:text-cocoa hover:underline"
                >
                  Instagram · {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-[16rem] text-stone underline-offset-4 transition-colors hover:text-cocoa hover:underline"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-clay/30 pt-7">
          <p className="text-[0.7rem] tracking-wide text-stone">
            © {new Date().getFullYear()} Silvia Helena · Todos os direitos reservados
          </p>
          <p className="text-[0.65rem] tracking-[0.18em] text-clay">
            Desenvolvido por <span className="text-stone">Visionary Sites</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
