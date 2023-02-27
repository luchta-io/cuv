<script setup lang="ts">
import {reactive} from "vue";
import CCheckbox from "@/components/form/CCheckbox.vue";

const data: {
} = reactive({
})
</script>

<template>
<Story
    title="Form / CButton"
    :layout="{ type: 'grid', width: 200 }"
>

    <Variant title="基本" auto-props-disabled>
        <template #controls>
        </template>
    </Variant>

</Story>
</template>

<docs lang="md">
# CCheckbox

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
