<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue';
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';
import CCheckbox from '@/components/form/CCheckbox.vue';
import CCluster from '@/components/layout/CCluster.vue';

const slots = useSlots()

const props = withDefaults(defineProps<{
    modelValue: any
    items: Array<any>
    itemValue?: string
    label?:string
    variant?: 'filled'|'outlined'|'underlined'
    multiple?: boolean
    readonly?: boolean
    isError?: boolean
    clearable?: boolean
}>(), {
    itemValue: 'value',
    label: '',
    variant: 'filled',
    multiple: false,
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
    (e: 'update:modelValue', value: any|Array<any>): void
}>()

const changeableModelValue = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})

const fieldClass = computed(() => {
    const base = [
        'group peer flex items-center w-full appearance-none focus:outline-none focus:ring-0 disabled:text-gray-500 opacity-100 border-gray-300',
        props.label === '' ? 'placeholder:opacity-100': '',
        props.readonly ? 'focus-within:border-gray-900' : 'focus-within:border-blue-600',
        props.isError 
        ? 'border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)] text-[var(--jupiter-danger-text)] placeholder:text-[var(--jupiter-danger-text)] placeholder:opacity-0 focus:placeholder:opacity-50' 
        : 'placeholder:text-gray-400 placeholder:opacity-0 focus:placeholder:opacity-100',
        props.clearable ? 'pr-14' : '',
    ]
    if(props.variant === 'filled') base.push('min-h-[2.7rem] rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('min-h-[2.8rem] px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('min-h-[2.3rem] rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    return [
        'peer w-full absolute top-0 left-0 focus:outline-none opacity-0 bg-transparent',
        props.label == '' ? 'placeholder:opacity-100': 'placeholder:opacity-0 focus:placeholder:opacity-100',
        props.modelValue ? 'placeholder:opacity-0' : '',
        props.variant === 'filled' ? 'pt-4' : '',
        props.variant === 'outlined' ? 'pt-4' : '',
        props.variant === 'underlined' ? 'pt-2.5' : '',        
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
        !props.modelValue || !props.modelValue.length ? 'scale-100 translate-y-0' : 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'
        )
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 z-10 px-2 peer-focus:px-2 peer-focus:-translate-y-4 left-1 top-4',
        !props.modelValue || !props.modelValue.length ? 'scale-100 -translate-y-0' :'peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0'
        )
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 z-10 peer-focus:left-0 peer-focus:-translate-y-5',
        !props.modelValue || !props.modelValue.length ? 'scale-100 translate-y-0' : 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'
        )
    if(props.readonly) base.push('peer-focus:translate-y-0 peer-focus:scale-100 peer-focus:text-gray-900')

    return base
})

const selectionClass = computed(() => {
    return [
        'pb-1 pr-4 cursor-pointer group-read-only:text-gray-500 group-disabled:text-gray-500',
        props.variant === 'filled' ? 'pt-4' : '',
        props.variant === 'outlined' ? 'pt-4' : '',
        props.variant === 'underlined' ? 'pt-2' : '',
    ]
})

const selectionItem = computed(() => {
    if(props.multiple && Array.isArray(props.modelValue)) {
        if(props.items[0][props.itemValue]) return props.items.filter(item => props.modelValue.includes(item[props.itemValue]))
        return props.items.filter(item => props.modelValue.includes(item))
    }
    if(!props.items[0][props.itemValue] && props.modelValue) return props.items.filter(item =>{ return item == props.modelValue})[0]
    if(!props.items[0][props.itemValue] && !props.modelValue) return ''
    if(props.modelValue) return props.items.filter(item => {
        if(props.items[0][props.itemValue]) return item[props.itemValue] == props.modelValue
    })[0]

    return {}
})

const initSelectionItem = computed(() => {
    if(typeof selectionItem.value === "object"&&!Array.isArray(selectionItem.value)) return selectionItem.value[props.itemValue]
    return selectionItem.value
})

const clearIconDisplay = computed(() => {
    if(!props.clearable) return false
    if(props.readonly) return false
    if(props.multiple && !props.modelValue.length) return false
    return props.modelValue 
})

