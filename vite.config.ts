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
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173,
    hmr: {
      clientPort: 443, // If you're using HTTPS (adjust this if needed)
      host: 'leopardlorry.com', // Your domain or IP
      protocol: 'wss', // 'wss' if using HTTPS
    }// you can replace this port with any port
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
