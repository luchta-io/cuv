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
    noBar: true,
})
</script>

<template>
    <Story title="Layout / CReel" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="itemWidth" auto-props-disabled>
            <c-reel
                :item-width="data.itemWidth"
                class="with-outline"
            >
                <c-box v-for="n of 10" :key="n" class="bg-yellow-200">
                BOX {{ n }}
                </c-box>
            </c-reel>
            <template #controls>
                <HstText v-model="data.itemWidth" title="itemWidth"/>
            </template>
        </Variant>
        <Variant title="space" auto-props-disabled>
            <c-reel
                :space="data.space"
                class="with-outline bg-yellow-200"
            >
                <c-box v-for="n of 10" :key="n" class="bg-white">
                    BOX {{ n }}
                </c-box>
            </c-reel>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
            </template>
        </Variant>
        <Variant title="height" auto-props-disabled>
            Reelの高さは、「{{ data.height }}」が指定されています

            <c-reel
                :height="data.height"
                class="with-outline"
            >
                <c-box v-for="n of 10" :key="n" bordered>
                    BOX {{ n }}
                </c-box>
            </c-reel>
            <template #controls>
                <HstText v-model="data.height" title="height"/>
            </template>
        </Variant>
        <Variant title="noBar" auto-props-disabled>
            <c-reel
                :no-bar="data.noBar"
                class="with-outline"
            >
                <c-box v-for="n of 10" :key="n" bordered>
                    BOX {{ n }}
                </c-box>
            </c-reel>
            <template #controls>
                <HstCheckbox v-model="data.noBar" title="noBar"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CReel
カルーセルやスライダーコンポーネントなどに対処することができるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| itemWidth | string | 'auto' | 各項目(子要素)の幅 |
| space | string | '1rem' | 各項目(子要素)間とReelのmarginのスペース |
| height | string | 'auto' | Reel自体の高さ |
| noBar | boolean | false | スクロールバーを表示しない場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CReel内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>