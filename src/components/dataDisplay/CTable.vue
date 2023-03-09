<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    density?:'default' | 'comfortable' | 'compact'
    fixedFooter?: boolean
    fixedHeader?: boolean
    height?: string
    hover?: boolean
}>(), {
    density: 'default',
    fixedFooter: false,
    fixedHeader: false,
    height: 'auto',
    hover: false,
})

const tableClass = computed(() => {
    return [
        'w-full',
        '[&>table]:w-full',
        '[&_thead_tr]:shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] [&_thead_tr]:bg-white [&_thead_tr]:h-12',
        '[&_thead_th]:font-semibold [&_thead_th]:text-gray-600',
        '[&_tbody>tr]:border-b [&_tbody>tr]:border-gray-300 last:[&_tbody>tr]:border-none hover:[&_tbody>tr]:bg-gray-50',
        '[&_tfoot_tr]:shadow-[inset_0_1px_0_rgba(0,0,0,0.2)] [&_tfoot_tr]:bg-white [&_tfoot_tr]:h-12',
        '[&_td]:px-4 [&_th]:px-4',

        props.density === 'default' ? '[&_td]:h-12' : '',
        props.density === 'comfortable' ? '[&_td]:h-8' : '',
        props.density === 'compact' ? '[&_td]:h-10' : '',

        props.fixedHeader ? 'overflow-y-scroll overscroll-contain [&_thead]:sticky [&_thead]:top-0' : '',
        props.fixedFooter ? 'overflow-y-scroll overscroll-contain [&_tfoot]:sticky [&_tfoot]:bottom-0' : '',
    ]
})

</script>

<template>
<div :class="tableClass" :style="{height: height}">
    <slot name="top"/>
    <table>
        <slot name="default"/>
    </table>
    <slot name="bottom"/>
</div>
</template>