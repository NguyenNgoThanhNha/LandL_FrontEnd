import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: false
  }
})
