import { useState } from "react";

interface ImageFallbackProps {
  src?: string;
  alt: string;
  label: string;
  accent?: "cyan" | "plasma" | "violet";
  className?: string;
  decorative?: boolean;
}

const ACCENTS = {
  cyan: "from-cyan/25 via-navy to-space",
  plasma: "from-plasma/25 via-navy to-space",
  violet: "from-violet/25 via-navy to-space",
};

export default function ImageFallback({
  src,
  alt,
  label,
  accent = "cyan",
  className = "",
  decorative = false,
}: ImageFallbackProps) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    const initials = label
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <div
        role="img"
        aria-label={decorative ? undefined : alt}
        aria-hidden={decorative || undefined}
        className={`flex items-center justify-center bg-gradient-to-br ${ACCENTS[accent]} ${className}`}
      >
        <span className="font-display text-2xl text-fog/70">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
