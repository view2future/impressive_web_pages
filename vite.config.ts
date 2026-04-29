import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    react(),
    ...(command === 'build' ? [viteSingleFile()] : []),
  ],
  build: {
    assetsInlineLimit: 10000000,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
}))
