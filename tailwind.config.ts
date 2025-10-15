import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
