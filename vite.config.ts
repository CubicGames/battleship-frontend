import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "docs",
    target: "es2020",
    rollupOptions: {
	    plugins: [inject({process: 'process', Buffer: ['Buffer', 'Buffer']})],
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
});
