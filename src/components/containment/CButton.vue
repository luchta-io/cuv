<script setup lang="ts">
import {computed} from 'vue';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    color?: ColorType
    outlined?: boolean
    id?:string
    name?:string
}>(), {
    color: 'light',
    outlined: false,    
})

const themeColor = computed(() => {
    if (props.color === 'white') return props.outlined ? `text-black` : `bg-[var(--cuv-white)] text-black `
    if (props.color === 'black') return props.outlined ? `text-[var(--cuv-black)] border-[var(--cuv-black)]` : `text-white bg-[var(--cuv-black)] border-[var(--cuv-black)]`
    if (props.color === 'dark') return props.outlined 
        ? `text-[var(--cuv-dark-text)] border-[var(--cuv-dark-outline)] hover:border-[var(--cuv-dark-outline-hover)] focus:border-[var(--cuv-dark-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-dark-background)] hover:bg-[var(--cuv-dark-background-hover)] focus:bg-[var(--cuv-dark-background-focus)] border-[var(--cuv-dark-border)]`
    if (props.color === 'primary') return props.outlined 
        ? `text-[var(--cuv-primary-text)] border-[var(--cuv-primary-outline)] hover:border-[var(--cuv-primary-outline-hover)] focus:border-[var(--cuv-primary-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-primary-background)] hover:bg-[var(--cuv-primary-background-hover)] focus:bg-[var(--cuv-primary-background-focus)] border-[var(--cuv-primary-border)]`
    if (props.color === 'link') return props.outlined 
        ? `text-[var(--cuv-link-text)] border-[var(--cuv-link-outline)] hover:border-[var(--cuv-link-outline-hover)] focus:border-[var(--cuv-link-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-link-background)] hover:bg-[var(--cuv-link-background-hover)] focus:bg-[var(--cuv-link-background-focus)] border-[var(--cuv-link-border)]`
    if (props.color === 'success') return props.outlined 
        ? `text-[var(--cuv-success-text)] border-[var(--cuv-success-outline)] hover:border-[var(--cuv-success-outline-hover)] focus:border-[var(--cuv-success-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-success-background)] hover:bg-[var(--cuv-success-background-hover)] focus:bg-[var(--cuv-success-background-focus)] border-[var(--cuv-success-border)]`
    if (props.color === 'danger') return props.outlined 
        ? `text-[var(--cuv-danger-text)] border-[var(--cuv-danger-outline)] hover:border-[var(--cuv-danger-outline-hover)] focus:border-[var(--cuv-danger-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-danger-background)] hover:bg-[var(--cuv-danger-background-hover)] focus:bg-[var(--cuv-danger-background-focus)] border-[var(--cuv-danger-border)]`
    if (props.color === 'warning') return props.outlined 
        ? `text-[var(--cuv-warning-text)] border-[var(--cuv-warning-outline)] hover:border-[var(--cuv-warning-outline-hover)] focus:border-[var(--cuv-warning-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-warning-background)] hover:bg-[var(--cuv-warning-background-hover)] focus:bg-[var(--cuv-warning-background-focus)] border-[var(--cuv-warning-border)]`
    if (props.color === 'info') return props.outlined 
        ? `text-[var(--cuv-info-text)] border-[var(--cuv-info-outline)] hover:border-[var(--cuv-info-outline-hover)] focus:border-[var(--cuv-info-outline-focus)]] ` 
        : `text-white bg-[var(--cuv-info-background)] hover:bg-[var(--cuv-info-background-hover)] focus:bg-[var(--cuv-info-background-focus)] border-[var(--cuv-info-border)]`

    return props.outlined 
        ? `text-[var(--cuv-light-text)] border-[var(--cuv-light-outline)] hover:border-[var(--cuv-light-outline-hover)] focus:border-[var(--cuv-light-outline-focus)]] ` 
        : `text-black bg-[var(--cuv-light-background)] hover:bg-[var(--cuv-light-background-hover)] focus:bg-[var(--cuv-light-background-focus)] border-[var(--cuv-light-border)]`

})

const buttonClass = computed(() => {
    const base = [
        'px-2 py-1 border rounded relative',
        'disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400',
        themeColor.value,
    ]
    return base
})
</script>

<template>
<button :id="id" :name="name" :class="buttonClass">
    <slot/>
</button>
</template>
