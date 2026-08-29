import { useId } from "react";
import { Plus } from "lucide-react";

export function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <div className="border-b border-clay/40">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span
            className={`font-display text-[1.15rem] leading-snug transition-colors duration-400 sm:text-[1.3rem] ${
              open ? "text-cocoa" : "text-ink"
            }`}
          >
            {question}
          </span>
          <Plus
            size={18}
            aria-hidden="true"
            className={`shrink-0 text-cocoa transition-transform duration-500 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        hidden={!open}
        className="grid"
      >
        <p className="max-w-2xl pb-7 pr-10 text-[0.94rem] leading-relaxed text-stone">{answer}</p>
      </div>
    </div>
  );
}
