import Seo from "../components/Seo";
import MagneticButton from "../components/MagneticButton";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function NotFound() {
  const { interactive } = useMotionPrefs();

  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />

      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-cyan/40"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animation: `atom-pulse ${3 + (i % 5)}s ease-in-out infinite`,
                animationDelay: `${(i % 7) * 0.3}s`,
              }}
            />
          ))}
        </div>

        <p className="font-mono-label relative z-10 text-xs uppercase text-cyan">Error 404</p>
        <h1 className="font-display relative z-10 mt-4 text-5xl text-fog md:text-7xl">Signal lost.</h1>
        <p className="relative z-10 mt-5 max-w-md text-muted">
          This page drifted out of orbit. It may have moved, or never existed on this network.
        </p>
        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton to="/" enabled={interactive}>
            Back to Home
          </MagneticButton>
          <MagneticButton to="/services" enabled={interactive} variant="ghost">
            Explore Services
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
