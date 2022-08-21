import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), linaria()]
})

