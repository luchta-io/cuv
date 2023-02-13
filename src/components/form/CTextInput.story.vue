<script setup lang="ts">
import {reactive} from "vue";
import CTextInput from "@/components/form/CTextInput.vue";

const data: {
    入力値: string
} = reactive({
    入力値: '',
})
</script>

<template>
<Story
    title="Form / Input"
    :layout="{ type: 'grid', width: 200 }"
>
    <Variant title="基本" auto-props-disabled>
        <c-text-input 
            v-model="data.入力値"
        />
        <template #controls>
        </template>
    </Variant>

    <Variant title="非活性">
    </Variant>

    <Variant title="長いコンテンツ">
    </Variant>

</Story>
</template>

<docs lang="md">
# TextInput


## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
</docs>
