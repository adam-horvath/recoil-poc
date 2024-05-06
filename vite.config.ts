import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components/',
      config: '/src/config/',
      models: '/src/models/',
      recoilState: '/src/recoilState/',
      services: '/src/services/',
      utils: '/src/utils/',
    },
  },
});
