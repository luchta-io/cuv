<script lang="ts">
export default {
    name: 'CCenter',
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
    max?: string;
    gutters?: string;
    andText?: boolean;
    intrinsic?: boolean;
}>(), {
    max: '100%',
    gutters: '1rem',
    andText: false,
    intrinsic: false
})
</script>

<template>
    <div
        :class="[
        $style.center,
        intrinsic ? $style.intrinsic : '',
        andText ? $style.andText : ''
        ]"
    >
        <slot />
    </div>
</template>

<style module>
.center {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: v-bind(max);
    padding-left: v-bind(gutters);
    padding-right: v-bind(gutters);
}
.intrinsic {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.andText {
    text-align: center;
}
</style>