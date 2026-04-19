import { defineConfig } from 'vite-plus'
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
  fmt: {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
  },
  staged: {
    '*': 'vp check --fix',
  },
  lint: {
    plugins: ['oxc', 'typescript', 'unicorn', 'react', 'import', 'jsx-a11y'],
    categories: {
      correctness: 'warn',
    },
    env: {
      builtin: true,
      commonjs: true,
    },
    ignorePatterns: ['node_modules', 'dist', 'src/routeTree.gen.ts'],
    rules: {
      'react/display-name': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-undef': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-render-return': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'import/no-anonymous-default-export': 'warn',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
    },
    options: {},
  },
})
