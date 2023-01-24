<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    color: string
    outline: boolean
}>(), {
    color: 'light',
    outline: false,
})

defineEmits(['click'])

const computedColor = computed(() => {
    if( props.color === 'white' ) return props.outline ? `text-black border-gray-300` : `bg-white text-black `
    if( props.color === 'black' ) return props.outline ? `text-black border-black` : `bg-black text-white border-black`
    if( props.color === 'light' ) return props.outline ? `text-gray-700 border-gray-200` : `bg-gray-100 text-black border-gray-200`
    if( props.color === 'dark' ) return props.outline ? `text-gray-800 border-gray-800` : `bg-gray-800 text-white border-gray-800`
    if( props.color === 'primary' ) return props.outline ? `text-purple-700 border-purple-700` : `bg-purple-700 text-white border-purple-700`
    if( props.color === 'link' ) return props.outline ? `text-blue-700 border-blue-700` : `bg-blue-700 text-white border-blue-700`
    if( props.color === 'success' ) return props.outline ? `text-emerald-600 border-emerald-700` : `bg-emerald-600 text-white border-emerald-700`
    if( props.color === 'danger' ) return props.outline ? `text-rose-600 border-rose-600` : `bg-rose-600 text-white border-rose-600`
    if( props.color === 'warning' ) return props.outline ? `text-yellow-600 border-yellow-500` : `bg-yellow-400 text-black border-yellow-400`
    if( props.color === 'info' ) return props.outline ? `text-sky-500 border-sky-500` : `bg-sky-500 text-white border-sky-500`
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
    <button @click="$emit('click')" :class="computedClass">
        <slot/>
    </button>
</template>
