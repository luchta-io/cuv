<script lang="ts">
export default {
    name: 'CGrid',
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
    min?: string;
    space?: string;
}>(), {
    min: '60ch',
    space: '1rem'
})
</script>

<template>
    <div :class="$style.grid">
        <slot />
    </div>
</template>

<style module>
.grid {
    display: grid;
    grid-gap: v-bind(space);
    grid-template-columns: repeat(auto-fit, minmax(min(v-bind(min), 100%), 1fr));
}
</style>