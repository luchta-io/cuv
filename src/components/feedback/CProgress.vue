<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    size?: 'default' | 'small' | 'large'
    width?: 'default' | 'thin' | 'thick'
    color?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
}>(), {
    size: 'default',
    width: 'default',
    color: 'black',
})

const outerRingClass = computed(() => {
    return [
        'rounded-full absolute border-solid border-gray-200',
        props.size === 'default' ? 'h-8 w-8' : '',
        props.size === 'small' ? 'h-4 w-4' : '',
        props.size === 'large' ? 'h-12 w-12' : '',

        props.width === 'default' ? 'border-4' : '',
        props.width === 'thin' ? 'border-2' : '',
        props.width === 'thick' ? 'border-8' : '',
    ]    
})

const innerRingClass = computed(() => {
    return [
        'inline-block animate-spin rounded-full border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        props.size === 'default' ? 'h-8 w-8' : '',
        props.size === 'small' ? 'h-4 w-4' : '',
        props.size === 'large' ? 'h-12 w-12' : '',
        
        props.width === 'default' ? 'border-4' : '',
        props.width === 'thin' ? 'border-2' : '',
        props.width === 'thick' ? 'border-8' : '',

        props.color === 'white' ? 'border-[var(--jupiter-white)]' : '',
        props.color === 'black' ? 'border-[var(--jupiter-black)]' : '',
        props.color === 'light' ? 'border-[var(--jupiter-light-border)]' : '',
        props.color === 'dark' ? 'border-[var(--jupiter-dark-border)]' : '',
        props.color === 'primary' ? 'border-[var(--jupiter-primary-border)]' : '',
        props.color === 'link' ? 'border-[var(--jupiter-link-border)]' : '',
        props.color === 'success' ? 'border-[var(--jupiter-success-border)]' : '',
        props.color === 'danger' ? 'border-[var(--jupiter-danger-border)]' : '',
        props.color === 'warning' ? 'border-[var(--jupiter-warning-border)]' : '',
        props.color === 'info' ? 'border-[var(--jupiter-info-border)]' : '',
    ]    
})    

</script>
<template>
<div class="flex items-center justify-center">
    <div :class="outerRingClass"></div>
    <div :class="innerRingClass"></div>
</div>
</template>