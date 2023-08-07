<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiAccount, mdiAccountCircle } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CCard from "@/components/containment/CCard.vue";

const data: {
} = reactive({
})

</script>

<template>
<Story
    title="Containment / CCard"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CCard/>
        <template #controls>
        <!-- <HstSelect
            v-model="data.color"
            title="Color"
            :options="[
                        {value: 'white', label: 'white'},
                        {value: 'black', label: 'black'},
                        {value: 'light', label: 'light'},
                        {value: 'dark', label: 'dark'},
                        {value: 'primary', label: 'primary'},
                        {value: 'link', label: 'link'},
                        {value: 'success', label: 'success'},
                        {value: 'danger', label: 'danger'},
                        {value: 'warning', label: 'warning'},
                        {value: 'info', label: 'info'},
                    ]"
        />
        <HstSelect
            v-model="data.density"
            title="density"
            :options="[
                        {value: 'default', label: 'default'},
                        {value: 'comfortable', label: 'comfortable'},
                        {value: 'compact', label: 'compact'},
                    ]"
            />
        <HstSelect
            v-model="data.elevation"
            title="elevation"
            :options="[
                        {value: undefined, label: 'undefined'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                    ]"
        />
        <HstSelect
            v-model="data.size"
            title="size"
            :options="[
                        {value: 'x-small', label: 'x-small'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                        {value: 'x-large', label: 'x-large'},
                    ]"
        />
        <HstSelect
            v-model="data.rounded"
            title="rounded"
            :options="[
                        {value: 'none', label: 'none'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                        {value: 'x-large', label: 'x-large'},
                        {value: 'circle', label: 'circle'},
                    ]"
        />

        <HstSelect
            v-model="data.variant"
            title="variant"
            :options="[
                        {value: 'text', label: 'text'},
                        {value: 'flat', label: 'flat'},
                        {value: 'elevated', label: 'elevated'},
                        {value: 'tonal', label: 'tonal'},
                        {value: 'outlined', label: 'outlined'},
                        {value: 'plain', label: 'plain'},
                    ]"
        />

        <HstCheckbox
            v-model="data.icon"
            title="icon"
        />    
        <HstCheckbox v-model="data.prependIcon" title="prepend-icon"/>
        <HstCheckbox v-model="data.appendIcon" title="append-icon"/>
 -->
        </template>
    </Variant>
</Story>
</template>

<docs lang="md">
# CButton

基本的なボタン部品です。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | コンポーネントの右側に表示させるiconを指定します |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | ボタンの色を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| disabled | boolean | false | 非活性にする場合は指定します |
| elevation | 'small' \| 'medium' \| 'large' | undefined | 影をつける場合に指定します |
| icon | string | undefined | iconを指定します |
| id | string | undefined | idを指定します |
| name | string | undefined | nameを指定します |
| prependIcon | string | undefined | コンポーネントの左側に表示させるiconを指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'circle' | コンポーネントの`border-radius`を指定します |
| size | 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' | "medium" | サイズを指定します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'tonal' | コンポーネントに個別のスタイルを適用します |


## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | ボタンに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
