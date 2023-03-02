<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue';
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const slots = useSlots()

const props = withDefaults(defineProps<{
    modelValue: any
    items: Array<any>
    itemValue?: string
    label?:string
    variant?: 'filled'|'outlined'|'underlined'
    readonly?: boolean
    isError?: boolean
    clearable?: boolean
}>(), {
    itemValue: '',
    label: '',
    variant: 'filled',
    readonly: false,
    isError: false,
    clearable: false,
})

const data: {
    isActive: boolean
    isHover: boolean
} = reactive({
    isActive: false,
    isHover: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const fieldClass = computed(() => {
    const base = [
        'group peer flex items-center w-full h-11 appearance-none focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100 border-gray-300',
        props.label === '' ? 'placeholder:opacity-100': '',
        props.readonly ? 'focus-within:border-gray-900' : 'focus-within:border-blue-600',
        props.isError 
        ? 'border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)] text-[var(--jupiter-danger-text)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' 
        : 'placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100',
        props.clearable ? 'pr-14' : '',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    return [
        'peer w-full absolute top-0 left-0 focus:outline-none opacity-0 bg-transparent',
        props.label == '' ? 'placeholder:opacity-100': 'placeholder:opacity-0 focus:placeholder:opacity-100',
        props.modelValue ? 'placeholder:opacity-0' : '',
        props.variant === 'filled' ? 'pt-4 pb-1' : '',
        props.variant === 'outlined' ? 'pt-4 pb-1.5' : '',
        props.variant === 'underlined' ? 'pt-2.5 pb-1' : '',        
    ]
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform scale-75 origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(props.isError) base.push('text-[var(--jupiter-danger-text)]')
    if(!props.isError) base.push('text-gray-500 peer-focus:text-blue-600')
    if(props.variant === 'filled') base.push(
        '-translate-y-4 top-4 z-10 left-2.5 peer-focus:-translate-y-4',
        props.modelValue ? 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 z-10 px-2 peer-focus:px-2 peer-focus:-translate-y-4 left-1 top-4',
        props.modelValue ? 'peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0' : 'scale-100 -translate-y-0'
        )
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 z-10 peer-focus:left-0 peer-focus:-translate-y-5',
        props.modelValue ? 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' : 'scale-100 translate-y-0'
        )

    return base
})

const selectionItem = computed(() => {
    if(!props.itemValue && props.modelValue) return props.items.filter(item =>{ return item == props.modelValue})[0]
    if(!props.itemValue && !props.modelValue) return ''
    if(props.modelValue) return props.items.filter(item => {
        if(props.itemValue) return item[props.itemValue] == props.modelValue
    })[0]

    return {}
})

const clearIconDisplay = computed(() => {
    return props.clearable && props.modelValue
})

const selectionSlotDisplay = computed(() => {
    if (!props.modelValue) return false
    if(!props.items) return false
    if (props.items.length === 0) return false 
    return props.itemValue ? Object.keys(selectionItem).length : selectionItem.value!==''
})

const liClass= (item:any) => {
    // if(props.itemValue) return item[props.itemValue]==selectionItem.value[props.itemValue]?'bg-blue-50 text-blue-700':''
    return item == selectionItem.value ? 'bg-blue-50 text-blue-700':''
}

const selectItem = (option: any) => {
    if(props.itemValue) emits('update:modelValue', option[props.itemValue])
    if(!props.itemValue) emits('update:modelValue', option)
    data.isActive = false
}

const openDropdownList = () => {
    data.isActive = true
    console.log('open', data.isActive)
}

const closeDropdownList = () => {
    if (data.isHover) return
    data.isActive = false
}

const toggleDropdownList = () => {
    data.isActive = !data.isActive
}

const clear = () => {
    if(props.modelValue) emits('update:modelValue', '')
    // if(data.inputText) data.inputText = ''
}

</script>

<template>
<div @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative text-base w-auto">
    <fieldset v-bind="$attrs" :class="fieldClass">
        <div @click="data.isActive = !data.isActive" class="pt-4 pb-1 whitespace-nowrap cursor-pointer group-read-only:text-gray-500 group-disabled:text-gray-500">
            <slot v-if="selectionSlotDisplay" name="selection" :item="selectionItem">
                {{ typeof selectionItem === "object" ? selectionItem[itemValue] : selectionItem }}
            </slot>
        </div>
        <input 
        v-bind="$attrs"
        @focus="openDropdownList" 
        @blur="closeDropdownList"
        type="text" 
        readonly
        :class="inputClass">
        <label 
            :class="labelClass"
        >
            {{ label }}
        </label>
        <c-svg-icon v-show="clearIconDisplay" :icon="mdiClose" @click="clear" class="absolute inset-y-auto right-7 text-gray-500 peer-disabled:hidden cursor-pointer" />
        <c-svg-icon :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" class="absolute inset-y-auto right-1 peer-disabled:hidden" :class="isError ? 'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
        <div v-show="data.isActive" class="absolute left-0 top-full z-50 w-full rounded">
            <ul class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
                <template v-if="items.length > 0">
                    <li v-for="item in items" :key="itemValue?item[itemValue]:item" @click.stop="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                        <slot name="item" :item="item">
                            {{ typeof item === "object" ? item[itemValue] : item }}
                        </slot>
                    </li>
                </template>
                <li v-if="items.length === 0" @click="data.isActive=false" class="p-2 min-w-full text-xs text-gray-500">
                    <slot name="empty">
                        一件もデータがありません
                    </slot>
                </li>
            </ul>
        </div>
    </fieldset>
</div>
<div v-if="isError && slots.errorMessage" class="text-xs text-[var(--jupiter-danger-text)] pt-1">
    <slot name="errorMessage"/>
</div>

</template>
