import {fileURLToPath, URL} from 'node:url'
import {resolve} from 'path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'cuv',
            fileName: 'cuv'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            },
        },
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
