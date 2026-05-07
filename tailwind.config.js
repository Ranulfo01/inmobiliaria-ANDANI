/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8f5fz",     // fondo principal 
        textMain: "#ffffff",    // texto principal
        textSecondary: "#373553", // negro-gris claro
        accent: "#F2DB66",      // dorado opcional
        fondCard: "#3d3b3a", //gris medio 
        fondCard2: "#555555",   //gris bajito
        andaniorange: "#e98b55" //naranja
      },
    },
  },
  plugins: [],
}