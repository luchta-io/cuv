<script setup lang="ts">
import { reactive } from 'vue';
import CSidebar from '@/components/layout/CSidebar.vue';
import CBox from '@/components/layout/CBox.vue';
import CStack from '@/components/layout/CStack.vue';

const data: {
    side: "left"|"right"
    sideWidth: string
    contentMin: string
    space: string
    noStretch: boolean
} = reactive({
    side: "left",
    sideWidth: "auto",
    contentMin: "50%",
    space: "1rem",
    noStretch: false,
})
</script>

<template>
    <Story title="Layout / Sidebar" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="基本" auto-props-disabled>
            <c-sidebar
            :side="data.side"
            :side-width="data.sideWidth"
            :content-min="data.contentMin"
            :space="data.space"
            :no-stretch="data.noStretch"
            class="with-outline"
            >
                <c-box bordered>
                    Side Box
                    <c-stack>
                        <span>Stack item1</span>
                        <span>Stack item2</span>
                    </c-stack>
                </c-box>
                <c-box bordered>
                    content Box
                </c-box>
            </c-sidebar>
            <template #controls>
                <HstSelect
                    v-model="data.side"
                    title="side"
                    :options="[
                        {value: 'left', label: 'left'},
                        {value: 'right', label: 'right'},
                    ]"
                />
                <HstText v-model="data.sideWidth" title="sideWidth"/>
                <HstText v-model="data.contentMin" title="contentMin"/>
                <HstText v-model="data.space" title="space"/>
                <HstCheckbox v-model="data.noStretch" title="noStretch"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CSidebar
二つの要素をレイアウトするためのコンポーネントです。
十分なスペースがあるとき(広いコンテキスト)は、横並びに配置されます。
この時、サイドバーの幅が固定され、残りの利用可能なスペース全てをメイン要素(サイドバーではない方の要素)が占有します。
狭いコンテキストの場合に、垂直方向に折り返されると、それぞれの要素の幅が共通のコンテナの100%を占めるようになります。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| side | "left"/"right" | "left" | 左右どちらかの要素をサイドバーとして処理します |
| sideWidth | string | "auto" | 垂直方向の配置におけるサイドバーの幅 |
| contentMin | string | "50%" | cssのパーセンテージの値。水平方向の配置の場合のコンテンツの最小値 |
| space | string | "1rem" | 二つの要素間のスペースを表すcssのmarginの値 |
| noStretch | boolean | false | 垂直方向の配置において、要素の本来の(コンテンツに応じた)高さになるようにするか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CSidebar内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>