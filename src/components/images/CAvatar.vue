<script setup lang="ts">

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const props = withDefaults(defineProps<{
    color?: ColorType
    size?: "small" | "medium" | "large"
}>(), {
    color: 'light',
    size: 'medium',
})


</script>

<template>
    <div>
        
    </div>
</template>
