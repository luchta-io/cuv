<script setup lang="ts">
import {reactive} from "vue";
import CButton from "@/components/containment/CButton.vue";
import CTooltip from "@/components/containment/CTooltip.vue";

const data: {
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    outlined: boolean
} = reactive({
    color: 'light',
    outlined: false,
})
</script>

<template>
<Story
    title="Containment / CTooltip"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CTooltip msg="Tooltip">
            <CButton>Tooltipを表示</CButton>
        </CTooltip>
        <template #controls>
        </template>
    </Variant>

</Story>
</template>

<docs lang="md">
# CTooltip
要素の上にマウスを移動させた時に、情報を伝えるのに役立つコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | ボタンの色を指定します |
| outlined | boolean | false | ボタンの見た目をアウトラインボタンにする場合は指定します |
| id | string | undefined | idを指定します |
| name | string | undefined | nameを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | ボタンに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
