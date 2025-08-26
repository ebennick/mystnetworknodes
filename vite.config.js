import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Use current directory as root
  publicDir: 'asset', // Serve assets from asset directory
  server: {
    proxy: {
      '/api/mysterium': {
        target: 'https://discovery.mysterium.network',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mysterium/, '/api/v3/proposals'),
        secure: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
      '/api/countries-data': {
        target: 'https://public.opendatasoft.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/countries-data/, ''),
        secure: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('countries-data proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Sending Request to Countries API:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response from Countries API:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
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