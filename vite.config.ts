/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import svgrPlugin from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
  },
  optimizeDeps: {
    include: ['@tailwindConfig'],
  },
  plugins: [
    react({
      babel: {
        presets: [
          [
            '@babel/preset-react',
            { runtime: 'automatic', importSource: '@emotion/react' },
          ],
        ],

        plugins: [
          '@emotion/babel-plugin',
          [
            'babel-plugin-twin',
            {
              // cf https://github.com/ben-rogerson/babel-plugin-twin/issues/9
              exclude: [
                '\x00commonjsHelpers.js', // Avoid build error
              ],
            },
          ],
          'babel-plugin-macros',
        ],
      },
    }),
    tsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 9003,
  },
  test: {
    globals: true,
    testTimeout: 120000,
    // maxThreads: 1,
    // minThreads: 1,
    environment: 'jsdom',
    setupFiles: ['./src/testing/setupTests.ts'],
    exclude: [
      './e2e',
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,tsup,build}.config.*',
    ],
  },
});