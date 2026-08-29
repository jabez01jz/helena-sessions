import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PsiSymbol } from "./PsiSymbol";
import { CtaButton } from "./ui/CtaButton";
import { NAV_ITEMS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <p className="bg-ink px-4 py-2 text-center font-sans text-[0.62rem] uppercase tracking-[0.24em] text-clay">
        Escuta que respeita o tempo de cada história
      </p>

      <div
        className={`border-b border-clay/40 backdrop-blur-[6px] transition-colors duration-500 ${
          condensed ? "bg-background/92" : "bg-background/70"
        }`}
      >
        <div className="mx-auto grid max-w-[80rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8">
          <a
            href="#topo"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-3"
            aria-label="Silvia Helena — voltar ao topo"
          >
            <PsiSymbol className="h-7 w-7 shrink-0 text-cocoa" />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-none tracking-[0.06em] text-ink">
                Silvia Helena
              </span>
              <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.3em] text-stone">
                Psicóloga · Psicanálise
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden justify-center md:flex">
            <ul className="flex items-center gap-9">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative font-sans text-[0.72rem] uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-cocoa after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cocoa after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-end md:flex">
            <CtaButton variant="outline" className="px-5 py-3" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-clay/70 text-cocoa md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="menu-mobile"
          hidden={!open}
          className="border-t border-clay/40 bg-background/97 px-5 pb-7 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-clay/30">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-xl text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton className="mt-6 w-full justify-center" />
        </div>
      </div>
    </header>
  );
}
