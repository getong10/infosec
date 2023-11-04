import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const path = require("path");

export default defineConfig({
    plugins: [vue(), svgLoader({
        defaultImport: 'url',
    }),],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue',],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
