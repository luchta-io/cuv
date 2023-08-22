<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue'
import { getScrollParent } from '@/composables/scroll';
import { mdiCalendar, mdiClose } from '@mdi/js';
import { ja } from 'date-fns/locale';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import CSvgIcon from '@/components/images/CSvgIcon.vue';

type FormatterType = {
    date?: string,
    month?: string,
}

const props = withDefaults(defineProps<{
    modelValue?: any
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
    formatter?: FormatterType
    autoApply?: boolean
    disableDate?: (date: any) => any
    applyButtonText?: string
    multiDates?: boolean
    monthPicker?: boolean
    timePicker?: boolean
    yearPicker?: boolean
    // timezone?: string
}>(), {
    modelValue: '',
    label: '',
    variant: 'filled',
    readonly: false,
    disabled:false,
    error: false,
    errorMessage: '',
    clearable: false,
    placeholder: '',
    prependInnerIcon: mdiCalendar,
    autoApply: true,
    applyButtonText: '選択',
    multiDates: false,
    monthPicker: false,
    timePicker: false,
    yearPicker: false,
    // timezone: 'Pacific/Midway'

})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'click:append'): void
    (e: 'click:prepend'): void
}>()

const componentRef = ref<HTMLElement>()
const fieldEl = ref<HTMLElement>()
const inputRef = ref<HTMLElement>()

const data: {
    isActive: boolean
    isHover: boolean
    position: {
        top: string
        left: string
    }
} = reactive({
    isActive: false,
    isHover: false,
    position: {
        top: '',
        left: '',
    },
})

const dateValue = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})

// const setFormatter = computed(() => {
//     if ( props.formatter ) return props.formatter
//     return {
//         date: 'YYYY-MM-DD HH:mm:ss',
//         month: 'MMM'
//     }
// })

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
        'peer text-gray-900 focus:outline-none focus:ring-0 bg-transparent opacity-100 disabled:text-gray-500',
        props.modelValue ? 'placeholder:opacity-0' : props.label ? 'placeholder:opacity-0 focus:placeholder:opacity-100' : 'opacity-100',
        props.label ? 'pt-4 pb-1' : '',
        props.variant === 'filled' && !props.label ? 'py-2.5' : '',
        props.variant === 'outlined' && !props.label ? 'py-2.5' : '',
        props.variant === 'underlined' && !props.label ? 'pt-4 pb-1' : '',   
        !dateValue.value.length && props.modelValue ? 'w-4' : 'w-full',
    ]
})

const labelClass = computed(() => {
    const base = [
        'absolute left-0 text-sm duration-300 transform origin-[0] whitespace-nowrap overflow-hidden pointer-events-none',
        'peer-focus:scale-75 -translate-y-4 top-4 peer-focus:-translate-y-4',
    ]
    if (!props.modelValue) base.push('scale-100 translate-y-0')
    if (props.modelValue) base.push('scale-75')
    if(isError.value) base.push('text-[var(--cuv-danger-text)]')
    if(!isError.value) base.push('text-gray-500 peer-focus:text-blue-600')

    return base
})

const iconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push(props.label ? 'pt-1.5' : '')
    if ( props.variant === 'outlined' ) base.push(props.label ? 'pt-1.5' : '')
    if ( props.variant === 'underlined' ) base.push('pt-3')
    return base
})

const innerIconClass = computed(() => {
    const base = []
    if ( props.variant === 'filled' ) base.push(props.label ? 'pt-2' : '')
    if ( props.variant === 'outlined' ) base.push(props.label ? 'pt-2' : '')
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

const focus = () => {
    if ( !inputRef.value ) return
    inputRef.value.focus()
}

const openCalendar = () => {
    if(props.readonly) return 
    if(props.disabled) return
    data.isActive = true
}

const closeCalendar = () => {
    if (data.isHover) return
    data.isActive = false
}

const calendarMouseOver = () => {
    data.isHover = true
    if ( !inputRef.value ) return
    inputRef.value.focus()
}

const clear = () => {
    if(dateValue.value) dateValue.value = ''
}

const getPositionLeft = () => {
    if ( typeof window == 'undefined' ) return
    if ( !fieldEl.value ) return
    const clientRect = fieldEl.value.getBoundingClientRect()
    const x = clientRect.left
    return data.position.left = x + 'px'
}

const getPositionTop = () => {
    if ( typeof window == 'undefined' ) return
    if ( !fieldEl.value ) return
    const clientRect = fieldEl.value.getBoundingClientRect()
    const y = clientRect.top
    const elementHeight = fieldEl.value.clientHeight
    const allElementHeight = y + elementHeight + 400
    if ( allElementHeight >= window.innerHeight ) data.position.top = y - 400 + window.scrollY - 10 + 'px'
    else data.position.top = y + elementHeight + window.scrollY + 1 + 'px'
}

watchEffect(() => {
    if ( data.isActive ) {
        getPositionLeft()
        getPositionTop()
        const scrollParent = getScrollParent(componentRef.value)
        scrollParent.onscroll = () => {
            data.isActive = false
            if ( !inputRef.value ) return
            inputRef.value.blur()
        }
    }
})
const date = ref();
</script>

<template>
    <VueDatePicker v-model="date"></VueDatePicker>
<div ref="componentRef" @mouseover="data.isHover = true" @mouseleave="data.isHover = false" @click="focus" class="relative grid grid-cols-[auto_1fr_auto] gap-y-1 cursor-text">
    <div v-show="prependIcon" :class="iconClass" class="text-lg col-start-1 my-auto pr-1">
        <c-svg-icon :icon="prependIcon" @click="$emit('click:prepend')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
    </div>
    <div :class="[fieldClass, $style['c-datepicker-field']]" ref="fieldEl">
        <div v-show="prependInnerIcon" :class="[$style['c-datepicker-field__prepend'], innerIconClass]" class="my-auto pr-2 text-lg">
            <CSvgIcon :icon="prependInnerIcon" @click="$emit('click:prependInner')" size="medium" class="cursor-pointer" :class="error?'text-[var(--cuv-danger-text)]':'text-gray-500'"/>
        </div>
        <div :class="$style['c-datepicker-field__field']" class="relative w-full flex">
            <div class="flex overflow-x-auto w-full">
                <input
                    v-model="dateValue"
                    v-bind="$attrs"
                    @focus="openCalendar"
                    @blur="closeCalendar"
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
<Teleport to="body">
    <div v-if="data.isActive" @mouseover="calendarMouseOver()" @mouseleave="data.isHover=false" :style="{ top:data.position.top, left:data.position.left}"  class="absolute pt-0.5 z-50 rounded peer-read-only:hidden">
        <!-- <vue-tailwind-datepicker 
        :model-value="modelValue"
        @update:model-value="emits('update:modelValue', $event)"
        @select:month="selectMonth"
        :formatter="setFormatter"
        i18n="ja"
        no-input 
        as-single
        :auto-apply="autoApply"
        :disable-date="disableDate"
        :options="getOptions"
        /> -->
        <VueDatePicker 
        :model-value="modelValue"
        @update:model-value="emits('update:modelValue', $event)"
        :auto-apply="autoApply"
        :format-locale="ja"
        :multi-dates="multiDates"
        :year-picker="yearPicker"
        :month-picker="monthPicker"
        :time-picker="timePicker"
        inline 
        />
    </div>
</Teleport>

</template>
<style module>
.c-datepicker-field {
    grid-template-areas: "prepend-inner field clear menu append-inner";
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
    grid-area: menu;
}
.c-datepicker-field__append {
    grid-area: append-inner;
}
</style>