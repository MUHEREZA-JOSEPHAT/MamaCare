import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all interfaces and allow ngrok (and other) tunnels in dev
    host: true,
    port: 5173,
    allowedHosts: true,
  },
})
