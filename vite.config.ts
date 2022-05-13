/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), Icons({ compiler: 'jsx', jsx: 'react' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
});
