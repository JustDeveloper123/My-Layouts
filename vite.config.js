import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  //# Плагіни
  plugins: [
    injectHTML({
      debug: {
        logPath: true, //% Debugging
      },
    }), // Опції по бажанню
  ],

  css: {
    postcss: {
      plugins: [autoprefixer()], // Опції по бажанню
    },
  },

  //# Production
  build: {
    rollupOptions: {
      input: {
        // Шляхи, які потрібно компілювати в Production
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404/index.html'),
      },
    },
  },

  //# Локальні порти
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
