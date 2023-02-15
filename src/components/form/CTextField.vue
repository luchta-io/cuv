<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    modelValue: string
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    isError?: boolean
}>(), {
    label: '',
    variant: 'filled',
    isError: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})

const inputClass = computed(() => {
    const base = [
        'peer block w-full appearance-none focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100',
        props.label === '' ? 'placeholder:opacity-100': '',
        props.isError ? 'border-[var(--jupiter-danger-border)] text-[var(--jupiter-danger-text)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' : 'border-gray-300 text-gray-900 read-only:text-gray-500 read-only:focus:border-gray-900 focus:border-blue-600 placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 pb-1 pt-4 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 pb-1.5 pt-4 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none pt-2.5 pb-1 px-0 bg-transparent border-0 border-b-2')

    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(props.isError) base.push('text-[var(--jupiter-danger-text)]')
    if(!props.isError) base.push('text-gray-500 peer-read-only:peer-focus:text-gray-900 peer-focus:text-blue-600')

    if(props.variant === 'filled') base.push('-translate-y-4 top-4 z-10 left-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4')
    if(props.variant === 'outlined') base.push('-translate-y-4 top-4 z-10 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-0 peer-focus:-translate-y-4 left-1 top-4')
    if(props.variant === 'underlined') base.push('-translate-y-5 top-3 z-10 peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5')

    return base
})
</script>

<template>
<div class="relative z-0">
    <input 
        v-model="inputValue"
        v-bind="$attrs"
        type="text" 
        :class="inputClass" 
    />
    <label 
        :class="labelClass"
    >
        {{ label }}
    </label>
    <div v-show="isError" class="text-xs text-[var(--jupiter-danger-text)] pt-1">
        <slot name="errorMessage"/>
    </div>
</div>
</template>
<style>
input:disabled {
    -webkit-text-fill-color: rgb(107 114 128);
}
</style>