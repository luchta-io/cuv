<script lang="ts">
export default {
    name: 'CChip',
}
</script>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { mdiCloseCircle } from '@mdi/js';
import { useVariant } from '../../composables/variant'
import CSvgIcon from '../../components/images/CSvgIcon.vue';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    appendIcon?: string,
    closable?: boolean
    closeIcon?: string
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    draggable?: boolean
    elevation?: 'small'|'medium'|'large'
    label?: boolean
    modelValue?: boolean
    prependIcon?: string,
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    text?: string
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
}>(), {
    closable: false,
    closeIcon: mdiCloseCircle,
    color: 'light',
    density: 'default',
    disabled: false,
    draggable: false,
    label: false,
    modelValue: false,
    rounded: 'circle',
    size: 'medium',
    variant: 'tonal',
})

const emits = defineEmits<{
    (e: 'click'): void
    (e: 'click:close'): void
    (e: 'update:modelValue', value: boolean): void
}>()

const data: {
    hidden: boolean
    isSelected: boolean
} = reactive({
    hidden: false,
    isSelected: props.modelValue,
})

const chipClass = computed(() => {
    const base = [
        'inline-flex items-center cursor-default font-normal overflow-hidden relative no-underline whitespace-nowrap align-middle',
        'px-3',
        fixedRounded.value,
        props.color == 'light' && props.variant === 'tonal' && !props.disabled ? '!text-black' : '',
        !props.disabled ? useVariant({variant: props.variant, color: props.color}) : 'bg-gray-100 text-gray-400 cursor-default',
    ]

    if ( props.elevation == 'small' ) base.push('shadow')
    if ( props.elevation == 'medium' ) base.push('shadow-md')
    if ( props.elevation == 'large' ) base.push('shadow-lg')

    if ( props.size == 'x-small' ) base.push('text-[0.625rem]')
    if ( props.size == 'small' ) base.push('text-xs')
    if ( props.size == 'medium' ) base.push('text-sm')
    if ( props.size == 'large' ) base.push('text-base')
    if ( props.size == 'x-large' ) base.push('text-lg')

    return base
})

const fixedHeight = computed(() => {
    let height = 1.25
    const base = 1.25
    if ( props.size == 'small' ) height = base + 0.375
    if ( props.size == 'medium' ) height = base + (0.375*2)
    if ( props.size == 'large' ) height = base + (0.375*3)
    if ( props.size == 'x-large' ) height = base + (0.375*4)

    if ( props.density == 'compact' ) height = height - 0.75
    if ( props.density == 'comfortable' ) height = height - 0.5
    return height + 'rem'
})

const fixedRounded = computed(() => {
    if ( props.label ) return 'rounded'
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    return 'rounded-none'
})

const close = () => {
    if ( props.disabled ) return
    data.hidden = true
    emits('click:close')
}

const click = () => {
    if ( props.disabled ) return
    data.isSelected = !data.isSelected
    emits('click')
    emits('update:modelValue', data.isSelected)
}


</script>
<template>
    <span v-if="!data.hidden" @click="click" :draggable="draggable" :class="chipClass" :style="{height: fixedHeight}">
        <slot name="prepend">
            <div v-show="prependIcon" :class="$style.prepend__icon" class="inline-flex items-center">
                <CSvgIcon :icon="prependIcon"/>
            </div>
        </slot>
        <div class="inline-flex items-center">
            <slot :item="{isSelected: data.isSelected, disabled: disabled}">
                {{ text }}
            </slot>
        </div>
        <slot name="append">
            <div v-show="appendIcon" :class="$style.append__icon" class="inline-flex items-center">
                <CSvgIcon :icon="appendIcon"/>
            </div>
        </slot>
        <div v-show="closable" @click="close" class="inline-flex items-center cursor-pointer" :class="appendIcon ? $style.close__icon__append : $style.close__icon">
            <CSvgIcon :icon="closeIcon"/>
        </div>
    </span>
</template>
<style module>
.prepend__icon {
    margin-inline-start: -6px;
    margin-inline-end: 6px;
}
.append__icon {
    margin-inline-start: 6px;
    margin-inline-end: -6px;
}
.close__icon {
    margin-inline-start: 6px;
    margin-inline-end: -6px;
}
.close__icon__append {
    margin-inline-start: 12px;
    margin-inline-end: -6px;
}
</style>