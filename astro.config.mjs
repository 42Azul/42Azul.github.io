// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const SCRIPT = process.env.npm_lifecycle_script || "";

const LIVE_URL = "https://42Azul.github.io";

const isBuild = SCRIPT.includes("astro build");

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: isBuild ? LIVE_URL : LOCALHOST_URL,
  server: {
    port: SERVER_PORT,
  },
});
