<script setup lang="ts">
import { reactive } from 'vue';
import CSwitcher from '@/components/layout/CSwitcher.vue';
import CBox from '@/components/layout/CBox.vue';
import CButton from '@/components/form/CButton.vue';

const data: {
    threshold: string
    space: string
    limit: number
    boxes: number
} = reactive({
    threshold: "60ch",
    space: "1rem",
    limit: 4,
    boxes: 4,
})
</script>

<template>
    <Story title="Layout / CSwitcher" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="threshold" auto-props-disabled>
            <c-switcher
                :threshold="data.threshold"
                :limit="5"
                class="with-outline"
            >
                <c-box v-for="n in 5" :key="n" bordered>
                    Box{{ n }}
                </c-box>
            </c-switcher>
            <template #controls>
                <HstText v-model="data.threshold" title="threshold"/>
            </template>
        </Variant>
        <Variant title="space" auto-props-disabled>
            <c-switcher
                :space="data.space"
                class="with-outline bg-yellow-200"
            >
                <c-box v-for="n in 4" :key="n" bordered class="bg-white">
                    Box{{ n }}
                </c-box>
            </c-switcher>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
            </template>
        </Variant>
        <Variant title="limit" auto-props-disabled>
            <c-box>
                Boxの数：
                <c-button @click="data.boxes--">-</c-button>
                {{ data.boxes }}
                <c-button @click="data.boxes++">+</c-button>
            </c-box>
            <c-switcher
                :limit="data.limit"
                class="with-outline"
            >
                <c-box v-for="n in data.boxes" :key="n" bordered>
                    Box{{ n }}
                </c-box>
            </c-switcher>
            <template #controls>
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