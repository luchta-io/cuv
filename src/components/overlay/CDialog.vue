<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    isActive: boolean;
    size?: 'small'|'medium'|'large';
}>(), {
    isActive: false,
    size: 'medium',
})

defineEmits<{
    (e: "close"):void,
}>()

const maxWidthClass = computed(() => {
    if( props.size === 'small' ) return 'max-w-sm'
    if( props.size === 'large' ) return 'max-w-5xl'
    return 'max-w-xl'
})

</script>
<template>
<div
v-show="isActive" 
@click.self="$emit('close')"
class="fixed top-0 left-0 z-50 inset-0 bg-gray-400/50 max-h-screen"
>
    <div 
    :class="maxWidthClass"
    class="bg-white fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-h-[90vh] sm:max-h-screen overflow-auto" 
    >             
        <slot/>
    </div>
</div>
</template>