const menuIconDisplay = computed(() => {
    return !props.readonly
})

const selectionSlotDisplay = computed(() => {
    if (!props.modelValue) return false
    if(!props.items) return false
    if (props.items.length === 0) return false 
    return props.items[0][props.itemValue] ? Object.keys(selectionItem.value).length : selectionItem.value!==''
})

const liClass= (item:any) => {
    if(props.multiple && props.items[0][props.itemValue]) return props.modelValue.includes(item[props.itemValue]) ? 'bg-blue-50 text-blue-700':''
    if(props.multiple && !props.items[0][props.itemValue]) return props.modelValue.includes(item) ? 'bg-blue-50 text-blue-700':''
    return item == selectionItem.value ? 'bg-blue-50 text-blue-700':''
}

const selectItem = (option: any) => {
    if(props.items[0][props.itemValue] && !props.multiple) changeableModelValue.value = option[props.itemValue]
    if(!props.items[0][props.itemValue] && !props.multiple) changeableModelValue.value = option
    if(props.multiple && Array.isArray(props.modelValue)) {
        if(props.items[0][props.itemValue]) {
            if(!changeableModelValue.value.includes(option[props.itemValue])) changeableModelValue.value = [...changeableModelValue.value, option[props.itemValue]]
            else changeableModelValue.value = changeableModelValue.value.filter((value:any) => option[props.itemValue] !== value)
        }
        else {
            if(!changeableModelValue.value.includes(option)) changeableModelValue.value = [...changeableModelValue.value, option]
            else changeableModelValue.value = changeableModelValue.value.filter((value:any) => option !== value)
        }
    }
    if(!props.multiple) data.isActive = false
}

const openDropdownList = () => {
    if(props.readonly) return
    data.isActive = true
}

const closeDropdownList = () => {
    if (data.isHover) return
    data.isActive = false
}

const toggleDropdownList = () => {
    if(props.readonly) return
    data.isActive = !data.isActive
}

const clear = () => {
    data.isActive = false
    if(!props.modelValue) return
    if(props.multiple) return changeableModelValue.value = []
    return changeableModelValue.value = ''
}

</script>

<template>
<div @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative w-auto">
    <fieldset v-bind="$attrs" :class="fieldClass">
        <div v-show="selectionSlotDisplay && Array.isArray(selectionItem)" @click="toggleDropdownList" :class="selectionClass">
            <span v-for="(item, index) in selectionItem" :key="index">
                <slot name="selection" :item="item" :index="index">
                    {{ items[0][itemValue]?item[itemValue]:item }}{{ index!==selectionItem.length-1?', ':'' }}
                </slot>
            </span>
        </div>
        <div v-show="selectionSlotDisplay && !Array.isArray(selectionItem)" @click="toggleDropdownList" :class="selectionClass">
            <slot name="selection" :item="selectionItem" :index="0">
                {{ initSelectionItem }}
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
        <c-svg-icon v-show="clearIconDisplay" :icon="mdiClose" @click="clear" class="absolute inset-y-1/2 translate-y-[-50%] right-7 text-gray-500 peer-disabled:hidden cursor-pointer" />
        <c-svg-icon v-show="menuIconDisplay" :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" class="absolute inset-y-1/2 translate-y-[-50%] right-1 peer-disabled:hidden" :class="isError ? 'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
        <div v-show="data.isActive" class="absolute left-0 top-full z-50 w-full rounded">
            <ul class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
                <template v-if="items.length > 0">
                    <li v-for="(item, index) in items" :key="index" @click="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                        <c-cluster align="center" space="0">
                            <c-checkbox v-if="multiple" v-model="changeableModelValue" :value="items[0][itemValue]?item[itemValue]:item"/>
                            <div class="max-w-[calc(100%-40px)] break-all">
                                <slot name="item" :item="item" :index="index">
                                    {{ typeof item === "object" ? item[itemValue] : item }}
                                </slot>
                            </div>
                        </c-cluster>
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
