import { defineConfig } from 'vite'
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'), // set path to root index.ts
      name: 'react-design-kit',
      // formats: ['es', 'umd'],
      // fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // input: {
      //     main: resolve(__dirname, './app/index.html'),
      //     // multiminerales: resolve(__dirname, 'src/pages/some-page.html')
      // },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }
})

