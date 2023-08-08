import { withMaterialColors } from "tailwind-material-colors";
import type { Config } from "tailwindcss";

export default withMaterialColors(
  {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {
        fontFamily: {
          sans: "Roboto",
        },
      },
      fontSize: {
        "display-large": ["3.5rem", { lineHeight: "4rem" }],
        "display-medium": ["2.8rem", { lineHeight: "3.25rem" }],
        "display-small": ["2.25rem", { lineHeight: "2.75rem" }],

        "headline-large": ["2rem", { lineHeight: "2.5rem" }],
        "headline-medium": ["1.75rem", { lineHeight: "2.25rem" }],
        "headline-small": ["1.5rem", { lineHeight: "2rem" }],

        "title-large": [
          "1.375rem",
          { lineHeight: "1.75rem", fontWeight: "500" },
        ],
        "title-medium": [
          "1rem",
          { lineHeight: "1.5rem", fontWeight: "500", letterSpacing: "0.15px" },
        ],
        "title-small": [
          "0.875rem",
          { lineHeight: "1.25rem", fontWeight: "500", letterSpacing: "0.1px" },
        ],

        "body-large": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0.15px" },
        ],
        "body-medium": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.25px" },
        ],
        "body-small": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.4px" },
        ],

        "label-large": [
          "0.875rem",
          { lineHeight: "1.25rem", fontWeight: "500", letterSpacing: "0.1px" },
        ],
        "label-medium": [
          "0.65rem",
          { lineHeight: "1rem", fontWeight: "500", letterSpacing: "0.5px" },
        ],
        "label-small": [
          "0.75rem",
          { lineHeight: "1rem", fontWeight: "500", letterSpacing: "0.5px" },
        ],
      },
    },
  } satisfies Config,
  {
    primary: `#173EA5`,
    all: "#333333",
    water: "#5090D6",
    dragon: "#0B6DC3",
    electric: "#F4D23C",
    fairy: "#EC8FE6",
    ghost: "#5269AD",
    fire: "#FF9D55",
    ice: "#73CEC0",
    grass: "#63BC5A",
    bug: "#91C12F",
    fighting: "#CE416B",
    normal: "#919AA2",
    dark: "#5A5465",
    steel: "#5A8EA2",
    rock: "#C5B78C",
    psychic: "#FA7179",
    ground: "#D97845",
    poison: "#B567CE",
    flying: "#89AAE3",
  }
);
