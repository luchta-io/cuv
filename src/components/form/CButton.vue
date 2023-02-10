<script setup lang="ts">
import {computed} from 'vue';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
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
    if (props.color === 'white') return props.outlined ? `text-black` : `bg-[var(--jupiter-white)] text-black `
    if (props.color === 'black') return props.outlined ? `text-[var(--jupiter-black)] border-[var(--jupiter-black)]` : `text-white bg-[var(--jupiter-black)] border-[var(--jupiter-black)]`
    if (props.color === 'dark') return props.outlined 
        ? `text-[var(--jupiter-dark-text)] border-[var(--jupiter-dark-outline)] hover:border-[var(--jupiter-dark-outline-hover)] focus:border-[var(--jupiter-dark-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-dark-background)] hover:bg-[var(--jupiter-dark-background-hover)] focus:bg-[var(--jupiter-dark-background-focus)] border-[var(--jupiter-dark-border)]`
    if (props.color === 'primary') return props.outlined 
        ? `text-[var(--jupiter-primary-text)] border-[var(--jupiter-primary-outline)] hover:border-[var(--jupiter-primary-outline-hover)] focus:border-[var(--jupiter-primary-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-primary-background)] hover:bg-[var(--jupiter-primary-background-hover)] focus:bg-[var(--jupiter-primary-background-focus)] border-[var(--jupiter-primary-border)]`
    if (props.color === 'link') return props.outlined 
        ? `text-[var(--jupiter-link-text)] border-[var(--jupiter-link-outline)] hover:border-[var(--jupiter-link-outline-hover)] focus:border-[var(--jupiter-link-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-link-background)] hover:bg-[var(--jupiter-link-background-hover)] focus:bg-[var(--jupiter-link-background-focus)] border-[var(--jupiter-link-border)]`
    if (props.color === 'success') return props.outlined 
        ? `text-[var(--jupiter-success-text)] border-[var(--jupiter-success-outline)] hover:border-[var(--jupiter-success-outline-hover)] focus:border-[var(--jupiter-success-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-success-background)] hover:bg-[var(--jupiter-success-background-hover)] focus:bg-[var(--jupiter-success-background-focus)] border-[var(--jupiter-success-border)]`
    if (props.color === 'danger') return props.outlined 
        ? `text-[var(--jupiter-danger-text)] border-[var(--jupiter-danger-outline)] hover:border-[var(--jupiter-danger-outline-hover)] focus:border-[var(--jupiter-danger-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-danger-background)] hover:bg-[var(--jupiter-danger-background-hover)] focus:bg-[var(--jupiter-danger-background-focus)] border-[var(--jupiter-danger-border)]`
    if (props.color === 'warning') return props.outlined 
        ? `text-[var(--jupiter-warning-text)] border-[var(--jupiter-warning-outline)] hover:border-[var(--jupiter-warning-outline-hover)] focus:border-[var(--jupiter-warning-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-warning-background)] hover:bg-[var(--jupiter-warning-background-hover)] focus:bg-[var(--jupiter-warning-background-focus)] border-[var(--jupiter-warning-border)]`
    if (props.color === 'info') return props.outlined 
        ? `text-[var(--jupiter-info-text)] border-[var(--jupiter-info-outline)] hover:border-[var(--jupiter-info-outline-hover)] focus:border-[var(--jupiter-info-outline-focus)]] ` 
        : `text-white bg-[var(--jupiter-info-background)] hover:bg-[var(--jupiter-info-background-hover)] focus:bg-[var(--jupiter-info-background-focus)] border-[var(--jupiter-info-border)]`

    return props.outlined 
        ? `text-[var(--jupiter-light-text)] border-[var(--jupiter-light-outline)] hover:border-[var(--jupiter-light-outline-hover)] focus:border-[var(--jupiter-light-outline-focus)]] ` 
        : `text-black bg-[var(--jupiter-light-background)] hover:bg-[var(--jupiter-light-background-hover)] focus:bg-[var(--jupiter-light-background-focus)] border-[var(--jupiter-light-border)]`

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
