/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        bhcflcolor: "#D95829",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px", // Extra Small (xxs) for very small phones
      xxxs: "280px", // Extra Large (xl) for very large screens
      xs: "480px",  // Small (xs) for typical smartphones
      ss: "620px",  // Slightly larger screens
      sm: "700px",  // Medium (sm) for small tablets and larger phones
      md: "720px",  // Medium (md) for medium-sized screens
      lg: "1200px", // Large (lg) for larger laptops and desktops
      xl: "1600px", // Extra Large (xl) for very large screens
    },
    
    
  },
  plugins: [],
};