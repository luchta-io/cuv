<script setup lang="ts">
import { computed } from 'vue';
import { useVariant } from '@/composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    bgColor?: ColorType
    items: string[]
    density?:'default' | 'comfortable' | 'compact'
    divider?: string
}>(), {
    density: 'default',
    divider: '/',
})

const ulClass = computed(() => {
    return [
        'flex items-center leading-[1.375rem] px-3',
        fixedPadding.value,
        props.bgColor ? useVariant({variant: 'flat', color: props.bgColor}) : '',
    ]
})

const fixedPadding = computed(() => {
    if ( props.density === 'comfortable' ) return 'py-3'
    if ( props.density === 'compact' ) return 'py-2'
    return 'py-4'
})
</script>

<template>
<ul :class="ulClass">
    <template v-for="(item, index) in items" :key="index">
        <li v-if="index !== 0" class="inline-block px-2">
            <slot name="divider" :item="item" :index="index">
                {{ divider }}
            </slot>
        </li>
        <li v-if="index !== items.length-1" class="items-center inline-flex px-1 text-inherit">
            <slot name="title" :item="item" :index="index">
                {{ item }}
            </slot>
        </li>
        <li v-if="index === items.length-1" class="items-center inline-flex px-1 text-inherit pointer-events-none opacity-40">
            <slot name="title" :item="item" :index="index">
                {{ item }}
            </slot>
        </li>
    </template>
</ul>
</template>