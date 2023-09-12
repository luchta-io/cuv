<script lang="ts">
export default {
    name: 'CBreadcrumbs',
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useVariant } from '../../composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

type ItemsType = {
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
    items: (string | ItemsType)[]
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

const getTagName = (item: ItemsType | string) => {
    if ( typeof item === 'string' ) return 'div'
    if ( 'href' in item ) return 'a'
    if ( 'to' in item ) return 'router-link'
    return 'div'
}

const formatTitle = (item: string|ItemsType) => {
    if ( typeof item === 'string' ) return item
    return item.title
}

const disabledClass = (item: string|ItemsType, index: number) => {
    if ( typeof item === 'string' && index === props.items.length-1 ) return 'pointer-events-none opacity-40'
    if ( typeof item === 'string' ) return ''
    if ( item.disabled ) return 'pointer-events-none opacity-40'
    return ''
}

const gethrefLink = (item: string|ItemsType) => {
    if (typeof item !== 'string' && item.href) return item.href
    return
}

const getRouterLink = (item: string|ItemsType) => {
    if (typeof item !== 'string' && item.to) return item.to
    return
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
            <component :is="getTagName(item)" :href="gethrefLink(item)"  :to="getRouterLink(item)" class="hover:underline cursor-pointer">
                <slot name="title" :item="(item as any)" :index="index">
                    {{ formatTitle(item) }}
                </slot>
            </component>
        </li>
    </template>
</ul>
</template>