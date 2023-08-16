<script setup lang="ts">
import { computed, watchEffect } from 'vue';

const props = withDefaults(defineProps<{
    modelValue: boolean;
    size?: 'small'|'medium'|'large';
}>(), {
    modelValue: false,
    size: 'medium',
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'close'): void
}>()

const maxWidthClass = computed(() => {
    if( props.size === 'small' ) return 'max-w-sm'
    if( props.size === 'large' ) return 'max-w-5xl'
    return 'max-w-xl'
})

const close = () => {
    emits('update:modelValue', false)
    emits('close')
}

const escClose = (e:KeyboardEvent) => {
    if( props.modelValue && (e.key === 'Escape' || e.key === 'Esc')) {
        close()
    }
}

watchEffect(() => {
    if(typeof window !== 'undefined') {
        if(props.modelValue) window.addEventListener('keyup', escClose)
        else window.removeEventListener('keyup', escClose)
    }
})
</script>
<template>
<div
v-if="modelValue" 
@click.self="close"
class="fixed top-0 left-0 z-50 inset-0 bg-gray-400/50 max-h-screen"
>  
    <div
    :class="maxWidthClass"
    class="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-h-[90vh] sm:max-h-screen overflow-auto p-2">
        <slot name="content">
            <div 
            class="bg-white" 
            >             
                <slot/>
            </div>
        </slot>
    </div>
</div>
</template>