<script setup lang="ts">
import { reactive } from 'vue';

const props = withDefaults(defineProps<{
    msg: string
    position?: 'top'|'bottom'|'right'|'left'
}>(), {
    position: 'top',
})

const data: {
    isActive: boolean
} = reactive({
    isActive: false
})

const open = () => {
    data.isActive = true
    console.log('open', data.isActive)
}

const close = () => {
    data.isActive = false
}

const styles = () => {
    if(props.position==='top') return {inset:'auto auto calc(100% + 7px) 50%',transform:'translateX(-50%)'}
    if(props.position==='bottom') return {inset:'calc(100% + 7px) auto auto 50%',transform:'translateX(-50%)'}
    if(props.position==='right') return {inset:'50% auto auto calc(100% + 7px)',transform:'translateY(-50%)'}
    if(props.position==='left') return {inset:'50% calc(100% + 7px) auto auto',transform:'translateY(-50%)'}
}
</script>
<template>
<div :class="$style.tooltip">
    <span v-show="data.isActive" :class="$style.message" :style="styles()">
        {{msg}}
    </span>
    <div 
    @mouseenter="open"
    @mouseleave="close"
    @focus.capture="open"
    @blur.capture="close"
    :class="$style.wrapperContent"
    >
        <slot/>
    </div>
</div>
</template>
<style module>
.tooltip {
    position: relative;
}
.message {
    position: absolute;
    width: auto;
    border-radius: 10px;
    background-color: rgb(65, 65, 65);
    padding: 0.25rem 0.5rem;
    color: white;
    font-size: 0.5rem;
    white-space: nowrap;
    z-index: 9999;
}
.wrapperContent {
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    .message {
        display: none;
    }
}
</style>
