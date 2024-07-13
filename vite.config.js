import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-furni/', // Ensure this matches your repository name
  build: {
    outDir: 'build' // Ensure this matches your deployment directory
  }
})
