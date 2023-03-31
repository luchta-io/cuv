<script setup lang="ts">
import { reactive } from 'vue';
import CGrid from '@/components/layout/CGrid.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    min: string
    space: string
} = reactive({
    min: "60ch",
    space: "1rem",
})
</script>

<template>
    <Story title="Layouts / CGrid" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="min" auto-props-disabled>
            <c-grid
                :min="data.min"
                class="with-outline"
            >
                <c-box v-for="n in 10" :key="n" class="bg-yellow-200">
                    BOX{{ n }} 
                </c-box>
            </c-grid>
            <template #controls>
                <HstText v-model="data.min" title="min"/>
            </template>
        </Variant>
        <Variant title="space" auto-props-disabled>
            <c-grid
                min="200px"
                :space="data.space"
                class="with-outline bg-yellow-200"
            >
                <c-box v-for="n in 10" :key="n" class="bg-white">
                    BOX{{ n }}
                </c-box>
            </c-grid>
            <template #controls>
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
| min | string | '60ch' | minmax(min(x, 100%), 1fr)のxを表す、cssの長さの値 |
| space | string | '1rem' | グリッドセル間のスペースを表すgapの値 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CGrid内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>