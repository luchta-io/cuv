<script setup lang="ts">
import { reactive } from 'vue';
import CFrame from '@/components/layout/CFrame.vue';

const data: {
    ratio: string
} = reactive({
    ratio: '16:9'
})
</script>

<template>
    <Story 
    title="Layout / CFrame"
    :layout="{
        type: 'grid',
        width: 300,
    }">
        <Variant title="Frame有り" auto-props-disabled>
            <c-frame
            :ratio="data.ratio"
            class="with-outline"
            >
                <img
                    src="@/assets/alberta-gf9d16eebb_1920.jpeg"
                    alt="alberta picture"
                >
            </c-frame>
            <template #controls>
                <HstText v-model="data.ratio" title="ratio"/>
            </template>
        </Variant>
        <Variant title="Frame無し">
            <img
            src="@/assets/alberta-gf9d16eebb_1920.jpeg"
            alt="alberta picture"
            >
        </Variant>
    </Story>
</template>
<docs lang="md">
# CFrame
メディア(動画や画像)が指定したアスペクト比になるようにクロップするためのレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| ratio | string | "16:9" | 要素のアスペクト比 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CFrame内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>