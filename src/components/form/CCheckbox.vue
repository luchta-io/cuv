<script setup lang="ts">
import { computed, reactive } from 'vue';
import {mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiMinusBox} from '@mdi/js'
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: any
    color?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    error?: boolean
    label?: string
    value?: string
    indeterminate?:boolean
    readonly?: boolean
}>(), {
    color: 'black',
    error: false,
    label: '',
    value: '',
    indeterminate: false,
    readonly: false,
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
        'peer-disabled:text-gray-400 peer-hover:bg-gray-50 peer-hover:peer-disabled:bg-transparent',
        iconDisplayStatus.value === 'blank' ? 'text-[var(--jupiter-black)]' : iconColor.value,
        props.readonly ? 'peer-read-only:text-gray-500' : '',
        props.error ? 'bg-red-100' : '',
    ]
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
        type="checkbox" 
        class="absolute top-0 left-0 w-auto h-full opacity-0 cursor-pointer peer"/>
        <div :class="iconClass">
            <c-svg-icon v-if="iconDisplayStatus==='marked'" :icon="mdiCheckboxMarked" />
            <c-svg-icon v-if="iconDisplayStatus==='blank'" :icon="mdiCheckboxBlankOutline"/>
            <c-svg-icon v-if="iconDisplayStatus==='indeterminate'" :icon="mdiMinusBox" />
        </div>
        <div class="text-base peer-disabled:text-gray-400" :class="readonly?'text-gray-500':'text-[var(--jupiter-black)]'">
            {{ label }}
        </div>
    </label>
</div>
<div v-show="error" class="text-xs text-[var(--jupiter-danger-text)] pt-1 pl-2">
    <slot name="errorMessage"/>
</div>
</template>
