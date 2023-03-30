<script setup lang="ts">
import { reactive } from 'vue';
import CIcon from '@/components/layout/CIcon.vue';
import CButton from '@/components/containment/CButton.vue';

const data: {
    space: string
    label: string
} = reactive({
    space:"0px",
    label: "",
})
</script>

<template>
    <Story title="Layouts / CIcon" :layout="{ type: 'grid', width: 300 }">
        <Variant title="Iconコンポーネントのみ" auto-props-disabled>
            <c-icon
            :space="data.space"
            :label="data.label"
            class="with-outline"
            >
                <svg>
                    <use href="@/assets/icons.svg#hamburger" />
                </svg>
                Icon only
            </c-icon>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
                <HstText v-model="data.label" title="label"/>                
            </template>
        </Variant>
        <Variant title="Iconとテキストを内包したボタン">
            <c-button>
                <c-icon
                    class="with-outline"
                >
                    <svg>
                        <use href="@/assets/icons.svg#cross" />
                    </svg>
                    with Button
                </c-icon>
            </c-button>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CIcon
アイコンにテキストを付け加えるときに使用するレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| space | string | '0px' | テキストとアイコンとの間のスペース |
| label | string | '' | 要素を画像として扱い、この値のaria-labelを追加します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CIcon内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>