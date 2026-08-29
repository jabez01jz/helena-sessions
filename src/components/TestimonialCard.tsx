import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between border border-clay/50 bg-background px-8 py-10 md:px-10 md:py-12">
      <blockquote className="font-display text-[1.25rem] leading-snug text-ink md:text-[1.4rem]">
        “{item.text}”
      </blockquote>
      <figcaption className="mt-8">
        {typeof item.rating === "number" ? (
          <div
            className="flex gap-1"
            aria-label={`Avaliação: ${item.rating} de 5`}
            role="img"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                aria-hidden="true"
                className={i < item.rating! ? "fill-clay text-clay" : "text-clay/40"}
              />
            ))}
          </div>
        ) : null}
        <p className="mt-3 text-[0.8rem] uppercase tracking-[0.18em] text-cocoa">{item.name}</p>
        {item.source ? (
          <p className="mt-1 text-[0.7rem] tracking-wide text-stone">Fonte: {item.source}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
