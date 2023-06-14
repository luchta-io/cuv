<script setup lang="ts">
import {computed} from 'vue';
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import { useVariant } from '@/composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    color?: ColorType
    id?:string
    name?:string
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    icon?: string
    disabled?: boolean
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'

}>(), {
    color: 'light',
    variant: 'elevated',
    disabled: false,
    rounded: 'circle',
    size: 'medium',
})

const buttonClass = computed(() => {
    const base = [
        'relative',
        !props.disabled ? useVariant({variant: props.variant, color: props.color}) : 'bg-gray-100 text-gray-400 cursor-default',
        props.icon ? 'rounded-full p-' : 'rounded px-2 py-1',
        fixedSize.value,
        fixedRounded.value,
    ]
    return base
})

const fixedSize = computed(() => {
    if ( props.icon ) return 'w-12 h-12 text-base '
    if ( props.size === 'x-small' ) return 'h-5 text-[0.625rem] px-2'
    if ( props.size === 'small' ) return 'h-7 text-xs px-3'
    if ( props.size === 'large' ) return 'h-11 text-base px-5'
    if ( props.size === 'x-large' ) return 'h-[3.25rem] text-lg px-6'
    return 'h-9 text-sm px-4'
})

const fixedRounded = computed(() => {
    if ( props.icon ) return 'rounded-full'
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    return 'rounded-none'
})

</script>

<template>
<button :id="id" :name="name" :class="buttonClass">
    <CSvgIcon v-if="icon" :icon="icon"/>
    <div v-if="!icon">
        <slot/>
    </div>
</button>
</template>
