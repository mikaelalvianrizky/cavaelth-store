/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark-blue": "#2A2D40", // The darkest color for backgrounds
        "brand-slate": "#606A8C", // Mid-tone blue/gray
        "brand-silver": "#AAB3B5", // Lighter gray
        "brand-mint": "#D3E0DD", // Lightest green/mint
        "brand-off-white": "#F4F7F6", // For the product cards background
        "brand-red": "#D9534F", // Accent red for titles/borders
      },
    },
  },
  plugins: [],
};
