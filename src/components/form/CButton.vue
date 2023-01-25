<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    color: string
    outlined: boolean
}>(), {
    color: 'light',
    outlined: false,
})

const computedColor = computed(() => {
    if( props.color === 'white' ) return props.outlined ? `text-black border-gray-300` : `bg-white text-black `
    if( props.color === 'black' ) return props.outlined ? `text-black border-black` : `bg-black text-white border-black`
    if( props.color === 'light' ) return props.outlined ? `text-gray-700 border-gray-200` : `bg-gray-100 text-black border-gray-200`
    if( props.color === 'dark' ) return props.outlined ? `text-gray-800 border-gray-800` : `bg-gray-800 text-white border-gray-800`
    if( props.color === 'primary' ) return props.outlined ? `text-purple-700 border-purple-700` : `bg-purple-700 text-white border-purple-700`
    if( props.color === 'link' ) return props.outlined ? `text-blue-700 border-blue-700` : `bg-blue-700 text-white border-blue-700`
    if( props.color === 'success' ) return props.outlined ? `text-emerald-600 border-emerald-700` : `bg-emerald-600 text-white border-emerald-700`
    if( props.color === 'danger' ) return props.outlined ? `text-rose-600 border-rose-600` : `bg-rose-600 text-white border-rose-600`
    if( props.color === 'warning' ) return props.outlined ? `text-yellow-600 border-yellow-500` : `bg-yellow-400 text-black border-yellow-400`
    if( props.color === 'info' ) return props.outlined ? `text-sky-500 border-sky-500` : `bg-sky-500 text-white border-sky-500`
    return 'bg-white text-black'
})

const computedClass = computed(() => {
    const base = [
        'p-2 border rounded',
        'disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400',
        computedColor.value,
    ]
    return base
})
</script>

<template>
    <button :class="computedClass">
        <slot/>
    </button>
</template>
