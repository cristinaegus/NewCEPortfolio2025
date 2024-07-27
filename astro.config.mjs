import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://elkamali.netlify.app'
} // your configuration options here...
// https://docs.astro.build/en/reference/configuration-reference/
);