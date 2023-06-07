<script setup lang="ts">
import { computed, reactive } from 'vue';

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

const isActive = computed({
    get: () => props.modelValue || data.isActive,
    set: value => {
        if ( props.disabled ) return false
        emits('update:modelValue', value)
        console.log(value)
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
        isActive.value ? 'block' : 'invisible',
    ]
    return base
})

const uid = Math.random().toString(32).substring(2)

const id = computed(() => 'c-tooltip--' + uid)

const tooltipId = computed(() => 'c-tooltip-content--' + uid)

const open = () => {
    if ( props.disabled ) return 
    emits('update:modelValue', true)
    isActive.value = true
    console.log('open', isActive.value)
}

const close = () => {
    if ( props.disabled ) return 
    emits('update:modelValue', false)
    isActive.value = false
}

const teleportTarget = computed(() => {        
    const targetElement = document.body
    const container = document.createElement('div')
    container.className = 'c-overlay-container'
    targetElement.appendChild(container)
    return container
})

const tooltipHeight = computed(() => {
    const tooltipElement = document.getElementById(tooltipId.value)
    if ( !tooltipElement ) return 0
    return tooltipElement.clientHeight
})

const tooltipWidth = computed(() => {
    const tooltipElement = document.getElementById(tooltipId.value)
    if ( !tooltipElement ) return 0
    return tooltipElement.clientWidth
})

const positionLeft = () => {
    const targetElement = document.getElementById(id.value)
    if ( !targetElement ) return
    const clientRect = targetElement.getBoundingClientRect()
    const x = clientRect.left
    const elementWidth = targetElement.clientWidth
    if ( props.location === 'start' ) return x - tooltipWidth.value - 8 + 'px'
    if ( props.location === 'end' ) return x + elementWidth + 10 + 'px'
    return x + (elementWidth/2 - tooltipWidth.value/2) + 'px'
}

const positionTop = () => {
    const targetElement = document.getElementById(id.value)
    if ( !targetElement ) return
    const clientRect = targetElement.getBoundingClientRect()
    const y = clientRect.top
    const elementHeight = targetElement.clientHeight
    if ( props.location === 'top' ) return y - tooltipHeight.value - 8 + 'px'
    if ( props.location === 'bottom' ) return y + elementHeight + 8 + 'px'
    return y + (elementHeight/2 - tooltipHeight.value/2) + 'px'
}
</script>
<template>
<div class="relative inline-flex">
    <div 
    :id="id"
    @mouseenter="open"
    @mouseleave="close"
    @focus.capture="open"
    @blur.capture="close"
    >
        <slot name="activator"/>
    </div>
    <Teleport :to="teleportTarget">
        <span :id="tooltipId" :class="computedClass" :style="{left: positionLeft(), top: positionTop()}">
            <slot>
                {{text}}
            </slot>
        </span>
    </Teleport>
</div>
</template>