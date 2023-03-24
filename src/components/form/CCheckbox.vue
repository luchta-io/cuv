<script setup lang="ts">
import { computed, reactive } from 'vue';
import {mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiMinusBox} from '@mdi/js'
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: any
    color?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    error?: boolean
    errorMessage?: string|string[]
    maxErrors?: string|number
    label?: string
    value?: string
    id?:string
    name?:string
    indeterminate?:boolean
    readonly?: boolean
    disabled?: boolean
}>(), {
    color: 'black',
    error: false,
    errorMessage: '',
    label: '',
    value: '',
    indeterminate: false,
    readonly: false,
    disabled: false
})

const data: {
    isIndeterminate: boolean
} = reactive({
    isIndeterminate: props.indeterminate,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const checkboxValue = computed({
    get: () => props.modelValue,
    set: value => {
        if(props.readonly) return 
        return emits('update:modelValue', value)
    }
})

const iconDisplayStatus = computed(() => {
    if(data.isIndeterminate) return 'indeterminate'
    if(typeof props.modelValue === 'boolean') return checkboxValue.value ? 'marked' : 'blank'
    return checkboxValue.value.includes(props.value) ? 'marked' : 'blank'
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

const iconColor = computed(() => {
    if(props.color === 'white') return 'text-[var(--jupiter-white)]'
    if(props.color === 'black') return 'text-[var(--jupiter-black)]'
    if(props.color === 'light') return 'text-[var(--jupiter-light-text)]'
    if(props.color === 'dark') return 'text-[var(--jupiter-dark-text)]'
    if(props.color === 'primary') return 'text-[var(--jupiter-primary-text)]'
    if(props.color === 'link') return 'text-[var(--jupiter-link-text)]'
    if(props.color === 'success') return 'text-[var(--jupiter-success-text)]'
    if(props.color === 'danger') return 'text-[var(--jupiter-danger-text)]'
    if(props.color === 'warning') return 'text-[var(--jupiter-warning-text)]'
    if(props.color === 'info') return 'text-[var(--jupiter-info-text)]'
    return ''
})

const iconClass = computed(() => {
    return [
        'group w-10 h-10 rounded-full flex justify-center items-center',
        'peer-disabled:text-gray-400 peer-hover:bg-gray-50 peer-focus:bg-gray-50 peer-hover:peer-disabled:bg-transparent',
        iconDisplayStatus.value === 'blank' ? 'text-[var(--jupiter-black)]' : iconColor.value,
        props.readonly ? 'peer-read-only:text-gray-500' : '',
        isError.value ? 'text-[var(--jupiter-danger-text)]' : '',
    ]
})

const labelClass = computed(() => {
    const base = [
        'text-base peer-disabled:text-gray-400',
    ]
    if(props.readonly) base.push('text-gray-500')
    if(isError.value) base.push('text-[var(--jupiter-danger-text)]')
    if(!props.readonly && !isError.value) base.push('text-[var(--jupiter-black)]')

    return base
})

const indeterminateClick = () => {
    data.isIndeterminate = false
}

</script>

<template>
<div class="relative inline-flex items-center justify-center">
    <label class="relative text-xl w-auto break-words cursor-pointer inline-flex items-center justify-center">
        <input 
        v-model="checkboxValue" 
        v-bind="$attrs"
        @click="indeterminateClick"
        :value="value"
        :id="id"
        :name="name"
        :indeterminate="indeterminate"
        :readonly="readonly"
        :disabled="disabled"
        type="checkbox" 
        class="absolute top-0 left-0 w-auto h-full opacity-0 cursor-pointer peer"/>
        <div :class="iconClass">
            <c-svg-icon v-if="iconDisplayStatus==='marked'" :icon="mdiCheckboxMarked" />
            <c-svg-icon v-if="iconDisplayStatus==='blank'" :icon="mdiCheckboxBlankOutline"/>
            <c-svg-icon v-if="iconDisplayStatus==='indeterminate'" :icon="mdiMinusBox" />
        </div>
        <div :class="labelClass">
            {{ label }}
        </div>
    </label>
</div>
<div v-show="isError" class="text-xs text-[var(--jupiter-danger-text)] pt-1 pl-2">
    <p v-for="(msg,index) in formatedErrorMessage" :key="index">
        {{ msg }}
    </p>
</div>
</template>
