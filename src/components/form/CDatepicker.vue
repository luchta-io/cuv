<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { mdiCalendar, mdiClose } from '@mdi/js';
import { ja } from 'date-fns/locale';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import type { DatePickerInstance } from "@vuepic/vue-datepicker"
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import CChip from "@/components/containment/CChip.vue";

const props = withDefaults(defineProps<{
    appendIcon?: string
    appendInnerIcon?: string
    autoApply?: boolean
    cancelText?: string
    clearable?: boolean
    disabled?: boolean
    disabledDates?: Date[] | string[] | ((date: Date) => boolean)
    enableSeconds?: boolean
    enableTimePicker?: boolean
    error?: boolean
    errorMessage?: string|string[]
    format?: string|((params: Date) => string)
    id?: string
    label?: string
    maxErrors?: string|number
    modelValue?: any
    monthPicker?: boolean
    multiDates?: boolean
    name?: string
    placeholder?: string
    prependIcon?: string
    prependInnerIcon?: string
    readonly?: boolean
    selectText?: string
    textInput?: boolean
    timePicker?: boolean
    timezone?: string
    variant?: 'filled'|'outlined'|'underlined'
    weekStart?: number | string
    yearPicker?: boolean
}>(), {
    autoApply: true,
    clearable: false,
    disabled:false,
    enableSeconds: false,
    enableTimePicker: false,
    error: false,
    errorMessage: '',
    format: 'yyyy-MM-dd',
    label: '',
    modelValue: '',
    monthPicker: false,
    multiDates: false,
    placeholder: '',
    prependInnerIcon: mdiCalendar,
    readonly: false,
    textInput: true,
    timePicker: false,
    timezone: 'Asia/Tokyo',
    variant: 'filled',
    weekStart: 1,
    yearPicker: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'click:append'): void
    (e: 'click:prepend'): void
    (e: 'click:appendInner'): void
    (e: 'click:prependInner'): void
}>()

const componentRef = ref<HTMLElement>()
const fieldEl = ref<HTMLElement>()
const datepickerRef = ref<DatePickerInstance>()
const inputRef = ref<HTMLElement>()

const data: {
    isFocus: boolean
} = reactive({
    isFocus: false,
})

const dateValue = computed({
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
        'peer relative grid items-center col-start-2 appearance-none focus:outline-none focus:ring-0 opacity-100',
    ]
    if(isError.value) base.push('border-[var(--cuv-danger-border)] focus-within:border-[var(--cuv-danger-outline-focus)]')
    if(!isError.value) base.push('focus-within:border-blue-600 border-gray-300')
    if(data.isFocus && !isError.value) base.push('border-blue-600')

    if(props.variant === 'filled') base.push('min-h-[2.7rem] rounded-t-lg rounded-b-none px-2.5 bg-gray-50 border-0 border-b-2')
    if(props.variant === 'outlined') base.push('min-h-[2.8rem] px-2.5 bg-transparent rounded-lg border')
    if(props.variant === 'underlined') base.push('min-h-[2.3rem] rounded-none px-0 bg-transparent border-0 border-b-2')

    return base
})

const inputContainerClass = computed(() => {
    return [
        'flex flex-nowrap',
        props.variant === 'filled' && !props.label ? 'py-2.5' : '',
        props.variant === 'outlined' && !props.label ? 'py-2.5' : '',
        props.variant === 'underlined' && !props.label ? 'pt-4 pb-1' : '',   
    ]
})

const inputClass = computed(() => {
    return [
        'peer text-gray-900 focus:outline-none focus:ring-0 bg-transparent opacity-100 disabled:text-gray-500 w-full',
        'flex flex-nowrap',
        props.modelValue ? 'placeholder:opacity-0' : props.label ? 'placeholder:opacity-0 focus:placeholder:opacity-100' : 'opacity-100',
        props.label ? 'pt-4 pb-1' : '',
        dateValue.value !== '' && props.modelValue ? 'w-4' : 'w-full',
    ]
})

const labelClass = computed(() => {
    const base = [
        'absolute left-0 text-sm duration-300 transform origin-[0] whitespace-nowrap overflow-hidden pointer-events-none',
        props.variant === 'underlined' && !props.modelValue ? 'top-4' : 'top-3'
    ]
    if (!props.modelValue && data.isFocus) base.push('scale-75 -translate-y-3')
    if (!props.modelValue && !data.isFocus) base.push('scale-100 translate-y-0')
    if (props.modelValue) base.push('scale-75 -translate-y-3')
    if (isError.value) base.push('text-[var(--cuv-danger-text)]')
    if (!isError.value && !data.isFocus) base.push('text-gray-500')
    if (!isError.value && data.isFocus) base.push('text-blue-600')

    return base
})

const iconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push('pt-0')
    if ( props.variant === 'outlined' ) base.push('pt-0')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const innerIconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push('pt-0')
    if ( props.variant === 'outlined' ) base.push('pt-0')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const clearIconClass = computed(() => {
    const base = ['pl-2']
    if ( props.variant === 'filled' ) base.push(props.label ? 'pt-2' : '')
    if ( props.variant === 'outlined' ) base.push(props.label ? 'pt-2' : '')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const clearIconDisplay = computed(() => {
    if(!props.clearable) return false
    if(props.readonly) return false
    if(props.disabled) return false
    return props.modelValue 
})

const getWeekStart = computed(():any => {
    if (props.weekStart) return props.weekStart
    return 1
})

const getFormat = computed(():any => {
    if (props.format) return props.format
    return undefined
})

const focus = () => {
    data.isFocus = true
}

const blur = () => {
    data.isFocus = false
}

const clear = () => {
    if(dateValue.value) dateValue.value = ''
    data.isFocus = false
}

const opened = () => {
    focus()
    inputFocus()
}

const closed = () => {
    blur()
    inputBlur()
}

const datepickerBlur = () => {
    blur()
}

const inputFocus = () => {
    if (!inputRef.value) return
    inputRef.value.focus()
}

const inputBlur = () => {
    if (!inputRef.value) return
    inputRef.value.blur()
}

const clickPrependInnerIcon = () => {
    emits('click:prependInner')
    focus()
    inputFocus()
    if (!datepickerRef.value) return
    datepickerRef.value.openMenu()
}
</script>

<template>
<div ref="componentRef" class="relative grid grid-cols-[auto_1fr_auto] gap-y-1 cursor-text">
    <div v-show="prependIcon" :class="iconClass" class="text-lg col-start-1 my-auto pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="[fieldClass, $style['c-datepicker-field']]" ref="fieldEl">
        <div v-show="prependInnerIcon" :class="[$style['c-datepicker-field__prepend'], innerIconClass]" class="my-auto pr-2 text-lg">
            <CSvgIcon :icon="prependInnerIcon" @click="clickPrependInnerIcon" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div :class="$style['c-datepicker-field__field']" class="relative w-full flex">
            <div class="flex overflow-x-auto w-full">
                <VueDatePicker 
                :model-value="modelValue"
                @update:model-value="emits('update:modelValue', $event)"
                @blur="datepickerBlur"
                @open="opened"
                @closed="closed"
                :auto-apply="autoApply"
                :format-locale="ja"
                :multi-dates="multiDates"
                :year-picker="yearPicker"
                :month-picker="monthPicker"
                :time-picker="timePicker"
                :enable-time-picker="enableTimePicker"
                :enable-seconds="enableSeconds"
                :readonly="readonly"
                :disabled="disabled"
                :placeholder="placeholder"
                :format="getFormat"
                :text-input="textInput"
                :disabled-dates="disabledDates"
                :week-start="getWeekStart"
                :timezone="timezone"
                :select-text="selectText"
                :cancel-text="cancelText"
                :teleport="true"
                :clearable="false"
                hide-input-icon
                ref="datepickerRef"
                :menu-class-name="$style['c-datepicker-field__menu']"
                >
                    <template #dp-input="{ value, onInput, onEnter, onTab }">
                        <div :class="inputContainerClass">
                            <slot name="input" :value="value" :onInput="onInput" :onEnter="onEnter" :onTab="onTab">
                                <div v-if="!textInput && !multiDates" :class="inputClass">
                                    {{ value }}
                                </div>
                                <div v-show="!textInput && multiDates && value !== ''" :class="inputClass" class="flex gap-2" >
                                    <CChip v-for="item in value.split('; ')" :key="item" color="dark" density="comfortable">
                                        {{ item }}
                                    </CChip>
                                </div>
                                <input 
                                :value="textInput ? value : ''"
                                @input="onInput"
                                @focus="focus"
                                @blur="blur"
                                @keydown.enter="onEnter"
                                @keydown.tab="onTab"
                                :id="id"
                                :name="name"
                                :readonly="!props.textInput"
                                :disabled="disabled"
                                :placeholder="placeholder"
                                :class="inputClass"
                                autocomplete="off"
                                ref="inputRef"
                                >
                            </slot>
                        </div>
                    </template>
                </VueDatePicker>
                <label
                    :class="labelClass"
                    >
                    {{ label }}
                </label>
            </div>
        </div>
        <div v-show="clearIconDisplay" :class="[$style['c-datepicker-field__clear'], clearIconClass]">
            <c-svg-icon :icon="mdiClose" @click="clear" class="text-gray-500 cursor-pointer" />
        </div>
        <div v-show="appendInnerIcon" :class="[$style['c-datepicker-field__append'], innerIconClass]" class="my-auto pl-1 text-lg">
            <c-svg-icon :icon="appendInnerIcon" @click="$emit('click:appendInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
    </div>
    <div v-show="appendIcon" :class="iconClass" class="my-auto text-lg col-start-3 pt-1.5 pl-1">
        <c-svg-icon :icon="appendIcon" @click="$emit('click:append')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div v-if="isError" class="text-xs text-[var(--cuv-danger-text)] pt-1 col-start-2">
        <p v-for="(msg,index) in formatedErrorMessage" :key="index">
            {{ msg }}
        </p>
    </div>
</div>
</template>
<style module>
.c-datepicker-field {
    grid-template-areas: "prepend-inner field clear append-inner";
    grid-template-columns: min-content minmax(0,1fr) min-content min-content min-content;
}
.c-datepicker-field__prepend {
    grid-area: prepend-inner;
}
.c-datepicker-field__field {
    grid-area: field;
}
.c-datepicker-field__clear {
    grid-area: clear;
}
.c-datepicker-field__menu {
    white-space: nowrap;
}
.c-datepicker-field__append {
    grid-area: append-inner;
}
</style>