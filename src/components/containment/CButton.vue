<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import CSvgIcon from '@/components/images/CSvgIcon.vue';
import { useVariant } from '@/composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    appendIcon?: string,
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    elevation?: 'small'|'medium'|'large'
    icon?: string
    id?:string
    name?:string
    prependIcon?: string,
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
}>(), {
    color: 'light',
    density: 'default',
    disabled: false,
    rounded: 'medium',
    size: 'medium',
    variant: 'elevated',
})

const buttonRef = ref<HTMLElement>()

const buttonClass = computed(() => {
    const base = [
        'relative inline-grid items-center justify-center overflow-hidden',
        !props.disabled ? useVariant({variant: props.variant, color: props.color, hover: true, focus: true}) : 'bg-gray-100 text-gray-400 cursor-default',
        props.icon ? 'rounded-full' : 'rounded',
        fixedSize.value,
        fixedRounded.value,
    ]
    if ( props.elevation == 'small' ) base.push('shadow')
    if ( props.elevation == 'medium' ) base.push('shadow-lg')
    if ( props.elevation == 'large' ) base.push('shadow-xl')

    return base
})

const fixedSize = computed(() => {
    if ( props.icon ) return 'w-auto text-base'
    if ( props.size === 'x-small' ) return 'text-[0.625rem] px-2'
    if ( props.size === 'small' ) return 'text-xs px-3'
    if ( props.size === 'large' ) return 'text-base px-5'
    if ( props.size === 'x-large' ) return 'text-lg px-6'
    return 'text-sm px-4'
})

const fixedHeight = computed(() => {
    let height = 1.25
    const base = 1.25
    if ( props.size == 'small' ) height = base + 0.5
    if ( props.size == 'medium' ) height = base + (0.5*2)
    if ( props.size == 'large' ) height = base + (0.5*3)
    if ( props.size == 'x-large' ) height = base + (0.5*4)

    if ( props.density == 'compact' ) height -= 0.75
    if ( props.density == 'comfortable' ) height -= 0.5

    if ( props.icon ) height += 0.75
    return height + 'rem'
})

const fixedWidth = computed(() => {
    if ( props.icon ) return fixedHeight.value
    return ''
})

const fixedRounded = computed(() => {
    if ( props.icon ) return 'rounded-full'
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    return 'rounded-none'
})

const ripple = () => {
    if ( props.disabled ) return
    if ( !buttonRef.value ) return
    buttonRef.value.addEventListener('click', (e) => {
        if ( !buttonRef.value ) return
        const position = buttonRef.value.getBoundingClientRect()
        const x = e.pageX - position.left
        const y = e.pageY - position.top
        const rippleSpan = document.createElement("span")
        rippleSpan.classList.add('c-button-ripple')
        rippleSpan.setAttribute("style","top:"+y+"px; left:"+x+"px;")
        buttonRef.value.appendChild(rippleSpan)
    
        setTimeout(() => {
            rippleSpan.remove()
        }, 1200)
    })
}

onMounted(() => {
    ripple()
})

</script>

<template>
<button :id="id" :name="name" ref="buttonRef" :disabled="disabled" :class="[buttonClass, $style['c-button']]">
    <span :class="$style['c-button__prepend']">
        <CSvgIcon v-if="prependIcon" :icon="prependIcon"/>
    </span>
    <span :class="$style['c-button__content']" class="whitespace-nowrap flex justify-center items-center">
        <CSvgIcon v-if="icon" :icon="icon"/>
        <slot v-else/>
    </span>
    <span :class="$style['c-button__append']">
        <CSvgIcon v-if="appendIcon" :icon="appendIcon"/>
    </span>
</button>
</template>

<style module>
.c-button {
    --c-button-height: v-bind(fixedHeight);
    grid-template-areas: "prepend content append";
    grid-template-columns: max-content auto max-content;
    height: var(--c-button-height);
    width: v-bind(fixedWidth);
}
.c-button__prepend {
    grid-area: prepend;
    margin-inline-start: calc(var(--c-button-height) / -9);
    margin-inline-end: calc(var(--c-button-height) / 4.5);
}
.c-button__content {
    grid-area: content;
}
.c-button__append {
    grid-area: append;
    margin-inline-start: calc(var(--c-button-height) / 4.5);
    margin-inline-end: calc(var(--c-button-height) / -9);
}
</style>
