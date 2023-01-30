<script setup lang="ts">
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/justify-content
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/align-items
import { computed } from 'vue';
const props = withDefaults(defineProps<{
    justify?: string;
    align?: string;
    space?: string;
}>(), {
    justify: 'justify-start',
    align: 'items-start',
    space: 'gap-4',
})

const computedClass = computed(() => {
    const base = [
        'flex flex-wrap',
        props.justify,
        props.align,
        props.space
    ]
    return base
})
</script>

<template>
    <div :class="computedClass">
        <slot />
    </div>
</template>