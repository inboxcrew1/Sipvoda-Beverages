import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Generate .gz files for all JS/CSS assets (Gzip pre-compression)
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files > 10KB
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    // Terser for better minification
    minify: 'esbuild',
    target: 'es2018', // Broad browser compatibility
    // Raise chunk size warning limit to reduce noise
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunking: stable vendor chunks for long-term caching
        manualChunks: {
          // React core — never changes, cache forever
          'vendor-react': ['react', 'react-dom'],
          // Router — separate cacheable chunk
          'vendor-router': ['react-router-dom'],
          // Icon library — large, static
          'vendor-icons': ['lucide-react'],
          // Toast notifications
          'vendor-misc': ['sonner', 'clsx', 'tailwind-merge'],
        },
        // Consistent file naming for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (['woff', 'woff2', 'ttf', 'eot'].includes(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (ext === 'css') {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Source maps off in production for smaller bundles
    sourcemap: false,
    // CSS code splitting for better caching
    cssCodeSplit: true,
    // Inline tiny assets < 4KB as base64 to save requests
    assetsInlineLimit: 4096,
  },
});
