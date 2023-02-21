<script setup lang="ts">
import { reactive } from 'vue';
import CBox from '@/components/layout/CBox.vue';
import CCenter from '@/components/layout/CCenter.vue';

const data: {
    max: string
    gutters: string
    andText: boolean
    intrinsic: boolean
} = reactive({
    max: '100%',
    gutters: '5rem',
    andText: false,
    intrinsic: false,
})
</script>

<template>
    <Story title="Layout / Center" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="基本" auto-props-disabled>
            <c-center
            :max="data.max"
            :gutters="data.gutters"
            :and-text="data.andText"
            :intrinsic="data.intrinsic"
            class="with-outline">
                <p>
                    あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
                </p>
                <c-box bordered>
                    BOX
                </c-box>
                <c-center class="with-outline">
                    <c-box bordered>
                        Nested Center BOX
                    </c-box>
                </c-center>
            </c-center>
            <template #controls>
                <HstText v-model="data.max" title="max"/>
                <HstText v-model="data.gutters" title="gutters"/>
                <HstCheckbox v-model="data.andText" title="andText"/>
                <HstCheckbox v-model="data.intrinsic" title="intrinsic"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CCenter
水平方向の中央揃えを行うためのレイアウト部品です。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| max | string | '100%' | cssのmax-widthの値 |
| gutters | string | '1rem' | コンテンツの両端の最小限のスペース|
| andText | boolean | false | テキストも中央揃えにするかどうか(text-align: center) |
| intrinsic | boolean | false | 子要素をそのコンテンツ幅に基づいて中央揃えにさせるか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CCenter内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>