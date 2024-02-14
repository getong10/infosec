import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const path = require("path");

export default defineConfig({
    // Плагины, используемые в проекте (Vue и SVG loader)
    plugins: [vue(), svgLoader({
        defaultImport: 'url',
    }),],
    // Конфигурация разрешения модулей и псевдонимов
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue',],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // Конфигурация локального сервера
    server: {
        host: '0.0.0.0',
        port: 5173,
        watch: {
            usePolling: true
        }
    },
    // Оптимизация зависимостей проекта (включение только необходимых библиотек)
    optimizeDeps: {
        include: [
            'vue',
            'vue-router'
        ],
    }
})
