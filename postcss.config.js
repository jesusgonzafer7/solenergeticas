/* Archivo renombrado de .ts a .js para compatibilidad nativa con Node.js */
module.exports = {
  plugins: {
    /* Se utiliza @tailwindcss/postcss en lugar de tailwindcss para la version 4 */
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
  },
};