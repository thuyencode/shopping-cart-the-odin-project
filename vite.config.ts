import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import { webfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shopping-cart-the-odin-project/',
  plugins: [react(), simpleHtmlPlugin({ minify: true }), webfontDownload()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
