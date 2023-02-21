<script setup lang="ts">
import CGrid from '@/components/layout/CGrid.vue';
import CBox from '@/components/layout/CBox.vue';
import { reactive } from 'vue';

const data: {
    min: string
    space: string
} = reactive({
    min: "60ch",
    space: "1rem",
})
</script>

<template>
    <Story title="Layout / Grid">
        <Variant auto-props-disabled>
            <c-grid
                :min="data.min"
                :space="data.space"
                class="with-outline"
            >
                <c-box v-for="n in 20" :key="n" bordered> BOX </c-box>
            </c-grid>
            <template #controls>
                <HstText v-model="data.min" title="min"/>
                <HstText v-model="data.space" title="space"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CGrid
各コンポーネントを扱うカードコンポーネントのコンポジションを簡単に作成できるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| min | string | "60vh" | minmax(min(x, 100%), 1fr)のxを表す、cssの長さの値 |
| space | string | "1rem" | グリッドセル間のスペースを表すgapの値 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CGrid内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>