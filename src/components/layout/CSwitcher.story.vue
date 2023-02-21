<script setup lang="ts">
import { reactive } from 'vue';
import CSwitcher from '@/components/layout/CSwitcher.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    threshold: string
    space: string
    limit: number
} = reactive({
    threshold: "60ch",
    space: "1rem",
    limit: 4,
})
</script>

<template>
    <Story title="Layout / Switcher">
        <Variant auto-props-disabled>
            <c-switcher
                :threshold="data.threshold"
                :space="data.space"
                :limit="data.limit"
                class="with-outline"
            >
                <c-box v-for="n in 4" :key="n" bordered>
                    Box{{ n }}
                </c-box>
            </c-switcher>
            <template #controls>
                <HstText v-model="data.threshold" title="threshold"/>
                <HstText v-model="data.space" title="space"/>
                <HstNumber v-model="data.limit" title="limit"/>                
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CSwitcher
水平方向のレイアウトと垂直方向のレイアウトを切り替えたい時に有用なレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| threshold | string | "60ch" | cssのwidthの値(「コンテナのブレイクポイント」を表す) |
| space | string | "1rem" | cssの要素間のスペースを表すmarginの値 |
| limit | number | 4(max10) | 水平方向のレイアウトで受け入れられる最大の項目数 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CSwitcher内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>