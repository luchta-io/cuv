<script lang="ts">
export default {
    name: 'CImposter',
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    breakout?: boolean;
    margin?: string;
    fixed?: boolean;
}>(), {
    breakout: false,
    margin: '0px',
    fixed: false
})

const computedClass = computed(() => {
    const base = [
        props.fixed ? 'fixed' : 'absolute',
        'top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]',
    ]
    return base
})

</script>

<template>
    <div 
    :class="[
    computedClass,
    breakout ? '' : $style.contain
    ]">
        <slot />
    </div>
</template>

<style module>
.contain {
    max-width: calc(100% - (v-bind(margin) * 2));
    max-height: calc(100% - (v-bind(margin) * 2));
    overflow: auto
}
</style>