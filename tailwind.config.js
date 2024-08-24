/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({addComponents}) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '700',
        },
        '.btn-delete': {
          backgroundColor: '#e3342f',
          border: '2px solid #cc1f1a',
          color: '#ffffff',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#cc1f1a',
            color: '#ffffff',
          }
        },
        '.btn-add': {
          backgroundColor: '#38c172',
          border: '2px solid #2f855a',
          color: '#ffffff',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#2f855a',
            color: '#ffffff',
          }
        },
        '.btn-login': {
          backgroundColor: '#3490dc',
          border: '2px solid #2779bd',
          color: '#ffffff',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#2779bd',
          }
        },
        '.btn-checkout': {
          backgroundColor: '#ffed4a',
          border: '2px solid #f2d024',
          color: '#212529',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#f2d024',
          }
        },
        '.btn-next': {
          backgroundColor: '#6c757d',
          border: '2px solid #5a6268',
          color: '#ffffff',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#5a6268',
          }
        },
        '.btn-submit': {
          backgroundColor: '#007bff',
          border: '2px solid #0056b3',
          color: '#ffffff',
          width: 'max-content',
          '&:hover': {
            backgroundColor: '#0056b3',
          }
        },
      }
      addComponents(buttons);
    })
  ],
}