import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
})
