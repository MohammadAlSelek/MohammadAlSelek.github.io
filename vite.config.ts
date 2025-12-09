import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL: Makes paths relative for GitHub Pages
  build: {
    outDir: 'dist',
  },
});