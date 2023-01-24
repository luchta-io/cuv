<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    padding?: string;
    borderWidth?: string;
    borderColor?: string;
    backgroundColor?: string;
}>(), {
    padding: 'p-2',
    borderWidth: 'border',
    borderColor: 'border-black',
    backgroundColor: 'bg-inherit',
})

const computedClass = computed(() => {
    const base = [
        'border-solid',
        props.padding,
        props.borderWidth,
        props.borderColor,
        props.backgroundColor,
    ]
    return base
})

</script>

<template>
    <div :class="computedClass">
        <slot />
    </div>
</template>