import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-warm": "var(--bg-warm)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        maroon: "var(--maroon)",
        "maroon-deep": "var(--maroon-deep)",
        rule: "var(--rule)",
        "rule-soft": "var(--rule-soft)",
        paper: "var(--paper)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;
