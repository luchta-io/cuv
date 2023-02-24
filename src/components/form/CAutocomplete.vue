<script setup lang="ts">
import { computed, reactive, watchEffect } from 'vue'
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: any
    items: Array<any>
    itemValue?: string
    placeholder?: string
    filter: (item: any, searchText: string) => boolean
    readonly?: boolean
    disabled?: boolean
    isError?: boolean
    clearable?: boolean
}>(), {
    placeholder: '',
    readonly: false,
    disabled: false,
    isError: false,
    clearable: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const data: {
    isActive: boolean
    isHover: boolean
    inputText: string
} = reactive({
    isActive: false,
    isHover: false,
    inputText: '',
})

const fieldClass = computed(() => {
    return [
        'flex items-center bg-white whitespace-nowrap pl-3 pr-7 w-full border rounded focus:ring opacity-100 ',
        props.disabled ? 'pr-3 bg-gray-100 border-none text-zinc-400 cursor-not-allowed': '',
        props.isError ? 'border-red-700 text-red-700' : 'border-gray-400 text-gray-700',
        props.clearable ? 'pr-14' : '',
    ]
})

const dropdownListItems = computed(() => {
    if (!props.items) return []
    if (!data.inputText) return props.items
    return props.items.filter((item)=>props.filter(item, data.inputText))
})

const selectionItem = computed(() => {
    if(!props.itemValue && props.modelValue) return props.items.filter(item =>{ return item === props.modelValue})[0]
    if(!props.itemValue && !props.modelValue) return ''
    if(props.modelValue) return props.items.filter(item => {
        if(props.itemValue) return item[props.itemValue] == props.modelValue
    })[0]

    return {}
})

const clearIconDisplay = computed(() => {
    return props.clearable && !props.disabled && !props.readonly && (data.inputText!=='' || Object.keys(selectionItem.value).length)
})

const dropdownIconDisplay = computed(() => {
    return !props.disabled && !props.readonly
})

const dropdownListDisplay = computed(() => {
    return data.isActive && !props.readonly
})

const selectionSlotDisplay = computed(() => {
    if (!props.modelValue) return false
    if(!props.items) return false
    if (props.items.length === 0) return false 
    return props.itemValue ? Object.keys(selectionItem).length : selectionItem.value!==''
})

const liClass= (item:any) => {
    if(props.itemValue) return item[props.itemValue]===selectionItem.value[props.itemValue]?'bg-blue-50 text-blue-700':''
    return item === selectionItem.value ? 'bg-blue-50 text-blue-700':''
}

const selectItem = (option: any) => {
    if(props.itemValue) emits('update:modelValue', option[props.itemValue])
    if(!props.itemValue) emits('update:modelValue', option)
    data.isActive = false
    data.inputText = ''
}

const openDropdownList = () => {
    data.isActive = true
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
    if(data.inputText) data.inputText = ''
}

watchEffect(() => {
    if(data.inputText) emits('update:modelValue', '')
})

</script>
<template>
<div @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative text-base w-auto">
    <div :class="fieldClass">
        <slot v-if="selectionSlotDisplay" name="selection" :item="selectionItem"/>
        <input 
        v-model="data.inputText" 
        :placeholder="modelValue ? '' : placeholder"
        @focus="openDropdownList" 
        @blur="closeDropdownList"
        @keyup.delete="clear"
        class="py-2 w-full focus:outline-none opacity-100"
        :disabled="disabled"
        :readonly="readonly">
    </div>
    <c-svg-icon v-show="clearIconDisplay" :path="mdiClose" @click="clear" class="absolute top-2 right-7 text-gray-500" />
    <c-svg-icon v-show="dropdownIconDisplay" :path="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" class="absolute top-2 right-1" :class="isError ? 'text-red-700':'text-gray-500'"/>
    <div v-show="dropdownListDisplay" class="absolute left-0 top-full z-50 w-full">
        <ul class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
            <template v-if="dropdownListItems.length > 0">
                <li v-for="item in dropdownListItems" :key="itemValue?item[itemValue]:item" @click.stop="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                <slot name="item" :item="item"/>
            </li>
            </template>
            <li v-if="dropdownListItems.length === 0" @click="data.isActive=false" class="p-2 min-w-full text-xs text-gray-500">
                一致するものはありません
            </li>
        </ul>
    </div>
</div>

</template>