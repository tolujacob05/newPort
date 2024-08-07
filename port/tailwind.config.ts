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
        "gradient-two":
          "linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1))",

        "background-img":
          "url('https://3.bp.blogspot.com/-piZWCW2uUbg/W2fPXxkWZgI/AAAAAAAAOu0/eydmMjTIqcwLMHEEr2H7imqoRTxMw4o9QCLcBGAs/s1600/among_trees_night_dribbble.png')",
      },

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
          DEFAULT: "#FFFFFF",
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

        one: {
          "0%": {
            transform: "scale(0) translateY(0) rotate(70deg)",
          },
          "100%": {
            transform: "scale(1.3) translateY(-100px) rotate(360deg)",
          },
        },

        two: {
          "0%": {
            transform: "scale(0) translateY(0) rotate(360deg)",
          },
          "100%": {
            transform: "scale(1) translateY(-50px) rotate(360deg)",
          },
        },

        rotateCW: {
          from: { transform: "translate3d(0px, -50%, 0px) rotate(0deg)" },
          to: { transform: "translate3d(0px, -50%, 0px) rotate(360deg)" },
        },

        rotateCCW: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },

        pulseGlow: {
          from: {
            backgroundSize: "60%",
          },
          to: {
            backgroundSize: "100%",
          },
        },

        animate: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translate(-10px)" },
        },

        "faulty-flicker": {
          "0%, 2%": { opacity: "0.1" },
          "4%, 19%": { opacity: "0.5" },
          "21%": { opacity: "0.1" },
          "23%": { opacity: "1" },
          "80%": { opacity: "0.5" },
          "83%": { opacity: "0.4" },
          "87%": { opacity: "1" },
        },

        "text-flicker": {
          "0%": { opacity: "0.1" },
          "2%": { opacity: "1" },
          "8%": { opacity: "0.1" },
          "9%": { opacity: "1" },
          "12%": { opacity: "0.1" },
          "20%": { opacity: "1" },
          "25%": { opacity: "0.3" },
          "30%": { opacity: "1" },
          "70%": { opacity: "0.7" },
          "72%": { opacity: "0.2" },
          "77%": { opacity: "0.9" },
          "100%": { opacity: "0.9" },
        },

        "border-flicker": {
          "0%, 4%": { opacity: "0.1" },
          "2%, 8%, 100%": { opacity: "1" },
          "70%": { opacity: "0.7" },
        },

        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },

        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },

        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },

        display: {
          "0%": {
            transform: "scaleX(0)",
            "transform-origin": "left",
          },
          "50%": {
            transform: "scaleX(1)",
            "transform-origin": "left",
          },
          "50.1%": {
            transform: "scaleX(1)",
            "transform-origin": "right",
          },
          "100%": {
            transform: "scaleX(0)",
            "transform-origin": "right",
          },
        },

        flash: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },

        gravity: {
          to: { transform: "rotate(360deg)" },
        },

        moveDot: {
          "0%, 100%": { top: "10%", right: "10%" },
          "25%": { top: "10%", right: "calc(100% - 35px)" },
          "50%": { top: "calc(100% - 30px)", right: "calc(100% - 35px)" },
          "75%": { top: "calc(100% - 30px)", right: "10%" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "faulty-flicker": "faulty-flicker 2s linear infinite",
        "text-flicker": "text-flicker 3s linear infinite",
        "border-flicker": "border-flicker 2s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "blink-caret": "blink-caret 0.5s step-end infinite",
        typing: "typing 3.5s steps(30, end) forwards",
        border: "border 10s ease-in-out infinite",
        borderFast: "border 0.2s ease-in-out infinite",
        one: "animate 4s linear infinite",
        two: "animate 4s linear infinite",
        rotateCW:
          "rotateCW calc(var(--rotate-speed) * 1s) var(--easing) infinite",
        rotateCCW:
          "rotateCCW calc(var(--rotate-speed) * 1s) var(--easing) infinite",
        pulseGlow: "pulseGlow 5s linear infinite alternate",
        animate: "animate 2s ease-in-out infinite",
        display: "display 4s linear infinite",
        flash: "flash 2s infinite",
        gravity: "gravity 2s infinite",
        moveDot: "moveDot 6s linear infinite",
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
