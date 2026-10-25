import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";

interface CTAProps {
  interactive: boolean;
  reduced: boolean;
}

export default function CTA({ interactive, reduced }: CTAProps) {
  return (
    <section
      id="cta"
      className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-brass">
        Node 7 is online
      </p>
      <RevealText
        text="Your sky is waiting."
        as="h2"
        reduced={reduced}
        className="font-display max-w-3xl text-5xl leading-tight text-ivory md:text-7xl"
      />
      <p className="mx-auto mt-8 max-w-md text-ivory/70 md:text-lg">
        Free to join. No equipment, no light pollution, no excuses.
      </p>
      <div className="mt-12">
        <MagneticButton href="#top" enabled={interactive}>
          Join the network
        </MagneticButton>
      </div>
    </section>
  );
}
