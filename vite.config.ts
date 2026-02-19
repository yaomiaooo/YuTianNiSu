import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // 关键：设置为相对路径，确保本地打开资源路径正确
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 新增打包配置：明确输出规则，避免资源路径错误
  build: {
    outDir: 'dist', // 打包输出目录（默认就是dist，显式声明更清晰）
    assetsDir: 'assets', // 静态资源存放目录
    // 配置rollup打包规则，确保资源文件名和路径正确
    rollupOptions: {
      output: {
        // 统一静态资源命名规则，避免路径解析异常
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    // 可选：压缩优化，不影响核心功能
    minify: 'esbuild',
  },
});
