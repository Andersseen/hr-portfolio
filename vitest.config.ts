import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, // Optional: to make describe, it, etc. available globally
    setupFiles: ['./vitest.setup.ts'], // For @testing-library/jest-dom
    include: ['**/*.test.ts?(x)'], // Ensure it's set up to find test files
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage', // Optional: specify output directory
      // Optional: include/exclude patterns if needed
      // include: ['src/utils/**'],
      // exclude: ['src/**/*.test.ts'],
    }
  },
  vite: getViteConfig({}), // Use Astro's Vite config
});
