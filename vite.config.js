import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        play: resolve(__dirname, 'play/index.html'),
        planit: resolve(__dirname, 'planit/index.html'),
        capitalOne: resolve(__dirname, 'capital-one/index.html'),
      },
    },
  },
})
