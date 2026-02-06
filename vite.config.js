import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so the built app works from any subfolder
  // (useful for GitHub Pages and many static hosts)
  base: './',
  server: {
    // Listen on all interfaces and allow ngrok (and other) tunnels in dev
    host: true,
    port: 5173,
    allowedHosts: true,
  },
})
