<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    padding?: 'none'|'small'|'medium'|'large';
    border?: boolean;
}>(), {
    padding: 'medium',
    border: false,
})

const computedClass = computed(() => {
    const base = [
        'border-solid',
        props.border ? 'border border-black' : 'border-none',
    ]
    if (props.padding === 'none') base.push('p-0')
    if (props.padding === 'small') base.push('p-2')
    if (props.padding === 'medium') base.push('p-4')
    if (props.padding === 'large') base.push('p-8')
    return base
})

</script>

<template>
    <div :class="computedClass">
        <slot />
    </div>
</template>