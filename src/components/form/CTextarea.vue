<script setup lang="ts">
import {computed} from 'vue';
import { mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: any
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    id?:string
    name?:string
    prependIcon?: string
    appendIcon?: string
    prependInnerIcon?: string
    appendInnerIcon?: string
    error?: boolean
    errorMessage?: string|string[]
    maxErrors?: string|number
    clearable?: boolean
    readonly?: boolean
    disabled?: boolean
    placeholder?: string
    rows?: string|number
}>(), {
    label: '',
    variant: 'filled',
    error: false,
    errorMessage: '',
    clearable: false,
    readonly: false,
    disabled: false, 
    placeholder: '',
    rows: 2,
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
        'group peer col-start-2 flex items-start w-full',
    ]
    if(isError.value) base.push('border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)]' )
    if(!isError.value && props.readonly) base.push('focus-within:border-gray-900')
    if(!isError.value && !props.readonly) base.push('border-gray-300 focus-within:border-blue-600')
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none bg-transparent border-0 border-b-2')

    return base
})

const textareaClass = computed(() => {
    const base = [
        'peer block w-full appearance-none bg-transparent focus:outline-none focus:ring-0 disabled:text-gray-500 read-only:text-gray-500 opacity-100',
    ]
    if(!props.label) base.push('placeholder:opacity-100')
    if(props.label && !props.modelValue) base.push('placeholder:opacity-0 focus:placeholder:opacity-100')
    if(props.label && props.modelValue) base.push('placeholder:opacity-0')
    if(props.variant === 'filled') base.push('min-h-[2.7rem] px-2.5 pb-1 pt-4')
    if(props.variant === 'outlined') base.push('min-h-[2.8rem] px-2.5 pb-1.5 pt-4')
    if(props.variant === 'underlined') base.push('min-h-[2.3rem] pt-2.5 pb-1 pl-1')

    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(isError.value) base.push('text-[var(--jupiter-danger-text)]')
    if(!isError.value) base.push('text-gray-500 peer-read-only:peer-focus:text-gray-900 peer-focus:text-blue-600')
    if(props.variant === 'filled') base.push('-translate-y-4 top-4 z-10 left-2.5 peer-focus:-translate-y-4')
    if(props.variant === 'filled' && props.modelValue) base.push('scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    if(props.variant === 'outlined') base.push('-translate-y-4 top-4 z-10 px-2 peer-focus:px-2 peer-focus:-translate-y-4 left-1 top-4')
    if(props.variant === 'outlined' && props.modelValue) base.push('scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    if(props.variant === 'underlined') base.push('-translate-y-4 top-3 z-10 pl-1 peer-focus:left-0 peer-focus:-translate-y-4')
    if(props.variant === 'underlined' && props.modelValue) base.push('scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    if(!props.modelValue) base.push('scale-100 translate-y-0')
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
<div class="grid grid-cols-[auto_1fr_auto] gap-y-1">
    <div v-show="prependIcon" class="text-lg col-start-1 pt-4 pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="fieldClass">
        <div v-show="prependInnerIcon" class="pl-2 pt-4 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
        </div>
        <div class="relative w-full">
            <textarea
            v-model="textareaValue"
            v-bind="$attrs"
            :id="id"
            :name="name"
            :readonly="readonly"
            :disabled="disabled"
            :placeholder="placeholder"
            :rows="rows"
            :class="textareaClass"/>
            <label :class="labelClass">
                {{ label }}
            </label>
        </div>
        <div class="pt-1 pr-1 self-start">
            <c-svg-icon v-show="clearIconDisplay" :icon="mdiClose" @click="clear" class="text-gray-500 peer-disabled:hidden peer-read-only:hidden cursor-pointer" />
        </div>
        <div v-show="appendInnerIcon" class="px-2 pt-4 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
        </div>
    </div>
    <div v-show="appendIcon" class="text-lg col-start-3 pt-4 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="cursor-pointer" :class="error?'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
    </div>
    <div v-show="isError" class="text-xs text-[var(--jupiter-danger-text)] col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
</div>
</template>
<style module>
textarea:disabled {
    -webkit-text-fill-color: rgb(107 114 128);
}
</style>