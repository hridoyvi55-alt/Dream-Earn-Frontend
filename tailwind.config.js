import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f2fe",
          100: "#bae6fd",
          200: "#7dd3fc",
          300: "#38bdf8",
          400: "#0ea5e9",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
          800: "#0c4a6e",
          900: "#082f49",
        },

        neon: {
          blue: "#00f3ff",
          pink: "#ff00ff",
          green: "#00ff88",
          yellow: "#ffff00",
          purple: "#bf00ff",
        },

        glass: {
          light: "rgba(255,255,255,0.08)",
          dark: "rgba(0,0,0,0.35)",
          border: "rgba(255,255,255,0.15)",
        },

        background: {
          dark: "#0a0a0f",
          darker: "#050508",
          card: "#12121a",
          hover: "#1a1a25",
        },

        text: {
          primary: "#ffffff",
          secondary: "#94a3b8",
          muted: "#64748b",
        },

        status: {
          success: "#00ff88",
          warning: "#ffff00",
          error: "#ff0055",
          info: "#00f3ff",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg,#0284c7,#0ea5e9)",
        "gradient-neon": "linear-gradient(135deg,#00f3ff,#ff00ff)",
        "gradient-dark": "linear-gradient(180deg,#0a0a0f,#12121a)",
        "glass-card":
          "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.4s ease-out",
        slideUp: "slideUp 0.4s ease-out",
        pulseGlow: "pulseGlow 2s infinite",
      },

      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        pulseGlow: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)",
        neon: "0 0 10px rgba(0,243,255,0.7)",
        card: "0 10px 30px rgba(0,0,0,0.3)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },

  plugins: [],
};

export default config;
