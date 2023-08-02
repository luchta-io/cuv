<script setup lang="ts">
import { computed } from 'vue';
import CButton from '@/components/containment/CButton.vue'

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    appendIcon?: string
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    elevation?: 'small'|'medium'|'large'
    icon?: string
    prependIcon?: string
    value?: string|number
}>(), {
    color: 'black',
    density: 'default',
    disabled: false,    
})

const tabClass = computed(() => {
    return [
        'border-b-2 border-transparent hover:bg-black/20 focus:bg-black/20',
        colorClass.value,
    ]
})

const colorClass = computed(() => {
    if ( props.color === 'white' ) return 'aria-selected:border-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'aria-selected:border-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'aria-selected:border-[var(--cuv-light-border)]'
    if ( props.color === 'dark' )  return 'aria-selected:border-[var(--cuv-dark-border)]'
    if ( props.color === 'primary' ) return 'aria-selected:border-[var(--cuv-primary-border)]'
    if ( props.color === 'link' ) return 'aria-selected:border-[var(--cuv-link-border)]'
    if ( props.color === 'success' ) return 'aria-selected:border-[var(--cuv-success-border)]'
    if ( props.color === 'danger' ) return 'aria-selected:border-[var(--cuv-danger-border)]'
    if ( props.color === 'warning' ) return 'aria-selected:border-[var(--cuv-warning-border)]'
    if ( props.color === 'info' ) return 'aria-selected:border-[var(--cuv-info-border)]'
    return 'border-inherit'
})

</script>

<template>
<CButton 
:append-icon="appendIcon"
:color="color"
:density="density"
:disabled="disabled"
:elevation="elevation"
:icon="icon"
:prepend-icon="prependIcon"
:value="value"
variant="text"
height="3rem"
rounded="none"
role="tab"
aria-selected="false"
tabindex="-1"
class="tab-button"
:class="tabClass"
>
    <slot/>
</CButton>
</template>