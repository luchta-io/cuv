<script setup lang="ts">
withDefaults(defineProps<{
    space?: string;
    label?: string;
}>(), {
    space: '0px',
    label: '',
})
</script>

<template>
    <span
        :class="[
        $style.withIcon,
        space ? $style.flex : ''
        ]"
        :role="label!=='' ? 'img' : ''"
        :aria-label="label"
    >
        <slot />
    </span>
</template>

<style module>
.withIcon svg {
    height: 0.75em;
    width: 0.75em;
}

.flex {
    display: inline-flex;
    align-items: baseline;
}

.flex > svg {
    margin-inline-end: v-bind(space);
}
</style>