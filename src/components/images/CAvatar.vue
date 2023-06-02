<script setup lang="ts">
import { computed } from 'vue'
import CSvgIcon from '@/components/images/CSvgIcon.vue'

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    color?: ColorType
    icon?: string
    image?: string
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    variant?: 'text' | 'flat' | 'elevated' | 'outlined' | 'plain'
}>(), {
    rounded: 'circle',
    size: 'medium',
    variant: 'flat',
})

const backgroundColor = computed(() => {
    if ( props.color === 'white' ) return 'bg-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'bg-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'bg-[var(--cuv-light-background)] hover:bg-[var(--cuv-light-background-hover)]'
    if ( props.color === 'dark' )  return 'bg-[var(--cuv-dark-background)] hover:bg-[var(--cuv-dark-background-hover)] text-white'
    if ( props.color === 'primary' ) return 'bg-[var(--cuv-primary-background)] hover:bg-[var(--cuv-primary-background-hover)] text-white'
    if ( props.color === 'link' ) return 'bg-[var(--cuv-link-background)] hover:bg-[var(--cuv-link-background-hover)] text-white'
    if ( props.color === 'success' ) return 'bg-[var(--cuv-success-background)] hover:bg-[var(--cuv-success-background-hover)] text-white'
    if ( props.color === 'danger' ) return 'bg-[var(--cuv-danger-background)] hover:bg-[var(--cuv-danger-background-hover)] text-white'
    if ( props.color === 'warning' ) return 'bg-[var(--cuv-warning-background)] hover:bg-[var(--cuv-warning-background-hover)]'
    if ( props.color === 'info' ) return 'bg-[var(--cuv-info-background)] hover:bg-[var(--cuv-info-background-hover)] text-white'
    return 'bg-transparent'
})

const outlineColor = computed(() => {
    if ( props.color === 'white' ) return 'outline outline-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'outline outline-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'outline outline-[var(--cuv-light-outline)] hover:outline-[var(--cuv-light-outline-hover)]'
    if ( props.color === 'dark' )  return 'outline outline-[var(--cuv-dark-outline)] hover:outline-[var(--cuv-dark-outline-hover)]'
    if ( props.color === 'primary' ) return 'outline outline-[var(--cuv-primary-outline)] hover:outline-[var(--cuv-primary-outline-hover)]'
    if ( props.color === 'link' ) return 'outline outline-[var(--cuv-link-outline)] hover:outline-[var(--cuv-link-outline-hover)]'
    if ( props.color === 'success' ) return 'outline outline-[var(--cuv-success-outline)] hover:outline-[var(--cuv-success-outline-hover)]'
    if ( props.color === 'danger' ) return 'outline outline-[var(--cuv-danger-outline)] hover:outline-[var(--cuv-danger-outline-hover)]'
    if ( props.color === 'warning' ) return 'outline outline-[var(--cuv-warning-outline)] hover:outline-[var(--cuv-warning-outline-hover)]'
    if ( props.color === 'info' ) return 'outline outline-[var(--cuv-info-outline)] hover:outline-[var(--cuv-info-outline-hover)]'
    return 'outline-transparent'
})

const textColor = computed(() => {
    if ( props.color === 'white' ) return 'text-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'text-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'text-[var(--cuv-light-text)]'
    if ( props.color === 'dark' )  return 'text-[var(--cuv-dark-text)]'
    if ( props.color === 'primary' ) return 'text-[var(--cuv-primary-text)]'
    if ( props.color === 'link' ) return 'text-[var(--cuv-link-text)]'
    if ( props.color === 'success' ) return 'text-[var(--cuv-success-text)]'
    if ( props.color === 'danger' ) return 'text-[var(--cuv-danger-text)]'
    if ( props.color === 'warning' ) return 'text-[var(--cuv-warning-text)]'
    if ( props.color === 'info' ) return 'text-[var(--cuv-info-text)]'
    return 'text-black'
})

const avatarClass = computed(() => {
    const base = [
        'rounded-full flex inline-flex items-center justify-center leading-normal overflow-hidden relative text-center align-middle',
        fixedRounded.value,
        fixedSize.value
    ]

    if ( props.variant === 'text' ) base.push('bg-transparent', textColor.value)
    if ( props.variant === 'flat' ) base.push(backgroundColor.value)
    if ( props.variant === 'elevated' ) base.push('shadow-md',backgroundColor.value)
    if ( props.variant === 'outlined' ) base.push(outlineColor.value, textColor.value)
    if ( props.variant === 'plain' ) base.push('opacity-60', textColor.value)

    return base
})

const fixedSize = computed(() => {
    if ( props.size === 'x-small' ) return 'w-6 h-6'
    if ( props.size === 'small' ) return 'w-8 h-8'
    if ( props.size === 'large' ) return 'w-12 h-12'
    if ( props.size === 'x-large' ) return 'w-14 h-14'
    return 'w-10 h-10'
})

const fixedRounded = computed(() => {
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    return 'rounded-none'
})

</script>

<template>
    <div :class="avatarClass">
        <CSvgIcon v-if="icon && !image" :icon="icon" size="large"/>
        <div v-if="image" class="object-cover w-full h-full">
            <img :src="image"/>
        </div>
        <slot />
    </div>
</template>

