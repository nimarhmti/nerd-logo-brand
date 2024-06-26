import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    fontSize: {
      labelText: ["14px", { fontWeight: "500", lineHeight: "20px" }],
      description: [
        "12px",
        { lineHeight: "16px", fontWeight: "400" },
      ],

      field: [
        "12px",
        {
          fontWeight: 400,
          lineHeight: "18px",
        },
      ],
      titleText: [
        "24px",
        {
          fontWeight: "500",
          lineHeight: "18px",
        },
      ],
      baseText: [
        "14px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      logText: [
        "24px",
        {
          lineHeight: "18px",
          fontWeight: "700",
        },
      ],
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        selectedItem: "#9373EE",
        mainBack: "#FCFCFD",
        baseColor: "#747474",
        borderColor: "#EFEFEF",
        fieldColor: "#F8F8F8",
        hoverHighLight: "#F2EEFD",
        brandColor:
          "linear-gradient(114.44deg, #4D84FF 0%, #DE8FFF 100%);",
        secondaryHighlight:
          "linear-gradient(90deg, #F2EEFD 6.16%, rgba(242, 238, 253, 0) 100%);",
        mainDark: "#181818",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
