<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue';
import { getScrollParent } from '@/composables/scroll';

const props = withDefaults(defineProps<{
    disabled?: boolean
    id?: string
    location?: 'start' | 'end' | 'top' | 'bottom'
    modelValue?: boolean
    text?: string
}>(), {
    disabled: false,
    location: 'end',
    modelValue: false
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const data: {
    isActive: boolean
} = reactive({
    isActive: false,
})

const position: {
    top: string
    left: string
} = reactive({
    top: '',
    left: '',
})

const targetRef = ref<HTMLElement>()

const contentRef = ref<HTMLElement>()

const isActive = computed({
    get: () => props.modelValue || data.isActive,
    set: value => {
        if ( props.disabled ) return false
        emits('update:modelValue', value)
        data.isActive = value
    }
})

const computedClass = computed(()=> {
    const base = [
        "w-auto",
        "max-w-[10rem]",
        "rounded",
        "bg-black",
        "px-2",
        "py-1",
        "text-white",
        "text-xs",
        "inline-block",
        "absolute",
        "break-all",
    ]
    return base
})

const open = () => {
    if ( props.disabled ) return 
    emits('update:modelValue', true)
    isActive.value = true
}

const close = () => {
    if ( props.disabled ) return 
    emits('update:modelValue', false)
    isActive.value = false
}

const tooltipHeight = computed(() => {
    const tooltipElement = contentRef.value
    if ( !tooltipElement ) return 0
    return tooltipElement.clientHeight
})

const tooltipWidth = computed(() => {
    const tooltipElement = contentRef.value
    if ( !tooltipElement ) return 0
    return tooltipElement.clientWidth
})

const getPositionLeft = () => {
    if ( typeof window == 'undefined' ) return
    if ( !targetRef.value ) return
    const clientRect = targetRef.value.getBoundingClientRect()
    const x = clientRect.left
    const elementWidth = targetRef.value.clientWidth
    if ( props.location == 'start' ) return position.left = x - tooltipWidth.value - 8 + 'px'
    if ( props.location == 'end' ) return position.left = x + elementWidth + 8 + 'px'
    position.left = x + (elementWidth/2 - tooltipWidth.value/2) + 'px'
    return
}

const getPositionTop = () => {
    if ( typeof window == 'undefined' ) return
    if ( !targetRef.value ) return
    const clientRect = targetRef.value.getBoundingClientRect()
    const y = clientRect.top
    const elementHeight = targetRef.value.clientHeight
    if ( props.location == 'top' ) return position.top = y - tooltipHeight.value + window.scrollY - 8 + 'px'
    if ( props.location == 'bottom' ) return position.top = y + elementHeight + window.scrollY + 8 + 'px'
    position.top = y + elementHeight/2 - tooltipHeight.value/2 + window.scrollY + 'px'
    return
}

watchEffect(() => {
    if ( isActive.value && data.isActive ) {
        getPositionLeft()
        getPositionTop()
        const scrollParent = getScrollParent(targetRef.value)
        scrollParent.onscroll = () => {
            isActive.value = false
        }
    }
})

</script>
<template>
<div :id="id" class="relative inline-flex">
    <span
    ref="targetRef"
    @mouseenter="open"
    @mouseleave="close"
    @focus.capture="open"
    @blur.capture="close"
    class="inline-flex"
    >
        <slot name="activator"/>
    </span>
    <Teleport to="body">
        <span 
        v-if="isActive"
        ref="contentRef"
        :class="computedClass" 
        :style="{left: position.left, top: position.top}">
            <slot>
                {{text}}
            </slot>
        </span>
    </Teleport>
</div>
</template>