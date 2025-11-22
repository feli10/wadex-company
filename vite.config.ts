import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Use '.' instead of process.cwd() to avoid TS error where 'cwd' is missing from Process type
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    // Base "./" ensures assets are linked relatively, which is required for GitHub Pages
    // if not deploying to a custom domain at the root.
    base: './',
    define: {
      // Polyfill process.env.API_KEY so the existing code works without modification
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});