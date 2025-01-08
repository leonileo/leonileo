/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#18181A",
        "nav": "#545454",
        "nav-bg": "rgba(217, 217, 217, 0.10)",
        "primary": "#097DBB",
        "secondary": "#232323",
        "light": "rgba(255,255,255,0.8)",
        "about": "#212023",
        "tool-fill": "#212123",
        "tool-stroke": "#212123",
        "tag": "#323234"
      }
      ,fontFamily: {
        "Inter": ["Inter", "sans-serif"],
      },
      fontSize: {
        "nav": "13px",
        "title": "30px"
      }
    },
  },
  plugins: [],
}

