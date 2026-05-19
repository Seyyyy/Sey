import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { readdirSync } from 'fs'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const postPaths = readdirSync(path.resolve(__dirname, 'posts'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ path: `/blog/${f.replace(/\.md$/, '')}` }))

export default defineConfig({
  base: '/',
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          output: {
            entryFileNames: '[name].js',
          },
        },
      },
    },
  },
  plugins: [
    ...tanstackStart({
      pages: postPaths,
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      spa: { enabled: false },
    }),
    react(),
  ],
  define: {
    global: 'globalThis',
    SharedArrayBuffer: "typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : ArrayBuffer",
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
})
