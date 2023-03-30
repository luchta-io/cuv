<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    modelValue: boolean
    contained?: boolean
    disabled?: boolean
}>(), {
    modelValue: false,
    contained: false,
    disabled: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const isActive = computed({
    get:() => props.modelValue,
    set: value=> {
        return emits('update:modelValue', value)
    }
})

const overlayClass = computed(() => {
    return [
        'flex top-0 bottom-0 right-0 left-0 pointer-events-none z-50 justify-center items-center',
        props.contained ? 'absolute' : 'fixed'
    ]
})

const scrimClass = computed(() => {
    return [
        'fixed pointer-events-auto bg-black/20 top-0 bottom-0 right-0 left-0',
        props.contained ? 'absolute' : 'fixed',
    ]
})

const click = () => {
    if(props.disabled) return
    isActive.value = false
}
</script>

<template>
<div v-show="modelValue" @click="click" :class="overlayClass">
    <div :class="scrimClass"></div>
    <div class="absolute pointer-events-auto ">
        <slot/>
    </div>
</div>
</template>
