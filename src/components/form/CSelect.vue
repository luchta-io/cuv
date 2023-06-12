<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue';
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import CCheckbox from '@/components/form/CCheckbox.vue';
import CCluster from '@/components/layout/CCluster.vue';

const slots = useSlots()

const props = withDefaults(defineProps<{
    modelValue: any
    items: Array<any>
    itemValue?: string
    label?:string
    variant?: 'filled'|'outlined'|'underlined'
    id?:string
    name?:string
    placeholder?: string
    multiple?: boolean
    readonly?: boolean
    disabled?: boolean
    error?: boolean
    errorMessage?: string|string[]
    maxErrors?: string|number
    clearable?: boolean
    prependIcon?: string
    appendIcon?: string
    prependInnerIcon?: string
    appendInnerIcon?: string
}>(), {
    itemValue: 'value',
    label: '',
    variant: 'filled',
    multiple: false,
    readonly: false,
    disabled: false,
    error: false,
    errorMessage: '',
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
    (e: 'click:prepend'): void
    (e: 'click:append'): void
    (e: 'click:prependInner'): void
    (e: 'click:appendInner'): void
}>()

const changeableModelValue = computed({
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
        'peer relative col-start-2 flex items-center w-full appearance-none focus:outline-none focus:ring-0 opacity-100',
    ]
    if(isError.value) base.push('border-[var(--cuv-danger-border)] focus-within:border-[var(--cuv-danger-outline-focus)]')
    if(!isError.value && props.readonly) base.push('focus-within:border-gray-900 border-gray-300') 
    if(!isError.value && !props.readonly) base.push('focus-within:border-blue-600 border-gray-300')
    if(props.variant === 'filled') base.push('min-h-[2.7rem] rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('min-h-[2.8rem] px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('min-h-[2.3rem] rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    const base = [
        'peer w-full focus:outline-none bg-transparent',
    ]
    if(props.modelValue || Array.isArray(props.modelValue)) base.push('placeholder:opacity-0')
    if(!props.label && (!props.modelValue || !props.modelValue.length)) base.push('placeholder:opacity-100')
    if(props.label && (!props.modelValue || !props.modelValue.length)) base.push('placeholder:opacity-0 focus:placeholder:opacity-100')
    if(props.variant === 'filled') base.push('pt-4 pb-1')
    if(props.variant === 'outlined') base.push('pt-4 pb-1.5')
    if(props.variant === 'underlined') base.push('pt-2.5 pb-1')
    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute text-sm duration-300 transform origin-[0] peer-focus:scale-75 whitespace-nowrap overflow-hidden pointer-events-none',
    ]
    if(isError.value ) base.push('text-[var(--cuv-danger-text)]')
    if(!isError.value ) base.push('text-gray-500 peer-focus:text-blue-600')
    if(props.variant === 'filled') base.push(
        '-translate-y-4 top-4 peer-focus:-translate-y-4',
        !props.modelValue || !props.modelValue.length 
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'
        )
    if(props.variant === 'outlined') base.push(
        '-translate-y-4 top-4 peer-focus:-translate-y-4',
        !props.modelValue || !props.modelValue.length 
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0'
        )
    if(props.variant === 'underlined') base.push(
        '-translate-y-5 top-3 peer-focus:left-0 peer-focus:-translate-y-5',
        !props.modelValue || !props.modelValue.length 
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75' : 'scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'
        )
    if(props.readonly) base.push(!props.modelValue || !props.modelValue.length ? 'peer-focus:translate-y-0 peer-focus:!scale-100 peer-focus:text-gray-900' : 'peer-focus:text-gray-900')

    return base
})

const selectionClass = computed(() => {
    return [
        'pb-1 pr-4 whitespace-nowrap cursor-pointer',
        props.variant === 'filled' ? 'pt-4' : '',
        props.variant === 'outlined' ? 'pt-4' : '',
        props.variant === 'underlined' ? 'pt-2.5' : '',
        props.readonly || props.disabled ? 'text-gray-500' : 'text-gray-900',
    ]
})

const selectionItem = computed((): any[] => {
    console.log(typeof props.modelValue)
    if(props.multiple && Array.isArray(props.modelValue)) {
        if(props.items[0][props.itemValue]) return props.items.filter(item => props.modelValue.includes(item[props.itemValue]))
        return props.items.filter(item => props.modelValue.includes(item))
    }
    if(!props.items[0][props.itemValue] && props.modelValue) return props.items.filter(item =>{ return item == props.modelValue})[0]
    if(!props.items[0][props.itemValue] && !props.modelValue) return []
    if(props.modelValue) return props.items.filter(item => {
        if(props.items[0][props.itemValue]) return item[props.itemValue] == props.modelValue
    })[0]

    return []
})

const initSelectionItem = computed(() => {
    if(typeof selectionItem.value === "object"&&!Array.isArray(selectionItem.value)) return selectionItem.value[props.itemValue]
    return selectionItem.value
})

const clearIconDisplay = computed(() => {
    if(!props.clearable) return false
    if(props.readonly) return false
    if(props.disabled) return false
    if(props.multiple && !props.modelValue.length) return false
    return props.modelValue 
})

const menuIconDisplay = computed(() => {
    return !props.readonly && !props.disabled
})

const selectionSlotDisplay = computed(() => {
    if (!props.modelValue) return false
    if(!props.items) return false
    if (props.items.length === 0) return false 
    return props.items[0][props.itemValue] ? Object.keys(selectionItem.value).length : selectionItem.value.length
})

const liClass= (item:any) => {
    if(Array.isArray(props.modelValue)) {
        if(props.multiple && props.items[0][props.itemValue]) return props.modelValue.includes(item[props.itemValue]) ? 'bg-blue-50 text-blue-700':''
        if(props.multiple && !props.items[0][props.itemValue]) return props.modelValue.includes(item) ? 'bg-blue-50 text-blue-700':''
    }
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
    if(props.disabled) return
    data.isActive = true
}

const closeDropdownList = () => {
    if (data.isHover) return
    data.isActive = false
}

const toggleDropdownList = () => {
    if(props.readonly) return
    if(props.disabled) return
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
<div @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative w-auto grid grid-cols-[auto_1fr_auto] gap-y-1">
    <div v-show="prependIcon" class="my-auto text-lg col-start-1 pt-1.5 pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="fieldClass">
        <div v-show="prependInnerIcon" class="my-auto pt-2 pr-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div class="relative w-full flex">
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
            :id="id"
            :name="name"
            :disabled="disabled"
            :placeholder="placeholder"
            readonly
            :class="inputClass">
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
            <c-svg-icon :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" :class="isError ? 'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div v-show="appendInnerIcon" class="my-auto pt-2 pl-1 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div v-show="data.isActive" class="absolute left-0 top-full pt-0.5 z-50 w-full rounded">
            <ul class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
                <template v-if="items.length > 0">
                    <li v-if="slots.prependItem" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                        <slot name="prependItem"/>
                    </li>
                    <li v-for="(item, index) in items" :key="index" @click="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer hover:bg-gray-100">
                        <c-cluster align="center" space="0">
                            <c-checkbox v-if="multiple" v-model="changeableModelValue" :value="items[0][itemValue]?item[itemValue]:item"/>
                            <div class="break-all" :class="multiple?'max-w-[calc(100%-40px)]':''">
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
    </div>
    <div v-show="appendIcon" class="my-auto text-lg col-start-3 pt-1.5 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div v-if="isError" class="text-xs text-[var(--cuv-danger-text)] pt-1 col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
</div>

</template>
