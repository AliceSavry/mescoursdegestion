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
        // Palette macOS
        'macos-background': '#F5F5F5',       // Gris clair de fond
        'macos-sidebar': '#EAEAEA',          // Gris des barres latérales
        'macos-text': '#2C2C2C',             // Texte noir
        'macos-accent-blue': '#0A84FF',      // Bleu d'accentuation
        'macos-accent-gray': '#A2A2A7',      // Gris neutre
        'macos-window': 'rgba(255,255,255,0.85)', // Fond de fenêtre translucide
      },
      fontFamily: {
        'sans': ['San Francisco', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'macos-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'macos-heavy': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'macos': '12px',  // Coins arrondis typiques de macOS
      },
      backdropBlur: {
        'macos': '20px',  // Effet de flou pour la transparence
      },
      animation: {
        'macos-bounce': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        }
      }
    },
  },
  plugins: [],
}
