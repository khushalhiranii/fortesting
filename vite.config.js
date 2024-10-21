import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.jsx',   // Entry point for your widget
      name: 'LMSWidget',
      fileName: (format) => `lms-widget.${format}.js`,
      formats: ['umd'],         // Build in UMD format
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
