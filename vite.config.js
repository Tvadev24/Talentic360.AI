import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cvApiPlugin } from './server/cvApiPlugin.js';

export default defineConfig({
  plugins: [react(), cvApiPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
});
