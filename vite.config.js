import { defineConfig } from 'vite';
import astro from '@astrojs/vite';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // Allows access from external networks
    strictPort: false,
    allowedHosts: "all", // Allow all hosts (for debugging purposes)
  }
});
