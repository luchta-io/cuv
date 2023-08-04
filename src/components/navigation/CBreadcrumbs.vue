<script setup lang="ts">
import { computed } from 'vue';
import { useVariant } from '@/composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

interface itemsType {
    title: string
    disabled?: boolean
    href?: string
    to?: string
}

const props = withDefaults(defineProps<{
    bgColor?: ColorType
    color?: ColorType
    density?:'default' | 'comfortable' | 'compact'
    divider?: string
    items: (string | itemsType)[]
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
}>(), {
    density: 'default',
    divider: '/',
    rounded: 'none',
})

const ulClass = computed(() => {
    const base = [
        'flex items-center leading-[1.375rem] px-3',
        fixedPadding.value,
        fixedRounded.value,
        props.bgColor ? useVariant({variant: 'flat', color: props.bgColor}) : '',
    ]
    return base
})

const colorClass = computed(() => {
    if ( props.color === 'white' ) return '!text-[var(--cuv-white)]'
    if ( props.color === 'black' ) return '!text-[var(--cuv-black)]'
    if ( props.color === 'light' ) return '!text-[var(--cuv-light-text)]'
    if ( props.color === 'dark' )  return '!text-[var(--cuv-dark-text)]'
    if ( props.color === 'primary' ) return '!text-[var(--cuv-primary-text)]'
    if ( props.color === 'link' ) return '!text-[var(--cuv-link-text)]'
    if ( props.color === 'success' ) return '!text-[var(--cuv-success-text)]'
    if ( props.color === 'danger' ) return '!text-[var(--cuv-danger-text)]'
    if ( props.color === 'warning' ) return '!text-[var(--cuv-warning-text)]'
    if ( props.color === 'info' ) return '!text-[var(--cuv-info-text)]'
    return 'text-inherit'
})

const fixedPadding = computed(() => {
    if ( props.density === 'comfortable' ) return 'py-3'
    if ( props.density === 'compact' ) return 'py-2'
    return 'py-4'
})

const fixedRounded = computed(() => {
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    if ( props.rounded === 'none' ) return 'rounded-none'
    return 'rounded-none'
})

const isTag = (item: itemsType) => {
    if ( 'href' in item ) return 'a'
    if ( 'to' in item ) return 'router-link'
    return ''
}

const formatTitle = (item: string|itemsType) => {
    if ( typeof item === 'string' ) return item
    return item.title
}

const disabledClass = (item: string|itemsType, index: number) => {
    if ( typeof item === 'string' && index === props.items.length-1 ) return 'pointer-events-none opacity-40'
    if ( typeof item === 'string' ) return ''
    if ( item.disabled ) return 'pointer-events-none opacity-40'
    return ''
}

const isDefaultItem = (item: string|itemsType) => {
    if ( typeof item === 'string' ) return true
    if ( 'href' in item ) return false
    if ( 'to' in item ) return false
    return true
}

</script>

<template>
<ul :class="ulClass">
    <template v-for="(item, index) in items" :key="index">
        <li v-if="index !== 0" class="inline-block px-2">
            <slot name="divider" :item="item" :index="index">
                {{ divider }}
            </slot>
        </li>
        <li :class="[colorClass, disabledClass(item, index)]" class="items-center inline-flex px-1 text-inherit">
            <template v-if="isDefaultItem(item)" >
                <slot name="title" :item="item" :index="index">
                    {{ formatTitle(item) }}
                </slot>
            </template>
            <template v-if="typeof item !== 'string' && ('href' in item)">
                <component :is="isTag(item)" :href="item.href ? item.href : undefined" class="hover:underline">
                    <slot name="title" :item="item" :index="index">
                        {{ formatTitle(item) }}
                    </slot>
                </component>
            </template>
            <template v-if="typeof item !== 'string' && ('to' in item)">
                <component :is="isTag(item)" :to="item.to ? item.to : undefined" class="hover:underline cursor-pointer">
                    <slot name="title" :item="item" :index="index">
                        {{ formatTitle(item) }}
                    </slot>
                </component>
            </template>
        </li>
    </template>
</ul>
</template>