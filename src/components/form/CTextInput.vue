<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(defineProps<{
    modelValue: string
}>(), {
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const 入力値 = computed({
    get: () => props.modelValue,
    set: value => {
        emits('update:modelValue', value)
    }
})
</script>

<template>
<input 
v-model="入力値"
type="text"
class=""/>
</template>
