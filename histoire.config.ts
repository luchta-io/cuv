import {defineConfig} from 'histoire'
import {HstVue} from '@histoire/plugin-vue'

export default defineConfig({
    plugins: [
        HstVue(),
    ],
    setupFile: '/src/histoire.setup.ts',
    tree: {
        groups: [
            {
                title: 'Components',
                include: file => file.path.includes('components'),
            },
            {
                title: 'Examples',
                include: file => file.path.includes('examples'),
            },
        ],
    },
    vite: {
        base: '/jupiter/',
        server: {
            host: true
        }
    },
})
