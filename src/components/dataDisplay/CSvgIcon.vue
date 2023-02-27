<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    icon: string
    size?: "small" | "medium" | "large"
}>(), {
    icon: '',
    size: 'medium',
})

const sizeClass = computed(() => {
    if(props.size === 'small') return '16'
    if(props.size === 'large') return '30'
    return '20'
})

</script>

<template>
<svg :width="sizeClass" :height="sizeClass" viewBox="0 0 24 24">
    <path fill="currentColor" :d="icon"/>
</svg>
</template>
