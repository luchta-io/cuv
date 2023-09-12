<script lang="ts">
export default {
    name: 'CFrame',
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
    ratio?: string;
}>(), {
    ratio: '16:9'
})
</script>

<template>
<div 
:class="$style.frame"
:style="{
    'padding-bottom': `calc(${ratio.split(':')[1]}/${ratio.split(':')[0]}*100% )`
}">
    <slot />
</div>
</template>

<style module>
.frame {
    position: relative;
}

.frame > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.frame > img,
.frame > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
</style>