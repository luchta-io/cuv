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
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
}>(), {
    rounded: 'circle',
    size: 'medium',
    variant: 'flat',
})

const backgroundColor = computed(() => {
    if ( props.color === 'white' ) return 'bg-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'bg-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'bg-[var(--cuv-light-background)]'
    if ( props.color === 'dark' )  return 'bg-[var(--cuv-dark-background)] text-white'
    if ( props.color === 'primary' ) return 'bg-[var(--cuv-primary-background)] text-white'
    if ( props.color === 'link' ) return 'bg-[var(--cuv-link-background)] text-white'
    if ( props.color === 'success' ) return 'bg-[var(--cuv-success-background)] text-white'
    if ( props.color === 'danger' ) return 'bg-[var(--cuv-danger-background)] text-white'
    if ( props.color === 'warning' ) return 'bg-[var(--cuv-warning-background)] '
    if ( props.color === 'info' ) return 'bg-[var(--cuv-info-background)] text-white'
    return 'bg-transparent'
})

const backgroundLightColor = computed(() => {
    if ( props.color === 'white' ) return 'bg-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'bg-[var( --cuv-grey-lighten-2)]'
    if ( props.color === 'light' ) return 'bg-[var(--cuv-light-background)]'
    if ( props.color === 'dark' )  return 'bg-[var(--cuv-grey-lighten-3)] text-white'
    if ( props.color === 'primary' ) return 'bg-[var(--cuv-purple-lighten-5)] text-white'
    if ( props.color === 'link' ) return 'bg-[var(--cuv-indigo-lighten-5)] text-white'
    if ( props.color === 'success' ) return 'bg-[var(--cuv-green-lighten-5)] text-white'
    if ( props.color === 'danger' ) return 'bg-[var(--cuv-red-lighten-5)] text-white'
    if ( props.color === 'warning' ) return 'bg-[var(--cuv-yellow-lighten-5)]'
    if ( props.color === 'info' ) return 'bg-[var(--cuv-blue-lighten-5)] text-white'
    return 'bg-transparent'
})

const outlineColor = computed(() => {
    if ( props.color === 'white' ) return 'outline outline-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'outline outline-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'outline outline-[var(--cuv-light-outline)]'
    if ( props.color === 'dark' )  return 'outline outline-[var(--cuv-dark-outline)]'
    if ( props.color === 'primary' ) return 'outline outline-[var(--cuv-primary-outline)]'
    if ( props.color === 'link' ) return 'outline outline-[var(--cuv-link-outline)]'
    if ( props.color === 'success' ) return 'outline outline-[var(--cuv-success-outline)]'
    if ( props.color === 'danger' ) return 'outline outline-[var(--cuv-danger-outline)]'
    if ( props.color === 'warning' ) return 'outline outline-[var(--cuv-warning-outline)]'
    if ( props.color === 'info' ) return 'outline outline-[var(--cuv-info-outline)]'
    return 'outline-transparent'
})

const textColor = computed(() => {
    if ( props.color === 'white' ) return '!text-[var(--cuv-white)]'
    if ( props.color === 'black' ) return '!text-[var(--cuv-black)]'
    if ( props.color === 'light' ) return '!text-[var(--cuv-light-text)]'
    if ( props.color === 'dark' )  return '!text-[var(--cuv-dark-text)]'
    if ( props.color === 'primary' ) return '!text-[var(--cuv-primary-text)]'
    if ( props.color === 'link' ) return '!text-[var(--cuv-link-text)]'
    if ( props.color === 'success' ) return '!text-[var(--cuv-success-text)]'
    if ( props.color === 'danger' ) return '!text-[var(--cuv-danger-text)]'
    if ( props.color === 'warning' ) return '!text-[var(--cuv-warning-text)]'
    if ( props.color === 'info' ) return '!text-[var(--cuv-info-text)]'
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
    if ( props.variant === 'tonal' ) base.push(backgroundLightColor.value, textColor.value)
    if ( props.variant === 'outlined' ) base.push(outlineColor.value, textColor.value)
    if ( props.variant === 'plain' ) base.push('opacity-60 hover:opacity-100 duration-300', textColor.value)

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

