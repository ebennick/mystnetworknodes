import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Use current directory as root
  publicDir: 'asset', // Serve assets from asset directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
});