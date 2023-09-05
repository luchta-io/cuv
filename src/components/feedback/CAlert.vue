<script setup lang="ts">
import { computed, reactive, useCssModule } from 'vue';
import { useVariant } from '../../composables/variant'
import { mdiClose, mdiCloseCircle, mdiAlertCircle, mdiCheckCircle } from '@mdi/js';
import CSvgIcon from '../../components/images/CSvgIcon.vue';

const props = withDefaults(defineProps<{
    appendIcon?: string
    border?: 'top' | 'end' | 'bottom' | 'start'
    borderColor?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    closable?: boolean
    closeIcon?: string
    color?: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    density?:'default' | 'comfortable' | 'compact'
    elevation?: 'small'|'medium'|'large'
    position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
    prependIcon?: string
    prominent?: boolean
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    text?: string
    title?: string
    type?: 'error' | 'warning' | 'info' | 'success'
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
}>(), {
    closable: false,
    closeIcon: mdiClose,
    color: 'light',
    density: 'default',
    position: 'relative',
    prominent: false,
    rounded: 'medium',
    variant: 'flat',
})

const emits = defineEmits<{
    (e: 'click:close'): void
}>()

const data: {
    hidden: boolean
} = reactive({
    hidden: false,
})

const alertClass = computed(() => {
    const base = [
        'grid grid-cols-[max-content_auto_max-content_max-content] p-4 overflow-hidden pointer-none',
        fixedColorClass.value,
    ]
    if ( props.rounded === 'small' ) base.push('rounded-sm')
    if ( props.rounded === 'medium' ) base.push('rounded')
    if ( props.rounded === 'large' ) base.push('rounded-lg')
    if ( props.rounded === 'x-large' ) base.push('rounded-3xl')
    if ( props.rounded === 'circle' ) base.push('rounded-full px-12')

    if ( props.border === 'top' ) base.push('pt-6')
    if ( props.border === 'end' ) base.push('pe-6')
    if ( props.border === 'bottom' ) base.push('pb-6')
    if ( props.border === 'start' ) base.push('ps-6')

    if( props.position === 'static' ) base.push('static')
    if( props.position === 'relative' ) base.push('relative')
    if( props.position === 'fixed' ) base.push('fixed')
    if( props.position === 'absolute' ) base.push('absolute')
    if( props.position === 'sticky' ) base.push('sticky')

    if ( props.elevation == 'small' ) base.push('shadow')
    if ( props.elevation == 'medium' ) base.push('shadow-md')
    if ( props.elevation == 'large' ) base.push('shadow-lg')

    if ( props.density === 'default' ) base.push('py-4')
    if ( props.density === 'comfortable' ) base.push('py-3')
    if ( props.density === 'compact' ) base.push('py-2')

    return base
})

const underlayClass = computed(() => {
    const base = [
        'absolute'
    ]

    if ( props.border === 'top' ) base.push('rounded-t-none')
    if ( props.border === 'end' ) base.push('rounded-r-none')
    if ( props.border === 'bottom' ) base.push('rounded-b-none')
    if ( props.border === 'start' ) base.push('rounded-l-none')
    return base
})

const borderClass = computed(() => {
    const base = [
        'rounded-[inherit] absolute top-0 left-0 bottom-0 right-0 opacity-40 w-full border-0 border-current'
    ]

    if ( props.border === 'top' ) base.push('border-t-8')
    if ( props.border === 'end' ) base.push(useCssModule()['border__end'])
    if ( props.border === 'bottom' ) base.push('border-b-8')
    if ( props.border === 'start' ) base.push(useCssModule()['border__start'])

    if ( props.borderColor === 'white' ) base.push('text-[var(--cuv-white)]')
    if ( props.borderColor === 'black' ) base.push('text-[var(--cuv-black)]')
    if ( props.borderColor === 'light' ) base.push('text-[var(--cuv-light-text)]')
    if ( props.borderColor === 'dark' )  base.push('text-[var(--cuv-dark-text)]')
    if ( props.borderColor === 'primary' ) base.push('text-[var(--cuv-primary-text)]')
    if ( props.borderColor === 'link' ) base.push('text-[var(--cuv-link-text)]')
    if ( props.borderColor === 'success' ) base.push('text-[var(--cuv-success-text)]')
    if ( props.borderColor === 'danger' ) base.push('text-[var(--cuv-danger-text)]')
    if ( props.borderColor === 'warning' ) base.push('text-[var(--cuv-warning-text)]')
    if ( props.borderColor === 'info' ) base.push('text-[var(--cuv-info-text)]')
    return base
})

const prependClass = computed(() => {
    return [
        'flex items-center',
        props.prominent ? 'self-center text-[2.75rem]' : 'self-start text-[1.75rem]'
    ]
})

const fixedColorClass = computed(() => {
    if ( props.type === 'error' ) return useVariant({variant: props.variant, color: 'danger'})
    if ( props.type === 'warning' ) return useVariant({variant: props.variant, color: 'warning'})
    if ( props.type === 'info' ) return useVariant({variant: props.variant, color: 'info'})
    if ( props.type === 'success' ) return useVariant({variant: props.variant, color: 'success'})
    return useVariant({variant: props.variant, color: props.color})
}) 

const fixedPrependIcon = computed(() => {
    if ( props.prependIcon ) return props.prependIcon
    if ( props.type === 'error' ) return mdiCloseCircle
    if ( props.type === 'warning' ) return mdiAlertCircle
    if ( props.type === 'info' ) return mdiAlertCircle
    if ( props.type === 'success' ) return mdiCheckCircle
    return undefined
})

const close = () => {
    console.log('close')
    emits('click:close')
}

const click = () => {
    console.log('click')
}

</script>
<template>
    <div v-if="!data.hidden" :class="[alertClass, !prominent ? $style.alert : $style.alert__prominent]">
        <span :class="[underlayClass, $style.underlay]"></span>
        <div v-show="border" :class="borderClass"></div>
        <div v-show="fixedPrependIcon || $slots.prepend" :class="[prependClass, $style.prepend]">
            <slot name="prepend">
                <CSvgIcon :icon="fixedPrependIcon"/>
            </slot>
        </div>
        <div :class="$style.content" class="self-center overflow-hidden">
            <div class="flex items-center text-xl font-medium hyphens-auto tracking-wide break-all">
                <slot name="title">
                    {{title}}
                </slot>
            </div>
            <slot>
                {{ text }}
            </slot>
        </div>
        <div @click="click" v-show="appendIcon || $slots.append" :class="$style.append" class="flex self-start items-center text-[1.75rem]">
            <slot name="append">
                <CSvgIcon :icon="appendIcon"/>
            </slot>
        </div>
        <div v-show="closable" @click="close()" :class="$style.close" class="self-start cursor-pointer relative">
            <CSvgIcon :icon="closeIcon"/>
        </div>
    </div>
</template>
<style module>
.alert {
    grid-template-areas: 
    "prepend content append close"
    ". content . .";
}
.alert__prominent {
    grid-template-areas: 
    "prepend content append close"
    "prepend content . .";
}

.underlay {
    grid-area: none;
}
.underlay__start {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.underlay__top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.prepend {
    grid-area: prepend;
    margin-inline-end: 16px;
}
.content {
    grid-area: content;
}

.append {
    grid-area: append;
}

.close {
    grid-area: close;
    margin-inline-start: 16px
}

.border__end {
    border-inline-end-width: 8px;
}
.border__start {
    border-inline-start-width: 8px;
}

</style>