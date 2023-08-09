<script setup lang="ts">
import { computed } from 'vue';

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
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    tag?: string
    width?: string|number
}>(), {
    border: false,
    tag: 'div',
})

const style = computed(() => {
    const base = [
        '',
        props.position,
    ]

    if(props.color === 'white') base.push(props.border ? 'border border-gray-100' : 'bg-[var(--cuv-white)]')
    if(props.color === 'black') base.push(props.border ? 'border border-[var(--cuv-black)]' :'bg-[var(--cuv-black)]')
    if(props.color === 'light') base.push(props.border ? 'border border-[var(--cuv-light-border)]' : 'bg-[var(--cuv-light-background)]')
    if(props.color === 'dark') base.push(props.border ? 'border border-[var(--cuv-dark-border)]' : 'bg-[var(--cuv-dark-background)]')
    if(props.color === 'primary') base.push(props.border ? 'border border-[var(--cuv-primary-border)]' : 'bg-[var(--cuv-primary-background)]')
    if(props.color === 'link') base.push(props.border ? 'border border-[var(--cuv-link-border)]' : 'bg-[var(--cuv-link-background)]')
    if(props.color === 'success') base.push(props.border ? 'border border-[var(--cuv-success-border)]' : 'bg-[var(--cuv-success-background)]')
    if(props.color === 'danger') base.push(props.border ? 'border border-[var(--cuv-danger-border)]' : 'bg-[var(--cuv-danger-background)]')
    if(props.color === 'warning') base.push(props.border ? 'border border-[var(--cuv-warning-border)]' : 'bg-[var(--cuv-warning-background)]')
    if(props.color === 'info') base.push(props.border ? 'border border-[var(--cuv-info-border)]' : 'bg-[var(--cuv-info-background)]')

    if(props.elevation === 'small') base.push('shadow')
    if(props.elevation === 'medium') base.push('shadow-md')
    if(props.elevation === 'large') base.push('shadow-lg')

    if (props.rounded === 'small') base.push('rounded-sm')
    if (props.rounded === 'medium') base.push('rounded')
    if (props.rounded === 'large') base.push('rounded-lg')
    if (props.rounded === 'x-large') base.push('rounded-3xl')
    if (props.rounded === 'circle') base.push('rounded-full')
    if (props.rounded === 'none') base.push('rounded-none')

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
