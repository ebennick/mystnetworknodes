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
    open: true,
    proxy: {
      '/discovery-api': {
        target: 'https://discovery.mysterium.network',
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
  }
});