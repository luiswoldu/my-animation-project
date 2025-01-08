import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/my-animation-project/',
    // ... other config
  plugins: [react()],
  build: {
    outDir: 'dist'  // This is default, but let's be explicit
  }
})

