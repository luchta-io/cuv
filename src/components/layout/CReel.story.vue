<script setup lang="ts">
import { reactive } from 'vue';
import CReel from '@/components/layout/CReel.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    itemWidth: string
    space: string
    height: string
    noBar: boolean
} = reactive({
    itemWidth: 'auto',
    space: '1rem',
    height: 'auto',
    noBar: false,
})
</script>

<template>
    <Story title="Layout / Reel" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="基本" auto-props-disabled>
            <c-reel
                :item-width="data.itemWidth"
                :space="data.space"
                :height="data.height"
                :no-bar="data.noBar"
                class="with-outline"
            >
                <c-box
                bordered
                v-for="n of 10"
                :key="n"
                >
                BOX {{ n }}
                </c-box>
            </c-reel>
            <template #controls>
                <HstText v-model="data.itemWidth" title="itemWidth"/>
                <HstText v-model="data.space" title="space"/>
                <HstText v-model="data.height" title="height"/>
                <HstCheckbox v-model="data.noBar" title="noBar"/>
            </template>
        </Variant>
        <Variant title="スクロールバー非表示">
            <c-reel
                no-bar
                class="with-outline"
            >
                <c-box
                bordered
                v-for="n of 10"
                :key="n"
                >
                BOX {{ n }}
                </c-box>
            </c-reel>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CReel
カルーセルやスライダーコンポーネントなどに対処することができるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| itemWidth | string | "auto" | 各項目(子要素)の幅 |
| space | string | "1rem" | 各項目(子要素)間とReelのmarginのスペース |
| height | string | "auto" | Reel自体の高さ |
| noBar | boolean | false | スクロールバーを表示するかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CReel内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>