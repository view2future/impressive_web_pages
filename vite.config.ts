<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"
import tailwindcss from '@tailwindcss/vite'
>>>>>>> b91310a8e4c32f9bac7cdb03a61469a4f9947eb1

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss(), viteSingleFile()],
});
=======
  plugins: [tailwindcss(), react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 10000000, 
    cssCodeSplit: false,
  },
})
>>>>>>> b91310a8e4c32f9bac7cdb03a61469a4f9947eb1
