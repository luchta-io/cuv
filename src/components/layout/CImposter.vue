<script setup lang="ts">
withDefaults(defineProps<{
    breakout?: boolean;
    margin?: string;
    fixed?: boolean;
}>(), {
    breakout: false,
    margin: '0px',
    fixed: false
})
</script>

<template>
    <div
        :class="[
        $style.imposter,
        breakout ? '' : $style.contain,
        fixed ? $style.fixed : ''
        ]"
    >
        <slot />
    </div>
</template>

<style module>
.imposter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.contain {
    max-width: calc(100% - (v-bind(margin) * 2));
    max-height: calc(100% - (v-bind(margin) * 2));
    overflow: auto
}

.fixed {
    position: fixed
}
</style>