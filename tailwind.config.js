module.exports = {
  mode: "jit",
  content: ["./src/**/*.svelte", "./src/**/*.css", "./src/**/*.html"],
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        "cus-light": {
          primary: "#ea3405",
          "primary-focus": "#B91C1C",
          "primary-content": "#fafafa",
          secondary: "#3c54b4",
          "secondary-focus": "#1D4ED8",
          "secondary-content": "#fafafa",
          accent: "#0c9bab",
          "accent-focus": "#fcd34d",
          "accent-content": "#fafafa",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#fff",
          "base-100": "#f6fdf9",
          "base-200": "#ccc9d6",
          "base-300": "#ccc9d6",
          "base-content": "#191723",
          info: "#818cf8",
          success: "#10b981",
          warning: "#d97706",
          error: "#dc2626",
        },
      },
      {
        "cus-dark": {
          primary: "#0274d4",
          "primary-focus": "#B91C1C",
          "primary-content": "#fafafa",
          secondary: "#e92f0c",
          "secondary-focus": "#1D4ED8",
          "secondary-content": "#fafafa",
          accent: "#fbbf24",
          "accent-focus": "#fcd34d",
          "accent-content": "#fafafa",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#fff",
          "base-100": "#191723",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#fcfcfc",
          info: "#818cf8",
          success: "#10b981",
          warning: "#d97706",
          error: "#dc2626",
        },
      },
    ],
  },
};
