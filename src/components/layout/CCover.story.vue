<script setup lang="ts">
import { reactive } from 'vue';
import CCover from '@/components/layout/CCover.vue';

const data: {
    centered: string
    space: string
    minHeight: string
    noPad: boolean
} = reactive({
    centered: "div",
    space: "1rem",
    minHeight: "100vh",
    noPad: false,
})

</script>

<template>
    <Story title="Layout / Cover">
        <Variant auto-props-disabled>
            <c-cover
                :centered="data.centered"
                :space="data.space"
                :min-height="data.minHeight"
                :no-pad="data.noPad"
                class="with-outline"
            >
                <h1 class="text-3xl">H1</h1>
                <h2 class="text-2xl">H2</h2>
                <div>
                Div
                </div>
                <h3 class="text-xl">H3</h3>
                <p>
                P
                </p>
            </c-cover>
            <template #controls>
                <HstText v-model="data.centered" title="centered"/>
                <HstText v-model="data.space" title="space"/>
                <HstText v-model="data.minHeight" title="minHeight"/>
                <HstCheckbox v-model="data.noPad" title="noPad"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CCover
内包された要素を、垂直方向に中央揃えするかどうかを指定でき、
また、トップ/ヘッダーおよびボトム/フッター要素に対応できるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| centered | string | 'div' | 単純なセレクタとしてCover内に中央揃えされる主要素を指定 |
| space | string | '1rem' | すべての子要素の間や周囲にできる最小のスペース |
| minHeight | string | '100vh' | コンポーネントの最小の高さ |
| noPad | boolean | false | コンテナ要素のpaddingにもスペースを適用するかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CCover内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>