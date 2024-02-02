/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '2xl': {'max': '1400px'},
      // => max-width: 1400px { ... }
      
      'xl': {'max': '1200px'},
      // => max-width: 1200px { ... }
      
      'lg': {'max': '1024px'},
      // => max-width: 1024px { ... }
      
      'md': {'max': '768px'},
      // => max-width: 768px { ... }
      
      'sm': {'max': '564px'},
      // => max-width: 54px { ... }
      },
  },
  plugins: [],
};
