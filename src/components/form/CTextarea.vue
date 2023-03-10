<script setup lang="ts">
import {computed, useSlots} from 'vue';
import { mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const slots = useSlots()

const props = withDefaults(defineProps<{
    modelValue: any
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    prependIcon?: string
    appendIcon?: string
    prependInnerIcon?: string
    appendInnerIcon?: string
    error?: boolean
    clearable?: boolean
    readonly?: boolean
}>(), {
    label: '',
    variant: 'filled',
    error: false,
    clearable: false,
    readonly: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'click:prepend'): void
    (e: 'click:append'): void
    (e: 'click:prependInner'): void
    (e: 'click:appendInner'): void
}>()

const textareaValue = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})

const fieldClass = computed(() => {
    const base = [
        'group peer flex items-center w-full appearance-none focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100',
        // props.clearable ? 'pr-6' : '',
    ]
    if(props.error) base.push('border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' )
    if(!props.error) {
        base.push('placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100 border-gray-300')
        base.push(props.readonly? 'focus-within:border-gray-900' : 'focus-within:border-blue-600')
    }

    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none bg-transparent border-0 border-b-2')

    return base
})

const textareaClass = computed(() => {
    const base = [
        'peer block w-full appearance-none focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100',
        props.label === '' ? 'placeholder:opacity-100': '',
        props.error ? 'placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' : 'text-gray-900 read-only:text-gray-500 placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 pb-1 pt-4 bg-gray-50')
    if(props.variant === 'outlined') base.push('px-2.5 pb-1.5 pt-4 bg-transparent rounded-lg')
    if(props.variant === 'underlined') base.push('rounded-none pt-2.5 pb-1 px-0 bg-transparent')

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
        '-translate-y-4 top-3 z-10 peer-focus:left-0 peer-focus:-translate-y-4',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )

    return base
})

const clearIconDisplay = computed(() => {
    return props.clearable && textareaValue.value
})

const clear = () => {
    if(!props.modelValue) return
    return textareaValue.value = ''
}

</script>

<template>
<div class="flex items-center">
    <div v-show="prependIcon" class="px-2 text-lg">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="text-gray-500 cursor-pointer" />
    </div>
    <div :class="fieldClass">
        <div v-show="prependInnerIcon" class="pl-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>
        <div class="relative w-full">
            <textarea
            v-model="textareaValue"
            v-bind="$attrs"
            :readonly="readonly"
            :class="textareaClass"/>
            <label :class="labelClass">
                {{ label }}
            </label>
        </div>
        <div class="pt-1 pr-1 self-start">
            <c-svg-icon v-show="clearIconDisplay" :icon="mdiClose" @click="clear" class="text-gray-500 peer-disabled:hidden peer-read-only:hidden cursor-pointer" />
        </div>
        <div v-show="appendInnerIcon" class="px-2 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>
    </div>
    <div v-show="appendIcon" class="px-2 text-lg">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="text-gray-500 cursor-pointer" />
    </div>
</div>

<div v-show="error && slots.errorMessage" class="text-xs text-[var(--jupiter-danger-text)] pt-1">
    <slot name="errorMessage"/>
</div>
</template>
