import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  envDir: "../",
  envPrefix: "PAYPAL",
  root: "src",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://10.1.0.140:8081",
        changeOrigin: true,
        secure: false,
      },
      "/renderFast": {
        target: "http://10.1.0.140:8081",
        changeOrigin: true,
        secure: false,
      },
      "/transaction": {
        target: "http://10.1.0.140:8081",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})