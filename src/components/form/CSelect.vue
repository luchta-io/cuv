<script lang="ts">
export default {
    name: 'CSelect',
}
</script>

<script setup lang="ts">
import { computed, reactive, ref, useSlots, watchEffect } from 'vue';
import { getScrollParent } from '../../composables/scroll';
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '../../components/images/CSvgIcon.vue';
import CCheckbox from '../../components/form/CCheckbox.vue';
import CCluster from '../../components/layout/CCluster.vue';

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

const emits = defineEmits<{
    (e: 'update:modelValue', value: any|Array<any>): void
    (e: 'click:prepend'): void
    (e: 'click:append'): void
    (e: 'click:prependInner'): void
    (e: 'click:appendInner'): void
}>()

const data: {
    isActive: boolean
    isHover: boolean
} = reactive({
    isActive: false,
    isHover: false,
})

const componentRef = ref<HTMLElement>()
const fieldEl = ref<HTMLElement>()
const inputRef = ref<HTMLElement>()
const optionsRef = ref<HTMLElement>()

const optionsPosition: {
    top: string
    left: string
    width: string
} = reactive({
    top: '',
    left: '',
    width: '',
})

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
        'peer relative grid col-start-2 items-center w-full appearance-none focus:outline-none focus:ring-0 opacity-100',
    ]
    if(isError.value) base.push('border-[var(--cuv-danger-border)] focus-within:border-[var(--cuv-danger-outline-focus)]')
    if(!isError.value) base.push('focus-within:border-blue-600 border-gray-300')
    if(props.variant === 'filled') base.push('min-h-[2.7rem] rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('min-h-[2.8rem] px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('min-h-[2.3rem] rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    const base = [
        'peer w-full focus:outline-none bg-transparent cursor-pointer',
    ]
    if(props.modelValue || Array.isArray(props.modelValue)) base.push('placeholder:opacity-0')
    if(!props.label && !slots.label && (!props.modelValue || !props.modelValue.length)) base.push('placeholder:opacity-100')
    if((props.label || slots.label) && (!props.modelValue || !props.modelValue.length)) base.push('placeholder:opacity-0 focus:placeholder:opacity-100')
    if(props.variant === 'filled') base.push(props.label || slots.label ? 'pt-4 pb-1' : 'py-2.5')
    if(props.variant === 'outlined') base.push(props.label || slots.label ? 'pt-4 pb-1' : 'py-2.5')
    if(props.variant === 'underlined') base.push('pt-4 pb-1')
    return base
})

const labelClass = computed(() => {
    const base = [
        'absolute left-0 text-sm duration-300 transform origin-[0] whitespace-nowrap overflow-hidden pointer-events-none',
        'peer-focus:scale-75 peer-focus:-translate-y-3',
        props.variant === 'underlined' && (!props.modelValue || !props.modelValue.length) ? 'top-4' : 'top-3',
        !props.modelValue || !props.modelValue.length 
        ? 'scale-100 translate-y-0' 
        : props.placeholder ? 'scale-75 -translate-y-3' : 'scale-75 -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0'
    ]
    if(isError.value ) base.push('text-[var(--cuv-danger-text)]')
    if(!isError.value ) base.push('text-gray-500 peer-focus:text-blue-600')

    return base
})

const selectionClass = computed(() => {
    return [
        'whitespace-nowrap',
        props.label || slots.label ? 'pt-4 pb-1' : '',
        props.variant === 'filled' && !props.label && !slots.label ? 'py-2.5' : '',
        props.variant === 'outlined' && !props.label && !slots.label ? 'py-2.5' : '',
        props.variant === 'underlined' && !props.label && !slots.label ? 'pt-4 pb-1' : '',        
        props.disabled ? 'text-gray-500' : 'text-gray-900',
    ]
})

const iconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push('pt-0')
    if ( props.variant === 'outlined' ) base.push('pt-0')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const clearIconClass = computed(() => {
    const base = ['pl-2']
    if ( props.variant === 'filled' ) base.push(props.label || slots.label ? 'pt-2' : '')
    if ( props.variant === 'outlined' ) base.push(props.label || slots.label ? 'pt-2' : '')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const menuIconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push(props.label || slots.label ? 'pt-2' : '')
    if ( props.variant === 'outlined' ) base.push(props.label || slots.label ? 'pt-2' : '')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const selectionItem = computed((): any[] => {
    if(props.multiple && Array.isArray(props.modelValue)) {
        if(props.items[0][props.itemValue]) return props.items.filter(item => props.modelValue.includes(item[props.itemValue]))
        return props.items.filter(item => props.modelValue.includes(item))
    }
    if(!props.items[0][props.itemValue] && props.modelValue) return props.items.filter(item =>{ return item == props.modelValue})
    if(!props.items[0][props.itemValue] && !props.modelValue) return []
    if(props.modelValue) return props.items.filter(item => {
        if(props.items[0][props.itemValue]) return item[props.itemValue] == props.modelValue
    })

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
    return props.items[0][props.itemValue] ? Object.keys(selectionItem.value).length : selectionItem.value.length>0
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

const optionsMouseOver = () => {
    data.isHover = true
    if ( !inputRef.value ) return
    inputRef.value.focus()
}

const optionClass = () => {
    if ( !fieldEl.value ) return
    if ( typeof window == 'undefined' ) return
    if ( !optionsRef.value ) return
    const allElementHeight = fieldEl.value.getBoundingClientRect().top + fieldEl.value.clientHeight + optionsRef.value.clientHeight
    if ( allElementHeight >= window.innerHeight ) optionsPosition.top = fieldEl.value.getBoundingClientRect().top - optionsRef.value.clientHeight + window.scrollY - 10 + 'px'
    else optionsPosition.top = fieldEl.value.getBoundingClientRect().top + fieldEl.value.clientHeight + window.scrollY + 1 + 'px'
    optionsPosition.left = fieldEl.value.getBoundingClientRect().left+'px'
    optionsPosition.width = fieldEl.value.clientWidth+'px'
}

watchEffect(() => {
    if ( data.isActive ) {
        optionClass()
        const scrollParent = getScrollParent(componentRef.value)
        scrollParent.onscroll = () => {
            data.isActive = false
            if ( !inputRef.value ) return
            inputRef.value.blur()
        }
    }
})

</script>

<template>
<div ref="componentRef" @mouseover="data.isHover = true" @mouseleave="data.isHover = false" class="relative w-auto grid grid-cols-[auto_1fr_auto] gap-y-1 cursor-pointer">
    <div v-show="prependIcon" :class="iconClass" class="my-auto text-lg col-start-1 pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="[fieldClass, $style['c-select-field']]" ref="fieldEl" :style="{'min-width': `${fieldEl?.clientWidth}px`}">
        <div v-show="prependInnerIcon" :class="[$style['c-select-field__prepend'], iconClass]" class="my-auto pr-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div :class="$style['c-select-field__field']" class="relative w-full flex">
            <div class="flex overflow-x-auto w-full">
                <div v-show="selectionSlotDisplay && Array.isArray(selectionItem)" @click="toggleDropdownList" :class="selectionClass">
                    <span v-for="(item, index) in selectionItem" :key="index">
                        <slot name="selection" :item="item" :index="index">
                            {{ items[0][itemValue]?item[itemValue]:item }}{{ index!==selectionItem.length-1?', ':'' }}
                        </slot>
                    </span>
                </div>
                <div v-show="selectionSlotDisplay && !Array.isArray(selectionItem)" @click="toggleDropdownList" :class="selectionClass">
                    <template v-for="(item, index) in selectionItem" :key="index">
                        <slot name="selection" :item="item" :index="0">
                            {{ initSelectionItem }}
                        </slot>
                    </template>
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
                ref="inputRef"
                :class="inputClass">
                <label 
                    :class="labelClass"
                >
                    <slot name="label">
                        {{ label }}
                    </slot>
                </label>
            </div>
        </div>
        <div v-show="clearIconDisplay" :class="[$style['c-select-field__clear'], clearIconClass]">
            <c-svg-icon :icon="mdiClose" @click="clear" class="text-gray-500 cursor-pointer" />
        </div>
        <div v-show="menuIconDisplay" :class="[$style['c-select-field__menu'], menuIconClass]">
            <c-svg-icon :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" :class="isError ? 'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div v-show="appendInnerIcon" :class="[$style['c-select-field__append'], iconClass]" class="my-auto pl-1 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
    </div>
    <div v-show="appendIcon" :class="iconClass" class="my-auto text-lg col-start-3 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div v-if="isError" class="text-xs text-[var(--cuv-danger-text)] pt-1 col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
    <Teleport to="body">
        <div v-if="data.isActive" @mouseover="optionsMouseOver()" @mouseleave="data.isHover=false" :style="{width:optionsPosition.width, top:optionsPosition.top, left:optionsPosition.left}" class="absolute pt-0.5 z-50 rounded">
            <ul ref="optionsRef" class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
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
    </Teleport>
</div>
</template>

<style module>
.c-select-field {
    grid-template-areas: "prepend-inner field clear menu append-inner";
    grid-template-columns: min-content minmax(0,1fr) min-content min-content min-content;
}
.c-select-field__prepend {
    grid-area: prepend-inner;
}
.c-select-field__field {
    grid-area: field;
}
.c-select-field__clear {
    grid-area: clear;
}
.c-select-field__menu {
    grid-area: menu;
}
.c-select-field__append {
    grid-area: append-inner;
}
</style>