import { defineConfig } from 'astro/config';
import { resolve } from 'path';


// Configuración para el alias
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
  },
});
