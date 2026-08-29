export function SpecialtyCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group h-full bg-background px-7 py-10 transition-colors duration-500 hover:bg-cream/50 focus-within:bg-cream/50 md:px-10 md:py-14">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm text-clay transition-colors duration-500 group-hover:text-cocoa">
          {number}
        </span>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-clay/50 transition-all duration-700 group-hover:bg-cocoa/50"
        />
      </div>
      <h3 className="mt-7 text-[1.4rem] leading-snug text-ink transition-transform duration-500 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="mt-4 max-w-sm text-[0.93rem] leading-relaxed text-stone">{text}</p>
    </article>
  );
}
