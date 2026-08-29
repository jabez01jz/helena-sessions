type Props = { className?: string };

/** Borboleta ilustrativa minimalista — traço único, não realista. */
export function Butterfly({ className }: Props) {
  return (
    <svg viewBox="0 0 48 40" className={className} aria-hidden="true" fill="none">
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M24 12v16" />
        <path d="M24 12c-3.6-7.4-9.2-10.4-14.4-8.2C4.7 5.9 4.2 12.4 8 17.6c3.1 4.2 8.6 6.2 16 4.4" />
        <path d="M24 12c3.6-7.4 9.2-10.4 14.4-8.2C43.3 5.9 43.8 12.4 40 17.6c-3.1 4.2-8.6 6.2-16 4.4" />
        <path d="M24 22c-4.6 3-6.4 7.6-4.6 11.4 1.4 2.9 4.4 2.4 6.4-.6 1.4-2.1 1.9-5.5-1.8-10.8" />
        <path d="M24 22c4.6 3 6.4 7.6 4.6 11.4-1.4 2.9-4.4 2.4-6.4-.6" />
        <path d="M24 11.5c-1.4-2.2-2.6-3.6-4-4.6M24 11.5c1.4-2.2 2.6-3.6 4-4.6" />
      </g>
    </svg>
  );
}
