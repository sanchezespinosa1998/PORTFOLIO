import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://sanchezespinosa1998.github.io/PORTFOLIO',

  build: {
    rollupOptions: {
      external: ['three']
    }
  }
});