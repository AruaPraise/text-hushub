module.exports = {
  content: [
    "./src/**/*.{html,js}", // Example: Adapt to your file structure
  ],
  // ... other Tailwind configurations
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/**/*.html',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Dressing': ['Caesar Dressing', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'], // 'serif' is a fallback
      },
      fontSize: {
        '52px': ['52px', { lineHeight: '80px' }],
      },
    },
  },
  plugins: [],
}