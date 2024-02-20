/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: {
        text: "#111111",
        sky: "#ABBEC3",
        mint: "#BBD1C9",
      },
      backgroundImage: {
        banner: `url('/public/banner.webp')`,
      },
      height: {
        160: "40rem",
      },
    },
  },
  plugins: [],
};
