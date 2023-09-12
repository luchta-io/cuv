<script lang="ts">
export default {
    name: 'CCover',
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
    centered?: string,
    space?: string,
    minHeight?: string,
    noPad?: boolean
}>(), {
    centered: 'div',
    space: '1rem',
    minHeight: '100vh',
    noPad: false
})
</script>

<template>
    <div
        :class="[
        $style.cover,
        $style[`${centered}-centered`]
        ]"
    >
        <slot />
    </div>
</template>

<style module>
.cover {
    display: flex;
    flex-direction: column;
    min-height: v-bind(minHeight);
    padding: v-bind("noPad ? 0 : space");
}
.cover > * {
    margin-top: v-bind(space);
    margin-bottom: v-bind(space);
}
.h1-centered > :first-child:not(h1),
.h2-centered > :first-child:not(h2),
.h3-centered > :first-child:not(h3),
.div-centered > :first-child:not(div) {
    margin-top: 0;
}
.h1-centered > :last-child:not(h1),
.h2-centered > :last-child:not(h2),
.h3-centered > :last-child:not(h3),
.div-centered > :last-child:not(div) {
    margin-bottom: 0;
}
.h1-centered > h1,
.h2-centered > h2,
.h3-centered > h3,
.div-centered > div {
    margin-top: auto;
    margin-bottom: auto;
}
</style>