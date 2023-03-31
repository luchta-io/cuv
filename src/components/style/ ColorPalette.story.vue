<script setup lang="ts">
const colors = {
    'light': {
        'background': '#f6f3f3',
        'background-hover':' #ecebeb',
        'background-focus': '#f6f3f3',
        'border': '#f6f3f3',
        'text': '#808080',
        'outline': '#808080',
        'outline-hover': '#636262',
        'outline-focus': '#808080',
    },
    'dark': {
        'background': '#1d324f',
        'background-hover':' #090c10',
        'background-focus': '#1f2937',
        'border': '#1f2937',
        'text': '#1f2937',
        'outline': '#1f2937',
        'outline-hover': '#090c10',
        'outline-focus': '#1f2937',
    },
    'primary': {
        'background': '#9333ea',
        'background-hover':' #7627c1',
        'background-focus': '#9333ea',
        'border': '#9333ea',
        'text': '#9333ea',
        'outline': '#9333ea',
        'outline-hover': '#7627c1',
        'outline-focus': '#9333ea',
    },
    'link': {
        'background': '#2563eb',
        'background-hover':' #1e51be',
        'background-focus': '#2563eb',
        'border': '#2563eb',
        'text': '#2563eb',
        'outline': '#2563eb',
        'outline-hover': '#1e51be',
        'outline-focus': '#2563eb',
    },
    'success': {
        'background': '#10b981',
        'background-hover':' #028e5f',
        'background-focus': '#10b981',
        'border': '#10b981',
        'text': '#10b981',
        'outline': '#10b981',
        'outline-hover': '#028e5f',
        'outline-focus': '#10b981',
    },
    'danger': {
        'background': '#e11d48',
        'background-hover':' #c1173c',
        'background-focus': '#e11d48',
        'border': '#e11d48',
        'text': '#e11d48',
        'outline': '#e11d48',
        'outline-hover': '#c1173c',
        'outline-focus': '#e11d48',
    },
    'warning': {
        'background': '#facc15',
        'background-hover':' #f0c000',
        'background-focus': '#facc15',
        'border': '#facc15',
        'text': '#facc15',
        'outline': '#facc15',
        'outline-hover': '#f0c000',
        'outline-focus': '#facc15',
    },
    'info': {
        'background': '#0ea5e9',
        'background-hover':' #0c94d3',
        'background-focus': '#0ea5e9',
        'border': '#0ea5e9',
        'text': '#0ea5e9',
        'outline': '#0ea5e9',
        'outline-hover': '#0c94d3',
        'outline-focus': '#0ea5e9',
    },
}
</script>
<template>
    <Story title="Colors" group="design-system" :layout="{ type: 'grid', width: 600 }">
        <Variant
        v-for="(shades, key) of colors" :key="key"
        :title="key"
        >
                <HstColorShades
                    :shades="shades"
                    :get-name="shade => `--cuv-${key}-${shade}`"
                >
                    <template #default="{ color }">
                        <div
                        class="h-4 htw-rounded-full"
                        :style="{
                            backgroundColor: color,
                        }"
                        />
                    </template>
                </HstColorShades>
        </Variant>
    </Story>
</template>
<docs lang="md">
# Color Palette

CSSで変数を設定して、独自のテーマの色にカスタマイズができます。

</docs> 