import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ include: /\.(ts|tsx)$/ })],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.stories.tsx'],
    },
  },
})
