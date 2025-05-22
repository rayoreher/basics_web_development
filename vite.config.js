import { defineConfig } from 'vite'

export default defineConfig({
  base: '/basics_web_development/',
  build: {
    outDir: 'dist',
  },
  root: ".",
  server: {
    watch: {
      usePolling: true,
    }
  },
});