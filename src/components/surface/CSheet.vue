<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    border?: boolean
    color?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    elevation?: 'small'|'medium'|'large'
    height?: string|number
    maxHeight?: string|number
    maxWidth?: string|number
    minHeight?: string|number
    minWidth?: string|number
    position?: 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'
    rounded?: 'small'|'medium'|'large'
    tag?: string
    width?: string|number
}>(), {
    border: false,
    tag: 'div',
})

const style = computed(() => {
    const base = [
        'border',
        props.position,
    ]

    if(props.color === 'white') base.push(props.border ? 'border-gray-100' : 'bg-[var(--jupiter-white)] border-transparent')
    if(props.color === 'black') base.push(props.border ? 'border-[var(--jupiter-black)]' :'bg-[var(--jupiter-black)] border-transparent')
    if(props.color === 'light') base.push(props.border ? 'border-[var(--jupiter-light-border)]' : 'bg-[var(--jupiter-light-background)] border-transparent')
    if(props.color === 'dark') base.push(props.border ? 'border-[var(--jupiter-dark-border)]' : 'bg-[var(--jupiter-dark-background)] border-transparent')
    if(props.color === 'primary') base.push(props.border ? 'border-[var(--jupiter-primary-border)]' : 'bg-[var(--jupiter-primary-background)] border-transparent')
    if(props.color === 'link') base.push(props.border ? 'border-[var(--jupiter-link-border)]' : 'bg-[var(--jupiter-link-background)] border-transparent')
    if(props.color === 'success') base.push(props.border ? 'border-[var(--jupiter-success-border)]' : 'bg-[var(--jupiter-success-background)] border-transparent')
    if(props.color === 'danger') base.push(props.border ? 'border-[var(--jupiter-danger-border)]' : 'bg-[var(--jupiter-danger-background)] border-transparent')
    if(props.color === 'warning') base.push(props.border ? 'border-[var(--jupiter-warning-border)]' : 'bg-[var(--jupiter-warning-background)] border-transparent')
    if(props.color === 'info') base.push(props.border ? 'border-[var(--jupiter-info-border)]' : 'bg-[var(--jupiter-info-background)] border-transparent')

    if(props.elevation === 'small') base.push('shadow')
    if(props.elevation === 'medium') base.push('shadow-md')
    if(props.elevation === 'large') base.push('shadow-lg')

    if(props.rounded === 'small') base.push('rounded')
    if(props.rounded === 'medium') base.push('rounded-md')
    if(props.rounded === 'large') base.push('rounded-lg')

    return base
})

</script>

<template>
    <component 
    :is="tag" 
    :class="style"
    :style="{
        width: width,
        height: height,
        'max-width': maxWidth,
        'max-height': maxHeight,
        'min-width': minWidth,
        'min-height': minHeight,
    }">
        <slot/>
    </component>
</template>
