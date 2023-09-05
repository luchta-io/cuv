<script setup lang="ts">
import { computed, reactive, useSlots, watchEffect } from 'vue';
import { useVariant } from '../../composables/variant';

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const slots = useSlots()

const props = withDefaults(defineProps<{
    color?: ColorType
    contained?: boolean
    disabled?: boolean
    id?: string
    location?: 'top' | 'bottom'
    modelValue?: boolean
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    timeout?: number
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    vertical?: boolean
}>(), {
    color:'dark',
    contained: false,
    disabled: false,
    location: 'bottom',
    modelValue: false,
    rounded: 'medium',
    timeout: 5000,
    variant: 'elevated',
    vertical: false,
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const data: {
    modelValue: boolean
} = reactive({
    modelValue: false,
})

const isActive = computed({
    get: () => props.modelValue || data.modelValue,
    set: value => {
        emits('update:modelValue', value)
        data.modelValue = value
    }
})

const computedClass = computed(()=> {
    const base = [
        "inline-block flex items-center w-auto my-2 opacity-90",
        "absolute left-1/2 -translate-x-1/2 duration-500",
        useVariant({variant: props.variant, color: props.color, hover: false, focus: false}),
        fixedRounded.value,
        getPosition.value,
    ]
    if (props.vertical) base.push('flex-col')
    return base
})

const fixedRounded = computed(() => {
    if ( props.rounded === 'small' ) return 'rounded-sm'
    if ( props.rounded === 'medium' ) return 'rounded'
    if ( props.rounded === 'large' ) return 'rounded-lg'
    if ( props.rounded === 'x-large' ) return 'rounded-3xl'
    if ( props.rounded === 'circle' ) return 'rounded-full'
    return 'rounded-none'
})

const getPosition = computed(() => {
    if ( props.location === 'top' ) return 'top-0'
    return 'bottom-0'
})

const open = () => {
    if (props.disabled) return
    data.modelValue = true
}

watchEffect(() => {
    if (isActive.value && props.timeout !== -1) {
        setTimeout(() => {
            isActive.value = false
        }, props.timeout)
    }
})

</script>
<template>
<div
@click="open"
>
    <slot name="activator" :isActive="isActive"/>
</div>
<Teleport to="body" :disabled="contained">
    <Transition>
        <div 
        :id="id"
        v-show="isActive"
        :class="computedClass" 
        >
            <div v-if="slots.default" class="py-3.5 px-4 text-sm">
                <slot/>
            </div>
            <div v-if="slots.actions" :class="vertical?'self-end pb-2':'self-center py-2'" class="px-2">
                <slot name="actions"/>
            </div>
        </div>
    </Transition>
</Teleport>
</template>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>