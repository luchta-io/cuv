<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    msg: string
    color: string
    size: 'small' | 'medium' | 'large'
    outline: boolean
    disabled: boolean
}>(), {
    msg: '',
    color: 'light',
    size: 'medium',
    outline: false,
    disabled: false,
})

defineEmits(['click'])

const computedColor = computed(() => {
    if( props.color === 'white' ) return props.outline ? `text-black border-gray-300` : `bg-white text-black `
    if( props.color === 'light' ) return props.outline ? `text-gray-700 border-gray-200` : `bg-gray-100 text-black border-gray-200`
    if( props.color === 'success' ) return props.outline ? `text-emerald-600 border-emerald-700` : `bg-emerald-600 text-white border-emerald-700`
    if( props.color === 'danger' ) return props.outline ? `text-red-600 border-red-700` : `bg-red-600 text-white border-red-700`
    if( props.color === 'warning' ) return props.outline ? `text-yellow-600 border-yellow-700` : `bg-yellow-600 text-white border-yellow-700`
    if( props.color === 'info' ) return props.outline ? `text-blue-600 border-blue-700` : `bg-blue-600 text-white border-blue-700`
    return 'bg-white text-black'
})


const computedClass = computed(() => {
    const base = [
        'p-2 border rounded',
        computedColor.value,
        props.outline ? '' : '',
        props.disabled ? 'disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400' : '',
    ]
    if( props.size === 'small' ) base.push('text-sm') 
    if( props.size === 'medium' ) base.push('text-base') 
    if( props.size === 'large' ) base.push('text-xl') 
    return base

})

</script>

<template>
    <button @click="$emit('click')" :class="computedClass" :disabled="disabled">{{msg}}</button>
</template>
