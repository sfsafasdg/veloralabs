/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070816",
        night: "#0B1024",
        violetGlow: "#8B5CF6",
        blueGlow: "#38BDF8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(99, 102, 241, 0.24)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.25), transparent 28rem), radial-gradient(circle at 80% 0%, rgba(56, 189, 248, 0.18), transparent 28rem)",
      },
    },
  },
  plugins: [],
};
