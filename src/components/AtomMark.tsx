export default function AtomMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="3.4" fill="#55E6FF" />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="7"
        fill="none"
        stroke="#55E6FF"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="7"
        fill="none"
        stroke="#9A7BFF"
        strokeOpacity="0.5"
        strokeWidth="1"
        transform="rotate(60 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="7"
        fill="none"
        stroke="#528BFF"
        strokeOpacity="0.5"
        strokeWidth="1"
        transform="rotate(120 20 20)"
      />
    </svg>
  );
}
