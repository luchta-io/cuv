<script setup lang="ts">
import {computed, onMounted, ref, useSlots} from 'vue';
import { useVariant } from '../../composables/variant';
import { useRipple } from '../../composables/ripple';
import CAvatar from '../../components/images/CAvatar.vue';
import COverlay from '../../components/containment/COverlay.vue';
import CProgress from '../../components/feedback/CProgress.vue';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const slots = useSlots()

const props = withDefaults(defineProps<{
    appendIcon?: string,
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    disabled?: boolean
    elevation?: 'small'|'medium'|'large'
    hover?: boolean
    id?: string
    loading?: boolean
    position?: 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'
    prependIcon?: string
    ripple?: boolean
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    subtitle?: string
    text?: string
    title?: string
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    width?: string
}>(), {
    color: 'white',
    density: 'default',
    disabled: false,
    hover: false,
    loading: false,
    position: 'relative',
    ripple: false,
    rounded: 'medium',
    variant: 'elevated',
})

const cardRef = ref()

const cardClass = computed(() => {
    const base = [
        'block overflow-hidden break-words ',
        useVariant({variant: props.variant, color: props.color, hover: props.hover}),
        props.position,
    ]

    if(props.elevation === 'small') base.push('shadow')
    if(props.elevation === 'medium') base.push('shadow-md')
    if(props.elevation === 'large') base.push('shadow-lg')

    if (props.rounded === 'small') base.push('rounded-sm')
    if (props.rounded === 'medium') base.push('rounded')
    if (props.rounded === 'large') base.push('rounded-lg')
    if (props.rounded === 'x-large') base.push('rounded-3xl')
    if (props.rounded === 'circle') base.push('rounded-full')
    if (props.rounded === 'none') base.push('rounded-none')

    if (props.disabled) base.push('select-none pointer-events-none opacity-60')
    return base
})

const titleClass = computed(() => {
    const base = [
        'block text-xl font-semibold truncate overflow-hidden'
    ]
    if (props.density === 'compact') base.push('leading-6')
    if (props.density === 'comfortable') base.push('leading-7')
    if (props.density === 'default') base.push('leading-8')
    return base
})

const subtitleClass = computed(() => {
    const base = [
        'pb-1 block text-sm font-normal opacity-60 truncate overflow-hidden'
    ]
    if (props.density === 'compact') base.push('leading-4')
    if (props.density === 'comfortable') base.push('leading-[1.125rem]')
    if (props.density === 'default') base.push('leading-5')
    return base
})

const textClass = computed(() => {
    const base = [
        'text-sm px-4 pb-4'
    ]
    if (props.density === 'compact') base.push('leading-[1.15rem]')
    if (props.density === 'comfortable') base.push('leading-[1.2rem]')
    if (props.density === 'default') base.push('leading-5')
    return base
})

const isLoad = computed({
    get: () => props.loading,
    set: value => {
        return value
    }
})

const ripple = () => {
    if ( !props.ripple ) return
    if ( !cardRef.value ) return
    useRipple(cardRef.value)
}

onMounted(() => {
    ripple()
})

</script>

<template>
    <div ref="cardRef" :id="id" :class="cardClass" :style="{width: width}">
        <div v-if="loading">
            <COverlay v-model="isLoad" contained>
                <CProgress/>
            </COverlay>
        </div>
        <slot name="default"></slot>
        <div :class="$style['c-card__item']" class="grid items-center py-2.5 px-4">
            <slot name="item">
                <div :class="$style['c-card__item--prepend']">
                    <slot name="prepend">
                        <CAvatar v-if="prependIcon" :icon="prependIcon"/>
                    </slot>
                </div>
                <div :class="$style['c-card__item--content']" class="self-center overflow-hidden">
                    <slot name="content">
                        <div :class="titleClass">
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </div>
                        <div :class="subtitleClass">
                            <slot name="subtitle">
                                {{ subtitle }}
                            </slot>
                        </div>
                    </slot>
                </div>
                <div :class="$style['c-card__item--append']">
                    <slot name="append">
                        <CAvatar v-if="appendIcon" :icon="appendIcon"/>
                    </slot>
                </div>
            </slot>
        </div>
        <div :class="textClass">
            <slot name="text">
                {{ text }}
            </slot>
        </div>
        <div v-if="slots.actions" class="flex items-center p-2">
            <slot name="actions">
            </slot>
        </div>
    </div>
</template>

<style module>
.c-card__item {
    grid-template-areas: "prepend content append";
    grid-template-columns: max-content auto max-content;
}
.c-card__item--prepend {
    grid-area: prepend;
}
.c-card__item--content {
    grid-area: content;
}
.c-card__item--append {
    grid-area: append;
}
</style>
