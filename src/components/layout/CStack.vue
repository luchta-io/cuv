<script setup lang="ts">
withDefaults(defineProps<{
  space?: string;
  recursive?: boolean;
  splitAfter?: number; // now max 10
}>(), {
  space: '1rem',
  recursive: false,
  splitAfter: 0
})
</script>

<template>
  <div
    :class="[
      $style.stack,
      recursive ? $style.recursive : '',
      splitAfter ? $style.splitAfter : '',
      splitAfter ? $style[`splitAfter${splitAfter}`] : ''
    ]"
  >
    <slot />
  </div>
</template>

<style module>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.stack > * + *,
.recursive * + * {
  margin-top: v-bind(space);
}
.splitAfter:only-child {
  height: 100%
}
.splitAfter1 > :nth-child(1),
.splitAfter2 > :nth-child(2),
.splitAfter3 > :nth-child(3),
.splitAfter4 > :nth-child(4),
.splitAfter5 > :nth-child(5),
.splitAfter6 > :nth-child(6),
.splitAfter7 > :nth-child(7),
.splitAfter8 > :nth-child(8),
.splitAfter9 > :nth-child(9),
.splitAfter10 > :nth-child(10) {
  margin-bottom: auto;
}
</style>