<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import { useVariant } from '@/composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    appendIcon?: string,
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    elevation?: 'small'|'medium'|'large'
    icon?: string
    id?:string
    name?:string
    prependIcon?: string,
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
}>(), {
    color: 'light',
    density: 'default',
    disabled: false,
    rounded: 'medium',
    size: 'medium',
    variant: 'elevated',
})

</script>

<template>
</template>

<style module>
</style>
