<script setup lang="ts">
import {reactive} from "vue";
import { mdiPlus, mdiMinus, mdiAccount, mdiAlert, mdiClose, mdiTab } from "@mdi/js";
import CSvgIcon from "@/components/dataDisplay/CSvgIcon.vue";
import CCenter from "@/components/layout/CCenter.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CButton from "@/components/containment/CButton.vue";

const data: {
    icon: string
    size: "small" | "medium" | "large"
} = reactive({
    icon: mdiPlus,
    size: 'medium',
})
</script>

<template>
<Story
    title="Data Display / CSvgIcon"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-center intrinsic>
            <c-svg-icon :icon="data.icon" :size="data.size"/>
        </c-center>
        <template #controls>
            <HstSelect
            v-model="data.icon"
            title="icon"
            :options="[
                {value: mdiPlus, label: 'mdiPlus'},
                {value: mdiMinus, label: 'mdiMinus'},
                {value: mdiAccount, label: 'mdiAccount'},
                {value: mdiAlert, label: 'mdiAlert'},
            ]"
            />
            <HstSelect
            v-model="data.size"
            title="size"
            :options="[
                {value: 'small', label: 'small'},
                {value: 'medium', label: 'medium'},
                {value: 'large', label: 'large'},
            ]"
            />
        </template>
    </Variant>
    <Variant title="ボタンに内包されたアイコン" auto-props-disabled>
        <c-center intrinsic>
            <c-button>
                <c-cluster space="0" align="center">
                    <c-svg-icon :icon="mdiClose"/>
                    キャンセル
                </c-cluster>
            </c-button>
        </c-center>
    </Variant>
    <Variant title="tabindex" auto-props-disabled>
        <c-center intrinsic>
            <c-svg-icon tabindex="0" :icon="mdiTab"/>
        </c-center>
    </Variant>
</Story>
</template>

<docs lang="md">
# CSvgIcon
material design iconなど、要素svgでアイコンを表示するためのコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| icon | string | '' | iconのpathを指定します |
| size | "small"/"medium"/"large" | "medium" | アイコンのサイズを指定します |


## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
