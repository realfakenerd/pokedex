module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
