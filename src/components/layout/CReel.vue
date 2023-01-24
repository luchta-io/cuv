<script setup lang="ts">
withDefaults(defineProps<{
    itemWidth?: string;
    space?: string;
    height?: string;
    noBar?: boolean;
}>(), {
    itemWidth: 'auto',
    space: '1rem',
    height: 'auto',
    noBar: false
})
</script>

<template>
    <div
        :class="[
        $style.reel,
        noBar ? $style.noBar : ''
        ]"
    >
        <slot />
    </div>
</template>

<style module>
.reel {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    height: v-bind(height);
}

.reel > * {
    margin: v-bind(space);
    margin-right: 0;
    flex: 0 0 v-bind(itemWidth);
}

.reel > * + * {
    margin-left: v-bind(space);
}

.reel::after {
    content: '';
    flex-shrink: 0;
    flex-basis: v-bind(space);
}

.reel > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
}

.reel.noBar::-webkit-scrollbar {
    display: none;
}
</style>