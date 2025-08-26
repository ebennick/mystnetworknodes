import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Use current directory as root
  publicDir: 'asset', // Serve assets from asset directory
  server: {
    proxy: {
      '/discovery-api': {
        target: 'https://discovery-ui.mysterium.network',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/discovery-api/, '')
      },
      '/discovery-ui-api': {
        target: 'https://discovery-ui.mysterium.network',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/discovery-ui-api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
});