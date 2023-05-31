<script setup lang="ts">
import {reactive} from "vue";

const data: {
} = reactive({
})
</script>

<template>
<Story
    title="Images & Icons / CAvatar"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <template #controls>
        </template>
    </Variant>
</Story>
</template>

<docs lang="md">
# CAvatar
プロフィール写真を表示する際など、コンテナの中にコンテンツを表示するためのコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | string | '' | iconのpathを指定します |
| size | "small"/"medium"/"large" | "medium" | アイコンのサイズを指定します |


## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
