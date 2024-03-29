<script lang="ts">
export default {
    name: 'CAutocomplete',
}
</script>

<script setup lang="ts">
import { computed, reactive,  ref,  useSlots,  watchEffect } from 'vue'
import { getScrollParent } from '../../composables/scroll';
import { mdiMenuDown, mdiMenuUp, mdiClose } from '@mdi/js';
import CSvgIcon from '../../components/images/CSvgIcon.vue';

const slots = useSlots()

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
        'peer relative grid items-center col-start-2 appearance-none focus:outline-none focus:ring-0 opacity-100',
    ]
    if(isError.value) base.push('border-[var(--cuv-danger-border)] focus-within:border-[var(--cuv-danger-outline-focus)]')
    if(!isError.value) base.push('focus-within:border-blue-600 border-gray-300')

    if(props.variant === 'filled') base.push('rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputClass = computed(() => {
    return [
        'peer text-gray-900 focus:outline-none focus:ring-0 bg-transparent opacity-100',
        props.modelValue ? 'placeholder:opacity-0' : props.label || slots.label ? 'placeholder:opacity-0 focus:placeholder:opacity-100' : 'opacity-100',
        props.label || slots.label ? 'pt-4 pb-1' : '',
        props.variant === 'filled' && !props.label && !slots.label ? 'py-2.5' : '',
        props.variant === 'outlined' && !props.label && !slots.label  ? 'py-2.5' : '',
        props.variant === 'underlined' && !props.label && !slots.label ? 'pt-4 pb-1' : '',   
        !data.inputText.length && props.modelValue ? 'w-4' : 'w-full',
    ]
})

const labelClass = computed(() => {
    const base = [
        'absolute left-0 text-sm duration-300 transform origin-[0] whitespace-nowrap overflow-hidden pointer-events-none',
        'peer-focus:scale-75',
        props.variant === 'underlined' && !props.modelValue && !data.inputText ? 'top-4 peer-focus:-translate-y-4' : 'top-3 peer-focus:-translate-y-3'
    ]
    if (!props.modelValue && !data.inputText) base.push('scale-100 translate-y-0')
    if (props.modelValue || data.inputText) base.push('scale-75 -translate-y-3')
    if(isError.value) base.push('text-[var(--cuv-danger-text)]')
    if(!isError.value) base.push('text-gray-500 peer-focus:text-blue-600')

    return base
})

const iconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push('pt-0')
    if ( props.variant === 'outlined' ) base.push('pt-0')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const selectionClass = computed(() => {
    return [
        'whitespace-nowrap',
        props.disabled ? 'text-gray-500' : 'text-gray-900',
        props.label || slots.label ? 'pt-4 pb-1' : '',
        props.variant === 'filled' && !props.label && !slots.label ? 'py-2.5' : '',
        props.variant === 'outlined' && !props.label && !slots.label ? 'py-2.5' : '',
        props.variant === 'underlined' && !props.label && !slots.label ? 'pt-4 pb-1' : '',        
    ]
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

const focus = () => {
    if ( !inputRef.value ) return
    inputRef.value.focus()
}

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
    if(props.modelValue) emits('update:modelValue', '')
    if(data.inputText) data.inputText = ''
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
    if(data.inputText) emits('update:modelValue', '')
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
<div ref="componentRef" @mouseover="data.isHover = true" @mouseleave="data.isHover = false" @click="focus" class="relative grid grid-cols-[auto_1fr_auto] gap-y-1 cursor-text">
    <div v-show="prependIcon" :class="iconClass" class="text-lg col-start-1 my-auto pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="[fieldClass, $style['c-autocomplete-field']]" ref="fieldEl" :style="{'min-width': `${fieldEl?.clientWidth}px`}">
        <div v-show="prependInnerIcon" :class="[$style['c-autocomplete-field__prepend'], iconClass]" class="my-auto pr-2 text-lg">
            <c-svg-icon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div :class="$style['c-autocomplete-field__field']" class="relative w-full flex">
            <div class="flex overflow-x-auto w-full">
                <div v-if="selectionSlotDisplay" @click="toggleDropdownList" :class="selectionClass">
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
                    ref="inputRef"
                />
                <label
                    :class="labelClass"
                    >
                    <slot name="label">
                        {{ label }}
                    </slot>
                </label>
            </div>
        </div>
        <div v-show="clearIconDisplay" :class="[$style['c-autocomplete-field__clear'], clearIconClass]">
            <c-svg-icon :icon="mdiClose" @click="clear" class="text-gray-500 cursor-pointer" />
        </div>
        <div v-show="menuIconDisplay" :class="[$style['c-autocomplete-field__menu'], menuIconClass]">
            <c-svg-icon :icon="data.isActive ? mdiMenuUp : mdiMenuDown" @click="toggleDropdownList" :class="isError ? 'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div v-show="appendInnerIcon" :class="[$style['c-autocomplete-field__append'], iconClass]" class="my-auto pl-1 text-lg">
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
</div>
<Teleport to="body">
    <div v-if="data.isActive" @mouseover="optionsMouseOver()" @mouseleave="data.isHover=false" :style="{width:optionsPosition.width, top:optionsPosition.top, left:optionsPosition.left}"  class="absolute pt-0.5 z-50 rounded peer-read-only:hidden">
        <ul ref="optionsRef" class="overflow-auto divide-y-2 divide-gray-100 rounded-b bg-white shadow-lg z-50 max-h-60">
            <template v-if="dropdownListItems.length > 0">
                <li v-for="(item,index) in dropdownListItems" :key="index" @click.stop="selectItem(item)" :class="liClass(item)" class="py-2 px-3 min-w-full text-gray-700 cursor-pointer break-all hover:bg-gray-100">
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
</Teleport>
</template>

<style module>
.c-autocomplete-field {
    grid-template-areas: "prepend-inner field clear menu append-inner";
    grid-template-columns: min-content minmax(0,1fr) min-content min-content min-content;
}

.c-autocomplete-field__prepend {
    grid-area: prepend-inner;
}
.c-autocomplete-field__field {
    grid-area: field;
}
.c-autocomplete-field__clear {
    grid-area: clear;
}
.c-autocomplete-field__menu {
    grid-area: menu;
}
.c-autocomplete-field__append {
    grid-area: append-inner;
}
</style>