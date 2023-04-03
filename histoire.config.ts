import {defineConfig} from 'histoire'
import {HstVue} from '@histoire/plugin-vue'

export default defineConfig({
    plugins: [
        HstVue(),
    ],
    setupFile: '/src/histoire.setup.ts',
    theme: {
        title: "cuv"
    },
    tree: {
        groups: [
            {
                id: 'top',
                title: '',
            },
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
        base: '/cuv/',
        server: {
            host: true
        }
    },
})
