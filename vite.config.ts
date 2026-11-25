import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'build' ? [viteSingleFile()] : []),
  ],
  build: {
    assetsInlineLimit: 200000,
    cssCodeSplit: false,
    target: 'es2020',
  },
}))
