// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import favicons from 'astro-favicons';

export default defineConfig({
  integrations: [tailwind(), favicons()],
  server: {
    host: true, // Allows access from external networks
    strictPort: false,
    allowedHosts: ['*.ngrok-free.app'] // Allow all hosts (for debugging purposes)
  },
  
});
