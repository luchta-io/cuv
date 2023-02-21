<script setup lang="ts">
import { reactive } from 'vue';
import CBox from '@/components/layout/CBox.vue';
import CCluster from '@/components/layout/CCluster.vue';

const cluster: {
    justify: string;
    align: string;
    space: string
} = reactive({
    justify: 'start',
    align: 'start',
    space: '1rem'
})

const nestCluster: {
    justify: string;
    align: string;
    space: string
} = reactive({
    justify: 'start',
    align: 'start',
    space: '1rem'
})

</script>

<template>
    <Story title="Layout / Cluster">
        <Variant auto-props-disabled>
            <c-cluster
            :justify="cluster.justify"
            :align="cluster.align"
            :space="cluster.space"
            class="with-outline">
                <p>あいうえお</p>
                <c-box bordered>BOX</c-box>
                <c-box bordered>BOX</c-box>
                <c-cluster
                :justify="nestCluster.justify"
                :align="nestCluster.align"
                :space="nestCluster.space"
                class="with-outline">
                    <p>あいうえお</p>
                    <c-box bordered>Nested Cluster BOX</c-box>
                </c-cluster>
            </c-cluster>
            <template #controls>
                <c-box>
                    <div class="text-lg font-bold">Cluster</div>
                    <HstText v-model="cluster.justify" title="justify"/>
                    <HstText v-model="cluster.align" title="align"/>
                    <HstText v-model="cluster.space" title="space"/>
                </c-box>
                <c-box>
                    <div class="text-lg font-bold">Nested Cluster</div>
                    <HstText v-model="nestCluster.justify" title="justify"/>
                    <HstText v-model="nestCluster.align" title="align"/>
                    <HstText v-model="nestCluster.space" title="space"/>
                </c-box>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CCluster
要素のグループを水平にレイアウトし、左右または中央に整列させるレイアウト部品です。
長さが異なり、折り返しが発生しやすい要素のグループに適しています。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| justify | string | 'start' | cssのjustify-contentの値 |
| align | string | 'start' | cssのalign-itemの値 |
| space | string | '1rem' | cssのgapの値。グループ化された子要素間にできる最小のスペースの値 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CCluster内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>
