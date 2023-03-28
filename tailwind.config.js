/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#eda3a8",
        
"secondary": "#b84de2",
        
"accent": "#c0fca4",
        
"neutral": "#282532",
        
"base-100": "#F2F2F3",
        
"info": "#57A1EF",
        
"success": "#1CA091",
        
"warning": "#FAB20A",
        
"error": "#F31651",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

