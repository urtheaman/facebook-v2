module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        50: "12.5rem",
        70: "17.5rem",
      },
      boxShadow: {
        mdb: "0 4px 12px 1px rgba(0, 0, 0, 0.05), 0 2px 12px 1px rgba(0, 0, 0, 0.05), 0 -4px 12px 1px rgba(0, 0, 0, 0.05), 0 -2px 12px 1px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        "fb-green": "#36A420",
        backdrop: "rgba(0, 0, 0, 0.733)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active"],
    },
  },
  plugins: [],
};
