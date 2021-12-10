import {
    pageCache,
    imageCache,
    googleFontsCache,
    staticResourceCache,
  } from "workbox-recipes";
  import { clientsClaim } from "workbox-core";

  clientsClaim();

  pageCache();
  googleFontsCache();
  imageCache();
  staticResourceCache();