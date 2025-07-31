/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          heading: ["'Press Start 2P'", "sans-serif"], // or another pixel font name
        },
        colors: {
          background: "#ffffff",
          foreground: "#171717",
        },
      },
    },
    darkMode: "class",
    plugins: [],
  };
  
  