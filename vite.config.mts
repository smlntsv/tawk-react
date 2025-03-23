import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import preserveDirectives from 'rollup-preserve-directives'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: ['src/main.ts'],
      formats: ['cjs', 'es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [dts({ rollupTypes: true }), preserveDirectives()],
})
