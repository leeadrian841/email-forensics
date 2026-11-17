import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site under /email-forensics/, and image paths in the
  // case data include it, so dev and preview use the same base as the build.
  // IMPORTANT: Change "email-forensics" if your repo name is different.
  base: '/email-forensics/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
}));
