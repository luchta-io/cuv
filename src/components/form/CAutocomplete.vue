<script setup lang="ts">
import { computed, reactive,  watchEffect } from 'vue'
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/dataDisplay/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    modelValue: any
    items: Array<any>
    itemValue?: string
    filter: (item: any, searchText: string) => boolean
    label?: string
    variant?: 'filled'|'outlined'|'underlined'
    id?: string
    name?: string
    readonly?: boolean
    disabled?: boolean
    error?: boolean
    errorMessage?: string|string[]
    maxErrors?: string|number
    clearable?: boolean
    placeholder?: string
    prependIcon?: string
    appendIcon?: string
    prependInnerIcon?: string
    appendInnerIcon?: string
}>(), {
    itemValue: '',
    label: '',
    variant: 'filled',
    readonly: false,
    disabled:false,
    error: false,
    errorMessage: '',
    clearable: false,
    placeholder: '',
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'click:prepend'): void
    (e: 'click:append'): void
    (e: 'click:prependInner'): void
    (e: 'click:appendInner'): void
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
        'group peer relative col-start-2 flex items-center w-full appearance-none focus:outline-none focus:ring-0 opacity-100',
        props.readonly ? 'focus-within:border-gray-900' : 'focus-within:border-blue-600',
        isError.value
        ? 'border-[var(--jupiter-danger-border)] focus-within:border-[var(--jupiter-danger-border)]' 
        : 'border-gray-300',
    ]
    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    return [
        'peer w-full focus:outline-none bg-transparent',
        props.modelValue ? 'placeholder:opacity-0' : props.label ? 'placeholder:opacity-0 focus:placeholder:opacity-100' : 'opacity-100',
        props.variant === 'filled' ? 'pt-4 pb-1' : '',
        props.variant === 'outlined' ? 'pt-4 pb-1.5' : '',
        props.variant === 'underlined' ? 'pt-2.5 pb-1' : '',        
    ]
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(isError.value) base.push('text-[var(--jupiter-danger-text)]')
    if(!isError.value) base.push('text-gray-500 peer-read-only:peer-focus:text-gray-900 peer-focus:text-blue-600')

    if(props.variant === 'filled') base.push(
        '-translate-y-4 top-4 z-10 peer-focus:-translate-y-4', 
        !props.modelValue && !data.inputText
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 z-10 peer-focus:-translate-y-4', 
        !props.modelValue && !data.inputText
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 z-10 peer-focus:left-0 peer-focus:-translate-y-5', 
        !props.modelValue && !data.inputText
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0')
    return base
})

const dropdownListItems = computed(() => {
    if (!props.items) return []
    if (!data.inputText) return props.items
    return props.items.filter((item)=>props.filter(item, data.inputText))
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
    return props.clearable && (data.inputText!=='' || Object.keys(selectionItem.value).length) && !props.readonly && !props.disabled
})

const menuIconDisplay = computed(() => {
    return !props.readonly && !props.disabled
})

const selectionSlotDisplay = computed(() => {
    if (!props.modelValue) return false
    if(!props.items) return false
    if (props.items.length === 0) return false 
    return props.itemValue ? Object.keys(selectionItem).length : selectionItem.value!==''
})

const liClass= (item:any) => {
    if(props.itemValue) return item[props.itemValue]==selectionItem.value[props.itemValue]?'bg-blue-50 text-blue-700':''
    return item == selectionItem.value ? 'bg-blue-50 text-blue-700':''
}

const selectItem = (option: any) => {
    if(props.itemValue) emits('update:modelValue', option[props.itemValue])
    if(!props.itemValue) emits('update:modelValue', option)
    data.isActive = false
    data.inputText = ''
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
<div @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative grid grid-cols-[auto_1fr_auto] gap-y-1">
    <div v-show="prependIcon" class="text-lg col-start-1 pt-4 pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="text-gray-500 cursor-pointer" />
    </div>
    <div :class="fieldClass">
        <div v-show="prependInnerIcon" class="pt-2 pr-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>
        <div class="relative w-full flex">
            <div v-if="selectionSlotDisplay" class="pb-1 pt-4 whitespace-nowrap group-read-only:text-gray-500 group-disabled:text-gray-500">
                <slot name="selection" :item="selectionItem">
                    {{ typeof selectionItem === "object" ? selectionItem[itemValue] : selectionItem }}
                </slot>
            </div>
            <input
                v-model="data.inputText"
                v-bind="$attrs"
                @focus="openDropdownList"
                @blur="closeDropdownList"
                @keyup.delete="clear"
                type="text"
                :id="id"
                :name="name"
                :readonly="readonly"
                :disabled="disabled"
                :placeholder="placeholder"
                :class="inputClass"
                autocomplete="off"
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
        <div v-show="menuIconDisplay" class="pt-2">
            <c-svg-icon :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" :class="isError ? 'text-[var(--jupiter-danger-text)]':'text-gray-500'"/>
        </div>
        <div v-show="appendInnerIcon" class="pt-2 pl-1 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="text-gray-500 cursor-pointer" />
        </div>

        <div v-show="data.isActive" class="absolute left-0 top-full pt-0.5 z-50 w-full rounded peer-read-only:hidden">
            <ul class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
                <template v-if="dropdownListItems.length > 0">
                    <li v-for="(item,index) in dropdownListItems" :key="index" @click.stop="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                    <slot name="item" :item="item" :index="index">
                        {{ typeof item === "object" ? item[itemValue] : item }}
                    </slot>
                </li>
                </template>
                <li v-if="dropdownListItems.length === 0" @click="data.isActive=false" class="p-2 min-w-full text-xs text-gray-500">
                    <slot name="empty">
                        一件もデータがありません
                    </slot>
                </li>
            </ul>
        </div>
    </div>
    <div v-show="appendIcon" class="text-lg col-start-3 pt-4 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="text-gray-500 cursor-pointer" />
    </div>
    <div v-if="isError" class="text-xs text-[var(--jupiter-danger-text)] pt-1 col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
</div>
</template>