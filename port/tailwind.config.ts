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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-one":
          "linear-gradient(135deg, var(--primary) 0%, var(--primary-hueOne) 50%, #18298B 70%)",
      },
      // animationOne: {
      //   anim: "anim 30s infinite",
      // },
      // keyframesOne: {
      //   anim: {
      //     "0%, 100%": {
      //       "border-radius": "30% 70% 70% 30% / 30% 52% 48% 70%",
      //       "box-shadow":
      //         "0 -2vmin 4vmin var(--green) inset, 0 -4vmin 4vmin var(--green-accentOne) inset, 0 -2vmin 7vmin green inset",
      //     },
      //     "10%": {
      //       "border-radius": "50% 50% 20% 80% / 25% 80% 20% 75%",
      //     },
      //     "20%": {
      //       "border-radius": "67% 33% 47% 53% / 37% 20% 80% 63%",
      //     },
      //     "30%": {
      //       "border-radius": "39% 61% 47% 53% / 37% 40% 60% 63%",
      //       "box-shadow":
      //         "0 -4vmin 8vmin var-(--green) inset, -1vmin -2vmin 6vmin var-(--green-accentTwo) inset, -1vmin -2vmin 4vmin var-(--green-accentOne) inset, 1vmin 4vmin 8vmin var-(--green-acccentTwo) inset",
      //     },
      //     "40%": {
      //       "border-radius": "39% 61% 82% 18% / 74% 40% 60% 26%",
      //     },
      //     "50%": {
      //       "border-radius": "100%",
      //       "box-shadow":
      //         "0 4vmin 16vmin var-(--green-accentTwo) inset, 0 2vmin 5vmin var-(--green-accentOne) inset, 0 4vmin 4vmin var-(--green) inset, 0 6vmin 8vmin var-(--green) inset",
      //     },
      //     "60%": {
      //       "border-radius": "50% 50% 53% 47% / 72% 69% 31% 28%",
      //     },
      //     "70%": {
      //       "border-radius": "50% 50% 53% 47% / 26% 22% 78% 74%",
      //       "box-shadow":
      //         "1vmin 1vmin 8vmin var-(--green-accentTwo) inset, 2vmin -1vmin 4vmin var-(--green-accentTwo) inset, -1vmin -1vmin 16vmin var-(--green) inset",
      //     },
      //     "80%": {
      //       "border-radius": "50% 50% 53% 47% / 26% 69% 31% 74%",
      //     },
      //     "90%": {
      //       "border-radius": "20% 80% 20% 80% / 20% 80% 20% 80%",
      //     },
      //   },
      // },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        foreground: "hsl(var(--foreground))",
        ring: "hsl(var(--ring))",
        boxBackground: "#DDFFF7",
        boxAfter: "#93e1d8",
        boxBefore: "#AA4465",
        background: {
          DEFAULT: "#050B20",
          secondary: "#040717",
          tertiary: "#252C3B",
        },
        primary: {
          DEFAULT: "#3348BE",
          hueOne: "#21339C",
          hueTwo: "#18298B",
        },
        green: {
          DEFAULT: "#10E27D",
          accentOne: "#56F9AB",
          accentTwo: "#08884A",
        },
        muted: {
          DEFAULT: " #FFFFFF",
          foregroundOne: "#ECEDF3",
          foregroundTwo: "#A3B6D9",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        gradientStart: "rgba(0, 67, 255, 0.55)",
        gradientEnd: "rgba(0, 103, 255, 0.89)",
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
        morph: {
          "0%, 100%": {
            "border-radius": "42% 58% 70% 30% / 45% 45% 55% 55%",
            transform: "translate3d(0, 0, 0) rotateZ(0.01deg)",
          },
          "34%": {
            "border-radius": "70% 30% 46% 54% / 30% 29% 71% 70%",
            transform: "translate3d(0, 5px, 0) rotateZ(0.01deg)",
          },
          "50%": {
            opacity: "0.89",
            transform: "translate3d(0, 0, 0) rotateZ(0.01deg)",
          },
          "67%": {
            "border-radius": "100% 60% 60% 100% / 100% 100% 60% 60%",
            transform: "translate3d(0, -3px, 0) rotateZ(0.01deg)",
          },
        },
        anim: {
          "0%, 100%": {
            "border-radius": "30% 70% 70% 30% / 30% 52% 48% 70%",
            "box-shadow":
              "0 -2vmin 4vmin var(--green) inset, 0 -4vmin 4vmin var(--green-accentOne) inset, 0 -2vmin 7vmin green inset",
          },
          "10%": {
            "border-radius": "50% 50% 20% 80% / 25% 80% 20% 75%",
          },
          "20%": {
            "border-radius": "67% 33% 47% 53% / 37% 20% 80% 63%",
          },
          "30%": {
            "border-radius": "39% 61% 47% 53% / 37% 40% 60% 63%",
            "box-shadow":
              "0 -4vmin 8vmin var-(--green) inset, -1vmin -2vmin 6vmin var-(--green-accentTwo) inset, -1vmin -2vmin 4vmin var-(--green-accentOne) inset, 1vmin 4vmin 8vmin var-(--green-acccentTwo) inset",
          },
          "40%": {
            "border-radius": "39% 61% 82% 18% / 74% 40% 60% 26%",
          },
          "50%": {
            "border-radius": "100%",
            "box-shadow":
              "0 4vmin 16vmin var-(--green-accentTwo) inset, 0 2vmin 5vmin var-(--green-accentOne) inset, 0 4vmin 4vmin var-(--green) inset, 0 6vmin 8vmin var-(--green) inset",
          },
          "60%": {
            "border-radius": "50% 50% 53% 47% / 72% 69% 31% 28%",
          },
          "70%": {
            "border-radius": "50% 50% 53% 47% / 26% 22% 78% 74%",
            "box-shadow":
              "1vmin 1vmin 8vmin var-(--green-accentTwo) inset, 2vmin -1vmin 4vmin var-(--green-accentTwo) inset, -1vmin -1vmin 16vmin var-(--green) inset",
          },
          "80%": {
            "border-radius": "50% 50% 53% 47% / 26% 69% 31% 74%",
          },
          "90%": {
            "border-radius": "20% 80% 20% 80% / 20% 80% 20% 80%",
          },
        },
        border: {
          "0%, 100%": {
            "-webkit-clip-path":
              "polygon(0 0, calc(100% - 33.333px) calc(0% + 33.333px), 100% 100%, calc(0% + 33.333px) calc(100% - 33.333px))",
            "clip-path":
              "polygon(0 0, calc(100% - 33.333px) calc(0% + 33.333px), 100% 100%, calc(0% + 33.333px) calc(100% - 33.333px))",
          },
          "50%": {
            "-webkit-clip-path":
              "polygon(calc(0% + 33.333px) calc(0% + 33.333px), 100% 0, calc(100% - 33.333px) calc(100% - 33.333px), 0 100%)",
            "clip-path":
              "polygon(calc(0% + 33.333px) calc(0% + 33.333px), 100% 0, calc(100% - 33.333px) calc(100% - 33.333px), 0 100%)",
          },
        },

        animate: {
          "0%": {
            transform: "scale(0) translateY(0) rotate(70deg)",
          },
          "100%": {
            transform: "scale(1.3) translateY(-100px) rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        morph: "morph 3s linear infinite",
        morphBefore: "morph 1.5s linear infinite 200ms",
        morphAfter: "morph 3s linear infinite 400ms",
        border: "border 10s ease-in-out infinite",
        borderFast: "border 0.2s ease-in-out infinite",
        animate: "animate 4s linear infinite",
        // corner: "corner 3s linear infinite",
      },
      boxShadow: {
        custom: "5px 5px 89px rgba(0, 102, 255, 0.21)",
        customTwo: "10px 10px 42px 0 rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
