// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vladas9.github.io',
  base: '/web_labs',
  vite: {
    plugins: [tailwindcss()]
  }
});