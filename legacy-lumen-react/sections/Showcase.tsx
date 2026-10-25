import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { scrollProgress } from "../lib/scrollProgress";

const FACETS = [
  {
    tag: "01 · Live capture",
    title: "Real exposures, streamed in near real time.",
    body: "Every frame you scroll through here was captured by an active telescope within the last few minutes — not a stock render.",
  },
  {
    tag: "02 · Global routing",
    title: "The network hands you whichever sky is dark.",
    body: "Lumen quietly routes your session to a telescope sitting in darkness right now, somewhere the sun hasn't reached yet.",
  },
  {
    tag: "03 · Open catalogue",
    title: "Every target is logged, searchable, and yours.",
    body: "Catalogue IDs, coordinates, and exposure data are kept open — so a session tonight can become a research thread tomorrow.",
  },
];

interface ShowcaseProps {
  reduced: boolean;
}

export default function Showcase({ reduced }: ShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (panels.length < 3) return;

    gsap.set(panels.slice(1), { autoAlpha: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          scrollProgress.showcase = self.progress;
        },
      },
    });

    tl.to({}, { duration: 0.6 })
      .to(panels[0], { autoAlpha: 0, y: -40, duration: 0.4 })
      .to(panels[1], { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
      .to({}, { duration: 0.6 })
      .to(panels[1], { autoAlpha: 0, y: -40, duration: 0.4 })
      .to(panels[2], { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
      .to({}, { duration: 0.6 });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.refresh();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section id="showcase" className="relative px-6 py-32 md:px-12">
        <div className="mx-auto max-w-3xl space-y-20">
          {FACETS.map((facet) => (
            <div key={facet.tag}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
                {facet.tag}
              </p>
              <h3 className="font-display text-3xl text-ivory md:text-4xl">{facet.title}</h3>
              <p className="mt-4 text-ivory/70">{facet.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="showcase" ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="relative mx-auto flex h-full max-w-3xl flex-col items-start justify-center px-6 md:px-12">
        {FACETS.map((facet, i) => (
          <div
            key={facet.tag}
            ref={(el) => (panelRefs.current[i] = el)}
            className="absolute left-6 right-6 md:left-12 md:right-auto md:max-w-xl"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
              {facet.tag}
            </p>
            <h3 className="font-display text-3xl text-ivory md:text-5xl">{facet.title}</h3>
            <p className="mt-5 max-w-md text-ivory/70">{facet.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
