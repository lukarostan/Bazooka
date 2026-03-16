import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        modules: true,
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  },
});
