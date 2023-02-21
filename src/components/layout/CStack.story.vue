<script setup lang="ts">
import { reactive } from 'vue';
import CStack from '@/components/layout/CStack.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    space: string
    recursive: boolean
    splitAfter: number
} = reactive({
    space: "1rem",
    recursive: false,
    splitAfter: 2,
})

</script>

<template>
    <Story title="Layout / Stack">
        <Variant title="基本" auto-props-disabled>
            <c-stack
                :space="data.space"
                :recursive="data.recursive"
                :split-after="data.splitAfter"
                class="with-outline"
            >
                <c-box bordered>BOX</c-box>
                <c-box bordered>BOX</c-box>
                <c-box bordered>BOX</c-box>
                <c-box bordered>
                    <c-box bordered>Nested BOX</c-box>
                    <c-box bordered>Nested BOX</c-box>
                </c-box>
                <c-stack class="with-outline">
                    <c-box bordered>Nested Stack BOX</c-box>
                    <c-box bordered>Nested Stack BOX</c-box>
                </c-stack>
            </c-stack>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
                <HstCheckbox v-model="data.recursive" title="recursive"/>
                <HstNumber v-model="data.splitAfter" title="splitAfter"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CStack
要素を積み重ねる時に有用なレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| space | string | "1rem" | 要素間のスペースを指定するmarginの値 |
| recursive | boolean | false | スペースが再帰的に(入れ子階層に関係なく)適用されるか |
| splitAfter | number | 0(max10) | Stackを区分けするために後ろにautoマージンを適用する要素の位置 |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CStack内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>