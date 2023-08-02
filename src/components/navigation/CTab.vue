<script setup lang="ts">
import { computed } from 'vue';
import CButton from '@/components/containment/CButton.vue'

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    appendIcon?: string
    bgColor?: ColorType
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
        'border-b border-gray-300 aria-[selected=false]:!text-current -m-[1px] hover:bg-black/20 focus:bg-black/20',
        colorClass.value,
    ]
})

const colorClass = computed(() => {
    if ( props.color === 'white' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-white)] aria-selected:text-[var(--cuv-white)]'
    if ( props.color === 'black' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-black)] aria-selected:text-[var(--cuv-black)]'
    if ( props.color === 'light' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-light-border)] aria-selected:text-[var(--cuv-light-text)]'
    if ( props.color === 'dark' )  return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-dark-border)] aria-selected:text-[var(--cuv-dark-text)]'
    if ( props.color === 'primary' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-primary-border)] aria-selected:text-[var(--cuv-primary-text)]'
    if ( props.color === 'link' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-link-border)] aria-selected:text-[var(--cuv-link-text)]'
    if ( props.color === 'success' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-success-border)] aria-selected:text-[var(--cuv-success-text)]'
    if ( props.color === 'danger' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-danger-border)] aria-selected:text-[var(--cuv-danger-text)]'
    if ( props.color === 'warning' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-warning-border)] aria-selected:text-[var(--cuv-warning-text)]'
    if ( props.color === 'info' ) return 'aria-selected:border-b-2 aria-selected:border-[var(--cuv-info-border)] aria-selected:text-[var(--cuv-info-text)]'
    return 'border-inherit'
})

</script>

<template>
<CButton 
:append-icon="appendIcon"
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