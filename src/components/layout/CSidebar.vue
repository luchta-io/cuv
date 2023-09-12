<script lang="ts">
export default {
    name: 'CSidebar',
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    side?: 'left' | 'right';
    sideWidth?: string;
    contentMin?: string;
    space?: string;
    noStretch?: boolean;
}>(), {
    side: 'left',
    sideWidth: 'auto',
    contentMin: '50%',
    space: '1rem',
    noStretch: false
})

const sidebarClass = computed(() => {
    const base = [
        'flex flex-wrap',
        props.noStretch ? 'items-start' : 'items-stretch',
    ]
    return base
}) 
</script>

<template>
<div
:class="[
    sidebarClass,
    side === 'left' ? $style.left : $style.right
]"
:style="{
    gap: space,
}"
>
    <slot />
</div>
</template>

<style module>
.left > :first-child,
.right > :last-child {
    flex-basis: v-bind(sideWidth);
    flex-grow: 1;
}

.left > :last-child,
.right > :first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: v-bind(contentMin);
}
</style>