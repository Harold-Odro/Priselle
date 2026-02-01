import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Pre-bundle lucide-react to improve dev server startup time
    // This caches the barrel imports and makes subsequent loads much faster
    include: ['lucide-react']
  }
})
