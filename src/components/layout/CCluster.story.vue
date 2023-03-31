<script setup lang="ts">
import { reactive } from 'vue';
import CBox from '@/components/layout/CBox.vue';
import CCluster from '@/components/layout/CCluster.vue';

const cluster: {
    justify: 'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'space-evenly';
    align: 'flex-start'|'flex-end'|'center'|'baseline'|'stretch';
    space: string
} = reactive({
    justify: 'flex-start',
    align: 'flex-start',
    space: '1rem'
})

</script>

<template>
    <Story title="Layouts / CCluster" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="justify" auto-props-disabled>
            <c-cluster
            :justify="cluster.justify"
            class="with-outline">
                <c-box v-for="n in 3" :key="n" class="bg-yellow-200" padding="large">
                    BOX{{ n }}
                </c-box>
            </c-cluster>
            <template #controls>
                <HstSelect
                v-model="cluster.justify"
                title="justify"
                :options="[
                    { value: 'flex-start', label: 'flex-start' },
                    { value: 'flex-end', label: 'flex-end' },
                    { value: 'center', label: 'center' },
                    { value: 'space-between', label: 'space-between' },
                    { value: 'space-around', label: 'space-around' },
                    { value: 'space-evenly', label: 'space-evenly' },
                ]"
                />
            </template>
        </Variant>
        <Variant title="align" auto-props-disabled>
            <c-cluster
            :align="cluster.align"
            class="with-outline">
                <c-box padding="large" class="py-4 bg-yellow-200 flex items-center justify-center flex-1">BOX1</c-box>
                <c-box padding="large" class="py-12 bg-yellow-200 flex items-center justify-center flex-1">BOX2</c-box>
                <c-box padding="large" class="py-8 bg-yellow-200 flex items-center justify-center flex-1">BOX3</c-box>
            </c-cluster>
            <template #controls>
                <HstSelect
                v-model="cluster.align"
                title="align"
                :options="[
                    { value: 'flex-start', label: 'flex-start' },
                    { value: 'flex-end', label: 'flex-end' },
                    { value: 'center', label: 'center' },
                    { value: 'baseline', label: 'baseline' },
                    { value: 'stretch', label: 'stretch' },
                ]"
                />
            </template>
        </Variant>
        <Variant title="space" auto-props-disabled>
            <c-cluster
            :space="cluster.space"
            class="with-outline bg-yellow-200">
                <c-box v-for="n in 3" :key="n" class="bg-white flex-1">
                    BOX{{ n }}
                </c-box>
            </c-cluster>
            <template #controls>
                <HstText v-model="cluster.space" title="space"/>
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
| justify | 'flex-start'/'flex-end'/'center'/'space-between'/'space-around'/'space-evenly' | 'flex-start' | cssのjustify-contentの値 |
| align | 'flex-start'/'flex-end'/'center'/'baseline'/'stretch' | 'flex-start' | cssのalign-itemの値 |
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
