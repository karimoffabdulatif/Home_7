import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@pages", replacement: "/src/pages/index.jsx" },
      { find: "@service", replacement: "/src/service/index.js" },
      { find: "@modal", replacement: "/src/components/modal" },
    ],
  },
})
