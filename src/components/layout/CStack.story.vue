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
    recursive: true,
    splitAfter: 1,
})

</script>

<template>
    <Story title="Layout / CStack">
        <Variant title="space" auto-props-disabled>
            <c-stack
                :space="data.space"
                class="with-outline bg-yellow-200"
            >
                <c-box v-for="n in 5" :key="n" class="bg-white">
                    BOX{{ n }}
                </c-box>
            </c-stack>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
            </template>
        </Variant>
        <Variant title="recursive" auto-props-disabled>
            <c-stack
                :recursive="data.recursive"
                class="with-outline"
            >
                <c-box bordered>BOX</c-box>
                <c-box bordered>
                    BOX
                    <c-box padding="none" class="bg-yellow-200">
                        <c-box bordered class="bg-white">Nested BOX</c-box>
                        <c-box bordered class="bg-white">Nested BOX</c-box>
                    </c-box>
                </c-box>
                <c-box bordered>BOX</c-box>
            </c-stack>
            <template #controls>
                <HstCheckbox v-model="data.recursive" title="recursive"/>
            </template>
        </Variant>
        <Variant title="splitAfter" auto-props-disabled>
            <div class="h-screen">
                <c-stack
                    :split-after="data.splitAfter"
                    class="with-outline"
                >
                    <c-box v-for="n in 10" :key="n" bordered>
                        BOX{{ n }}
                    </c-box>
                </c-stack>
            </div>
            <template #controls>
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
| space | string | '1rem' | 要素間のスペースを指定するmarginの値 |
| recursive | boolean | false | スペースが再帰的に(入れ子階層に関係なく)適用させたい場合は指定します |
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