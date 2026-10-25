import { ReactNode } from "react";
import RevealText from "./RevealText";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  visual?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({ label, title, description, visual, children }: PageHeroProps) {
  const { reduced } = useMotionPrefs();

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono-label mb-5 text-xs uppercase text-cyan">{label}</p>
          <RevealText
            text={title}
            as="h1"
            reduced={reduced}
            className="font-display max-w-2xl text-4xl leading-tight text-fog md:text-6xl"
          />
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">{description}</p>
          {children && <div className="mt-10">{children}</div>}
        </div>
        {visual && (
          <div className="relative mx-auto h-[320px] w-full max-w-md lg:h-[420px]">{visual}</div>
        )}
      </div>
    </section>
  );
}
