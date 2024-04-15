/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '0.875rem',   // Tamaño de fuente para pantallas pequeñas (14px)
      base: '1rem',     // Tamaño de fuente base (16px)
      lg: '1.25rem',    // Tamaño de fuente para pantallas grandes (20px)
      xl: '1.5rem',     // Tamaño de fuente extra grande (24px)
      '2xl': '1.875rem', // Tamaño de fuente 2xl (30px)
      '3xl': '2.25rem',  // Tamaño de fuente 3xl (36px)
      '4xl': '3rem',     // Tamaño de fuente 4xl (48px)
      '5xl': '3.75rem',  // Tamaño de fuente 5xl (60px)
      '6xl': '4.5rem',   // Tamaño de fuente 6xl (72px)
      '7xl': '5.625rem', // Tamaño de fuente 7xl (90px)
    },
    extend: {},
  },
  plugins: [],
};