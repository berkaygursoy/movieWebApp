// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#E50914',
          'secondary': '#B81D24',
          'dark': '#221F1F',
          'light-dark': '#3D3D3D',
        },
      },
    },
    plugins: [],
    future: {
      hoverOnlyWhenSupported: true,
    },
  }