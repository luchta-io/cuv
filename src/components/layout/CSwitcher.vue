<script setup lang="ts">
withDefaults(defineProps<{
    threshold?: string;
    space?: string;
    limit?: number; // now max 10
}>(), {
    threshold: 'var(--measure)',
    space: '1rem',
    limit: 4
})
</script>

<template>
    <div
        :class="[
        $style.switcher,
        $style[`limit${limit}`]
        ]"
    >
        <slot />
    </div>
</template>

<style module>
.switcher {
    display: flex;
    flex-wrap: wrap;
    gap: v-bind(space);
}

.switcher > * {
    flex-grow: 1;
    flex-basis: calc((v-bind(threshold) - 100%) * 999);
}

.limit1 > :nth-last-child(n+2),
.limit1 > :nth-last-child(n+2) ~ *,
.limit2 > :nth-last-child(n+3),
.limit2 > :nth-last-child(n+3) ~ *,
.limit3 > :nth-last-child(n+4),
.limit3 > :nth-last-child(n+4) ~ *,
.limit4 > :nth-last-child(n+5),
.limit4 > :nth-last-child(n+5) ~ *,
.limit5 > :nth-last-child(n+6),
.limit5 > :nth-last-child(n+6) ~ *,
.limit6 > :nth-last-child(n+7),
.limit6 > :nth-last-child(n+7) ~ *,
.limit7 > :nth-last-child(n+8),
.limit7 > :nth-last-child(n+8) ~ *,
.limit8 > :nth-last-child(n+9),
.limit8 > :nth-last-child(n+9) ~ *,
.limit9 > :nth-last-child(n+10),
.limit9 > :nth-last-child(n+10) ~ *,
.limit10 > :nth-last-child(n+11),
.limit10 > :nth-last-child(n+11) ~ * {
  flex-basis: 100%;
}
</style>