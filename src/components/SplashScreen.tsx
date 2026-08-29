import { useEffect, useState } from "react";
import { PsiSymbol } from "./PsiSymbol";

export function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPhase("done");
      return;
    }

    const t1 = window.setTimeout(() => setPhase("out"), 900);
    const t2 = window.setTimeout(() => setPhase("done"), 1600);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  const symbolStyle =
    phase === "out"
      ? {
          animation: "splash-symbol-out 0.7s ease-in forwards",
        }
      : {
          animation: "splash-symbol-in 0.7s ease-out forwards",
        };

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-700 ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex h-40 w-40 items-center justify-center">
        <PsiSymbol
          className="h-24 w-24 text-cocoa"
          style={symbolStyle}
        />
      </div>
      <style>{`
        @keyframes splash-symbol-in {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes splash-symbol-out {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
        }
      `}</style>
    </div>
  );
}
