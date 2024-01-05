export const SITE_TITLE = "Chaos / Order";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about anything really.";
export const TWITTER_HANDLE = "@bmosigisi";
export const MY_NAME = "Brian Mosigisi";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
