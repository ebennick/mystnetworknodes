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
  server: {
    port: 3000,
    open: true
  }
});