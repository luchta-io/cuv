<script setup lang="ts">
import {computed} from 'vue';
import { mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: string
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    id?:string
    name?:string
    error?: boolean
    errorMessage?: string|string[]
    maxErrors?: string|number
    type?: 'text'|'email'|'password'
    appendIcon?: string
    prependIcon?: string
    prependInnerIcon?: string
    appendInnerIcon?: string
    clearable: boolean
    readonly?: boolean
    disabled?: boolean
    placeholder?: string
}>(), {
    label: '',
    variant: 'filled',
    error: false,
    errorMessage: '',
    type: 'text',
    clearable: false,
    readonly: false,
    disabled: false,
    placeholder: '',
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
    const max = Number(props.maxErrors)
    if(!props.errorMessage) return []
    if(typeof props.errorMessage === 'string') return new Array(props.errorMessage)
    if(!isNaN(max)) return props.errorMessage.filter((x, index) => index < max )
    if(isNaN(max)) return props.errorMessage
    return props.errorMessage
})

const isError = computed(() => {
    if(props.error) return true
    if(formatedErrorMessage.value.length) return true
    return false
})

const fieldClass = computed(() => {
    const base = [
        'peer w-full col-start-2 flex items-center appearance-none text-gray-900 focus:outline-none focus:ring-0 opacity-100',
        props.readonly ? 'focus-within:border-gray-900' : 'focus-within:border-blue-600',
        isError.value 
        ? 'border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)] text-[var(--jupiter-danger-text)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' 
        : 'placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100 border-gray-300',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})
const inputClass = computed(() => {
    const base = [
        'peer w-full appearance-none text-gray-900 focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100 bg-transparent',
        props.label === '' 
        ? 'placeholder:opacity-100'
        : !props.modelValue ? 'placeholder:opacity-0 focus:placeholder:opacity-100' : 'placeholder:opacity-0',
        props.variant === 'filled' ? 'pt-4 pb-1' : '',
        props.variant === 'outlined' ? 'pt-4 pb-1.5' : '',
        props.variant === 'underlined' ? 'pt-2.5 pb-1' : '',        
    ]

    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(isError.value) base.push('text-[var(--jupiter-danger-text)]')
    if(!isError.value) base.push('text-gray-500 peer-read-only:peer-focus:text-gray-900 peer-focus:text-blue-600')
    if(props.variant === 'filled') base.push(
        '-translate-y-4 top-4 left-0 peer-focus:-translate-y-4',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 left-0 peer-focus:-translate-y-4',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 left-0 peer-focus:left-0 peer-focus:-translate-y-5',
        props.modelValue ? 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )

    return base
})

const clearIconDisplay = computed(() => {
    if(!props.clearable) return false
    if(props.readonly) return false
    if(props.disabled) return false
    return props.modelValue 
})

const clear = () => {
    emits('update:modelValue', '')
}

</script>

<template>
<div class="relative w-auto grid grid-cols-[auto_1fr_auto] gap-y-1">
    <div v-show="prependIcon" class="text-lg col-start-1 pt-4 pr-1">
        <c-svg-icon @click="$emit('click:prepend')" :icon="prependIcon" size="medium" class="cursor-pointer text-gray-500"/>
    </div>
    <div :class="fieldClass">
        <div v-show="prependInnerIcon" class="pt-2 pr-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>
        <div class="relative w-full">
            <input 
                v-model="inputValue"
                v-bind="$attrs"
                :id="id"
                :name="name"
                :type="type" 
                :readonly="readonly"
                :disabled="disabled"
                :placeholder="placeholder"
                :class="inputClass" 
            />
            <label 
                :class="labelClass"
            >
                {{ label }}
            </label>
        </div>
        <div v-show="clearIconDisplay" class="pt-2">
            <c-svg-icon :icon="mdiClose" @click="clear" class="text-gray-500 cursor-pointer" />
        </div>
        <div v-show="appendInnerIcon" class="pt-2 pl-1 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>

    </div>
    <div v-show="appendIcon" class="text-lg col-start-3 pt-4 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="text-gray-500 cursor-pointer" />
    </div>
    <div v-show="isError" class="text-xs text-[var(--jupiter-danger-text)] col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
</div>
</template>
<style module>
input:disabled {
    -webkit-text-fill-color: rgb(107 114 128);
}
</style>