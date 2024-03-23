import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      watch: {
        usePolling: true
      }
    }
  }

  if (command !== 'serve') {
    config.base = 'state-machines'
  }

  return config;
})
