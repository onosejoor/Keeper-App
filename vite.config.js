import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/onosejoor/Keeper-App",
  plugins: [react()],
  server:{
    port: 3000,
  }  
})
