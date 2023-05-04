import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nodePolyfills()],
    define: {
	        'process.env': {}
		  },
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
        plugins: [inject({process: 'process'})],
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
});
