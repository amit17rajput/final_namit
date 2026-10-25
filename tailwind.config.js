/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#070B14",
          deep: "#04060b",
        },
        navy: {
          DEFAULT: "#0D1525",
          light: "#162036",
        },
        fog: "#F4F7FF",
        muted: "#9AA8BF",
        cyan: {
          DEFAULT: "#55E6FF",
          soft: "#9FF0FF",
        },
        plasma: "#528BFF",
        violet: "#9A7BFF",
        edge: "#7DAEFF",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(85, 230, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
