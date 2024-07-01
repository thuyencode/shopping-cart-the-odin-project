import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { PluginOption, defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shopping-cart-the-odin-project',
  plugins: [
    react(),
    simpleHtmlPlugin({ minify: true }),
    visualizer() as PluginOption
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
