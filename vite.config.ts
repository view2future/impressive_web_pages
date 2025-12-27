import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 10000000, 
    cssCodeSplit: false,
  },
})
