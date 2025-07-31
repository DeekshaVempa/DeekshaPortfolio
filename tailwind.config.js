/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#ffffff",
          foreground: "#171717",
        },
      },
    },
    darkMode: "class", 
    plugins: [],
  };
  