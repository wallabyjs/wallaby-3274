module.exports = wallaby => ({
  ...wallaby,
  autoDetect: true,
  files: [
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
    { pattern: 'src/**/*.test.ts', ignore: true },
    { pattern: 'src/**/*.test.tsx', ignore: true },
  ],
  tests: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
});