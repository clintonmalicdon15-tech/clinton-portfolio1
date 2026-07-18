import { defineConfig } from 'vite'
import react from '@vitejs/react-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/clinton-portfolio1/', // Add this exact line (use your repo name)
})