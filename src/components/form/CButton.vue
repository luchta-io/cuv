<script setup lang="ts">
import {computed} from 'vue';

type ColorType =
    'white' | 'light' | 'dark' | 'black' |
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    color: ColorType
    outlined: boolean
}>(), {
    color: 'light',
    outlined: false,
})

const computedColor = computed(() => {
    if (props.color === 'white') return props.outlined ? `text-black border-gray-300` : `bg-[var(--jupiter-white)] text-black `
    if (props.color === 'light') return props.outlined ? `text-gray-700 border-[var(--jupiter-light)]` : `bg-[var(--jupiter-light)] text-black border-[var(--jupiter-light)]`
    if (props.color === 'dark') return props.outlined ? `text-[var(--jupiter-dark)] border-[var(--jupiter-dark)]` : `bg-[var(--jupiter-dark)] text-white border-[var(--jupiter-dark)]`
    if (props.color === 'black') return props.outlined ? `text-[var(--jupiter-black)] border-[var(--jupiter-black)]` : `bg-[var(--jupiter-black)] text-white border-[var(--jupiter-black)]`
    if (props.color === 'primary') return props.outlined ? `text-[var(--jupiter-primary)] border-[var(--jupiter-primary)]` : `bg-[var(--jupiter-primary)] text-white border-[var(--jupiter-primary)]`
    if (props.color === 'link') return props.outlined ? `text-[var(--jupiter-link)] border-[var(--jupiter-link)]` : `bg-[var(--jupiter-link)] text-white border-[var(--jupiter-link)]`
    if (props.color === 'success') return props.outlined ? `text-[var(--jupiter-success)] border-[var(--jupiter-success)]` : `bg-[var(--jupiter-success)] text-white border-[var(--jupiter-success)]`
    if (props.color === 'danger') return props.outlined ? `text-[var(--jupiter-danger)] border-[var(--jupiter-danger)]` : `bg-[var(--jupiter-danger)] text-white border-[var(--jupiter-danger)]`
    if (props.color === 'warning') return props.outlined ? `text-[var(--jupiter-warning)] border-[var(--jupiter-warning)]` : `bg-[var(--jupiter-warning)] text-black border-[var(--jupiter-warning)]`
    if (props.color === 'info') return props.outlined ? `text-[var(--jupiter-info)] border-[var(--jupiter-info)]` : `bg-[var(--jupiter-info)] text-white border-[var(--jupiter-info)]`
    return 'bg-white text-black'
})

const computedClass = computed(() => {
    const base = [
        'px-2 py-1 border rounded',
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
