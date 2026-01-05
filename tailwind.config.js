/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#e6fbff",
          200: "#9ee7f7",
          400: "#35bfd8",
          600: "#0a7ba5",
          800: "#05506f",
          900: "#033a52"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(56, 189, 248, 0.45)"
      },
      backgroundImage: {
        "ocean-sheen":
          "radial-gradient(900px 500px at 10% 10%, rgba(56, 189, 248, 0.25), transparent 70%), radial-gradient(700px 400px at 90% 15%, rgba(16, 185, 129, 0.18), transparent 65%), radial-gradient(600px 600px at 50% 85%, rgba(14, 116, 144, 0.25), transparent 65%)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(56, 189, 248, 0.35)" },
          "50%": { boxShadow: "0 0 45px rgba(16, 185, 129, 0.55)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
