import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hku-idt-guide/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api/mtr': {
        target: 'https://rt.data.gov.hk',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mtr/, '/v1/transport/mtr'),
        secure: false
      }
    }
  }
});
