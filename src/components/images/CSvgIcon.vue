<script lang="ts">
export default {
    name: 'CSvgIcon',
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    icon: string
    size?: "small" | "medium" | "large"
}>(), {
    icon: '',
    size: 'medium',
})

const length = computed(() => {
    if(props.size === 'small') return '0.75em'
    if(props.size === 'large') return '2em'
    return '1.2em'
})

</script>

<template>
<svg :width="length" :height="length" viewBox="0 0 24 24">
    <path fill="currentColor" :d="icon"/>
</svg>
</template>
