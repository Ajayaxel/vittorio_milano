/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["'Reddit Sans'", "sans-serif"],
      },
      keyframes: {
        // Horizontal scrolling
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Vertical scroll down
        scrollDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },
        // Vertical scroll up
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        scrollDown: "scrollDown 20s linear infinite",
        scrollUp: "scrollUp 20s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // keep this for hiding scrollbars
  ],
};

