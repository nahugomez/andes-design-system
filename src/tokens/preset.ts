import type { Config } from "tailwindcss";

/**
 * Cumbre Tailwind Preset
 * Consumible por cualquier proyecto AndesIA: `presets: [cumbrePreset]` en su tailwind.config.
 * Todas las escalas mapean a CSS variables definidas en styles.css — así el theming es libre.
 */
export const cumbrePreset: Partial<Config> = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "hsl(var(--cumbre-primary-50) / <alpha-value>)",
          100: "hsl(var(--cumbre-primary-100) / <alpha-value>)",
          200: "hsl(var(--cumbre-primary-200) / <alpha-value>)",
          300: "hsl(var(--cumbre-primary-300) / <alpha-value>)",
          400: "hsl(var(--cumbre-primary-400) / <alpha-value>)",
          500: "hsl(var(--cumbre-primary-500) / <alpha-value>)",
          600: "hsl(var(--cumbre-primary-600) / <alpha-value>)",
          700: "hsl(var(--cumbre-primary-700) / <alpha-value>)",
          800: "hsl(var(--cumbre-primary-800) / <alpha-value>)",
          900: "hsl(var(--cumbre-primary-900) / <alpha-value>)",
          950: "hsl(var(--cumbre-primary-950) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-primary-800) / <alpha-value>)",
        },
        neutral: {
          0: "hsl(var(--cumbre-neutral-0) / <alpha-value>)",
          50: "hsl(var(--cumbre-neutral-50) / <alpha-value>)",
          100: "hsl(var(--cumbre-neutral-100) / <alpha-value>)",
          200: "hsl(var(--cumbre-neutral-200) / <alpha-value>)",
          300: "hsl(var(--cumbre-neutral-300) / <alpha-value>)",
          400: "hsl(var(--cumbre-neutral-400) / <alpha-value>)",
          500: "hsl(var(--cumbre-neutral-500) / <alpha-value>)",
          600: "hsl(var(--cumbre-neutral-600) / <alpha-value>)",
          700: "hsl(var(--cumbre-neutral-700) / <alpha-value>)",
          800: "hsl(var(--cumbre-neutral-800) / <alpha-value>)",
          900: "hsl(var(--cumbre-neutral-900) / <alpha-value>)",
          950: "hsl(var(--cumbre-neutral-950) / <alpha-value>)",
        },
        accent: {
          50: "hsl(var(--cumbre-accent-50) / <alpha-value>)",
          100: "hsl(var(--cumbre-accent-100) / <alpha-value>)",
          200: "hsl(var(--cumbre-accent-200) / <alpha-value>)",
          300: "hsl(var(--cumbre-accent-300) / <alpha-value>)",
          400: "hsl(var(--cumbre-accent-400) / <alpha-value>)",
          500: "hsl(var(--cumbre-accent-500) / <alpha-value>)",
          600: "hsl(var(--cumbre-accent-600) / <alpha-value>)",
          700: "hsl(var(--cumbre-accent-700) / <alpha-value>)",
          800: "hsl(var(--cumbre-accent-800) / <alpha-value>)",
          900: "hsl(var(--cumbre-accent-900) / <alpha-value>)",
          950: "hsl(var(--cumbre-accent-950) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-accent-500) / <alpha-value>)",
        },
        success: {
          100: "hsl(var(--cumbre-success-100) / <alpha-value>)",
          500: "hsl(var(--cumbre-success-500) / <alpha-value>)",
          700: "hsl(var(--cumbre-success-700) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-success-500) / <alpha-value>)",
        },
        warning: {
          100: "hsl(var(--cumbre-warning-100) / <alpha-value>)",
          500: "hsl(var(--cumbre-warning-500) / <alpha-value>)",
          700: "hsl(var(--cumbre-warning-700) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-warning-500) / <alpha-value>)",
        },
        danger: {
          100: "hsl(var(--cumbre-danger-100) / <alpha-value>)",
          500: "hsl(var(--cumbre-danger-500) / <alpha-value>)",
          700: "hsl(var(--cumbre-danger-700) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-danger-500) / <alpha-value>)",
        },
        info: {
          100: "hsl(var(--cumbre-info-100) / <alpha-value>)",
          500: "hsl(var(--cumbre-info-500) / <alpha-value>)",
          700: "hsl(var(--cumbre-info-700) / <alpha-value>)",
          DEFAULT: "hsl(var(--cumbre-info-500) / <alpha-value>)",
        },

        // Semantic role tokens — uso preferente en componentes
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          subtle: "hsl(var(--surface-subtle) / <alpha-value>)",
          muted: "hsl(var(--surface-muted) / <alpha-value>)",
          elevated: "hsl(var(--surface-elevated) / <alpha-value>)",
        },
        border: {
          DEFAULT: "hsl(var(--border) / <alpha-value>)",
          strong: "hsl(var(--border-strong) / <alpha-value>)",
          subtle: "hsl(var(--border-subtle) / <alpha-value>)",
        },
        text: {
          DEFAULT: "hsl(var(--text-primary) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--text-tertiary) / <alpha-value>)",
          "on-primary": "hsl(var(--text-on-primary) / <alpha-value>)",
          "on-accent": "hsl(var(--text-on-accent) / <alpha-value>)",
        },
        action: {
          primary: "hsl(var(--action-primary) / <alpha-value>)",
          "primary-hover": "hsl(var(--action-primary-hover) / <alpha-value>)",
          "primary-active": "hsl(var(--action-primary-active) / <alpha-value>)",
          accent: "hsl(var(--action-accent) / <alpha-value>)",
          "accent-hover": "hsl(var(--action-accent-hover) / <alpha-value>)",
          "accent-active": "hsl(var(--action-accent-active) / <alpha-value>)",
        },
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.02em" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.015em" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        focus: "var(--shadow-focus)",
      },

      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        reveal: "var(--duration-reveal)",
      },

      transitionTimingFunction: {
        precise: "var(--ease-precise)",
        expressive: "var(--ease-expressive)",
        entrance: "var(--ease-entrance)",
        exit: "var(--ease-exit)",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { boxShadow: "var(--shadow-focus)" },
          "50%": { boxShadow: "0 0 0 6px hsl(var(--focus-ring) / 0.15)" },
        },
      },

      animation: {
        "fade-in": "fade-in var(--duration-base) var(--ease-entrance) both",
        "fade-in-up": "fade-in-up var(--duration-reveal) var(--ease-expressive) both",
        "slide-in-right": "slide-in-right var(--duration-slow) var(--ease-expressive) both",
      },
    },
  },
};

export default cumbrePreset;
