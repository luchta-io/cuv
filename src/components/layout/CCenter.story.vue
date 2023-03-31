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
    gutters: '1rem',
    andText: false,
    intrinsic: false,
})
</script>

<template>
    <Story title="Layouts / CCenter" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="max" auto-props-disabled>
            <c-box class="bg-gray-100" padding="none">
                <c-center
                :max="data.max"
                gutters="0"
                class="with-outline bg-white">
                    <div class="py-4 text-center">
                        cluster
                    </div>
                </c-center>

            </c-box>
            <template #controls>
                <HstText v-model="data.max" title="max"/>
            </template>
        </Variant>
        <Variant title="gutters" auto-props-disabled>
            <c-center
            :gutters="data.gutters"
            class="with-outline bg-yellow-200">
                <c-box padding="medium" class="bg-white flex items-center justify-center">
                    BOX
                </c-box>
            </c-center>
            <template #controls>
                <HstText v-model="data.gutters" title="gutters"/>
            </template>
        </Variant>
        <Variant title="andText" auto-props-disabled>
            <c-center
            gutters="0"
            :and-text="data.andText"
            class="with-outline">
                <p class="py-4">
                    あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
                </p>
            </c-center>
            <template #controls>
                <HstCheckbox v-model="data.andText" title="andText"/>
            </template>
        </Variant>
        <Variant title="intrinsic" auto-props-disabled>
            <c-center
            gutters="0"
            :intrinsic="data.intrinsic"
            class="with-outline">
                <c-box class="bg-yellow-200 flex items-center justify-center">
                    BOX
                </c-box>
            </c-center>
            <template #controls>
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
| andText | boolean | false | テキストも中央揃えにする場合は指定します(text-align: center) |
| intrinsic | boolean | false | 子要素をそのコンテンツ幅に基づいて中央揃えにする場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CCenter内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>