import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Production build uses /email-forensics/ for GitHub Pages.
  // Dev server uses / so the preview environment works normally.
  // IMPORTANT: Change "email-forensics" if your repo name is different.
  base: command === 'build' ? '/email-forensics/' : '/',
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
