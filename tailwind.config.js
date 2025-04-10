/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        C1: "#1031E3",
        C2: "#725CE3",
        C3: "#BD10E3",
        C4: "#1073E3",
        C5: "#3310E3",
      },
    },
  },
  plugins: [daisyui],
};
