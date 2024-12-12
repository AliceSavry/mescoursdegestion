/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './bts_gpme_gestion_financiere/templates/**/*.html',
    './gpme_ebp/templates/**/*.html',
    './gpme_gestion_risques/templates/**/*.html',
    './mco_gestion_operationnelle/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2C3E50',    // Un bleu professionnel
        'brand-secondary': '#34495E',  // Un bleu légèrement plus clair
        'accent': '#3498DB',           // Un bleu vif pour les éléments interactifs
        'background': '#F4F6F7',       // Un gris très clair pour le fond
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
