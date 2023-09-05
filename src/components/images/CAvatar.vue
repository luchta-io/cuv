<script setup lang="ts">
import { computed } from 'vue'
import { useVariant } from '../../composables/variant'
import CSvgIcon from '../../components/images/CSvgIcon.vue'

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

const avatarClass = computed(() => {
    const base = [
        'rounded-full flex inline-flex items-center justify-center leading-normal overflow-hidden relative text-center align-middle',
        fixedRounded.value,
        fixedSize.value,
        useVariant({variant: props.variant, color:  props.color}),
    ]
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

