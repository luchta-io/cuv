<script setup lang="ts">
import {computed, useSlots} from 'vue';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const slots = useSlots()

const props = withDefaults(defineProps<{
    modelValue: string
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    error?: boolean
    errorMessage?: string|string[]
    type?: 'text'|'email'|'password'
    appendIcon?: string
    prependIcon?: string
}>(), {
    label: '',
    variant: 'filled',
    error: false,
    errorMessage: '',
    type: 'text'
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'click:append'): void
    (e: 'click:prepend'): void
}>()

const inputValue = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})

const formatedErrorMessage = computed(() => {
    if(!props.errorMessage) return []
    if(typeof props.errorMessage === 'string') return [props.errorMessage]
    return props.errorMessage
})

const inputClass = computed(() => {
    const base = [
        'peer block w-full appearance-none text-gray-900 focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100',
        props.label === '' ? 'placeholder:opacity-100': '',
        props.error ? 'border-[var(--jupiter-danger-border)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' : 'border-gray-300 read-only:text-gray-500 read-only:focus:border-gray-900 focus:border-blue-600 placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 pb-1 pt-4 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 pb-1.5 pt-4 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none pt-2.5 pb-1 px-0 bg-transparent border-0 border-b-2')

    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(props.error) base.push('text-[var(--jupiter-danger-text)]')
    if(!props.error) base.push('text-gray-500 peer-read-only:peer-focus:text-gray-900 peer-focus:text-blue-600')
    if(props.variant === 'filled') base.push(
        '-translate-y-4 top-4 z-10 left-2.5 peer-focus:-translate-y-4',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 z-10 px-2 peer-focus:px-2 peer-focus:-translate-y-4 left-1 top-4',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 z-10 peer-focus:left-0 peer-focus:-translate-y-5',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )

    return base
})
</script>

<template>
<div class="w-full flex items-center gap-2">
    <c-svg-icon v-if="prependIcon" @click="$emit('click:prepend')" :icon="prependIcon" size="large" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-600'"/>
    <div class="relative z-0 w-full">
        <input 
            v-model="inputValue"
            v-bind="$attrs"
            :type="type" 
            :class="inputClass" 
        />
        <label 
            :class="labelClass"
        >
            {{ label }}
        </label>
        <div v-show="error" class="text-xs text-[var(--jupiter-danger-text)] pt-1">
            <div v-if="!slots.errorMessage">
                <p v-for="(msg,index) in formatedErrorMessage" :key="index">
                    {{ msg }}
                </p>
            </div>
            <slot name="errorMessage"/>
        </div>
    </div>
    <c-svg-icon v-if="appendIcon" @click="$emit('click:append')" :icon="appendIcon" size="large" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-600'"/>
</div>
</template>
<style module>
input:disabled {
    -webkit-text-fill-color: rgb(107 114 128);
}
</style>