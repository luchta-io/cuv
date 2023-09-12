<script lang="ts">
export default {
    name: 'CCluster',
}
</script>

<script setup lang="ts">
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/justify-content
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/align-items
withDefaults(defineProps<{
    justify?: 'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'space-evenly';
    align?: 'flex-start'|'flex-end'|'center'|'baseline'|'stretch';
    space?: string;
}>(), {
    justify: 'flex-start',
    align: 'flex-start',
    space: '1rem'
})
</script>

<template>
<div :class="$style.cluster">
    <slot />
</div>
</template>

<style module>
.cluster {
    display: flex;
    flex-wrap: wrap;

    justify-content: v-bind(justify);
    align-items: v-bind(align);
    gap: v-bind(space);
}
</style>