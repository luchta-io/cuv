<script setup lang="ts">
import {reactive} from "vue";
import CSheet from "@/components/containment/CSheet.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";

const data: {
    border: boolean
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    height: string|undefined
    position: 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'|undefined
    rounded: 'small'|'medium'|'large'|undefined
    tag: string
    width: string|undefined
} = reactive({
    border: false,
    color: 'light',
    height: '200px',
    position: undefined,
    rounded: undefined,
    tag: 'div',
    width: '200px', 
})
</script>

<template>
<Story
    title="Containment / CSheet"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-box>
            <c-cluster justify="center">
                <c-sheet
                :border="data.border"
                :color="data.color"
                :height="data.height"
                :width="data.width">
                </c-sheet>
            </c-cluster>
        </c-box>
        <template #controls>
            <HstCheckbox v-model="data.border" title="border" />
            <HstSelect
            v-model="data.color"
            title="color"
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
            <HstText v-model="data.width" title="width"/>
            <HstText v-model="data.height" title="height"/>
        </template>
    </Variant>
    <Variant title="elevation" auto-props-disabled>
        <c-box>
            <c-cluster justify="space-around">
                <c-sheet
                color="light"
                elevation="small"
                height="100px"
                width="100px">
                </c-sheet>
                <c-sheet
                color="light"
                elevation="medium"
                height="100px"
                width="100px">
                </c-sheet>
                <c-sheet
                color="light"
                elevation="large"
                height="100px"
                width="100px">
                </c-sheet>
            </c-cluster>
        </c-box>
    </Variant>
    <Variant title="rounded" auto-props-disabled>
        <c-box>
            <c-cluster justify="space-around">
                <c-sheet
                color="dark"
                rounded="small"
                height="100px"
                width="100px">
                </c-sheet>
                <c-sheet
                color="dark"
                rounded="medium"
                height="100px"
                width="100px">
                </c-sheet>
                <c-sheet
                color="dark"
                rounded="large"
                height="100px"
                width="100px">
                </c-sheet>
            </c-cluster>
        </c-box>
    </Variant>

</Story>
</template>

<docs lang="md">
# CSheet
汎用的なSheetコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| border | boolean | false | colorが指定されている場合、背景色を無効にして指定されたcolorのborderを有効にします |
| color | 'white' / 'black' / 'light' / 'dark' / 'primary' / 'link' / 'success' / 'danger' / 'warning' / 'info' | undefined | 色を指定します |
| elevation | 'small' / 'medium' / 'large' | undefined | 影をつける場合に指定します |
| height | string / number | undefined | コンポーネントの高さ(height)を指定できます |
| maxHeight | string / number | undefined | コンポーネントのmax-heightを指定できます |
| maxWidth | string / number | undefined | コンポーネントのmax-widthを指定できます |
| minHeight | string / number | undefined | コンポーネントのmin-heightを指定できます |
| minWidth | string / number | undefined | コンポーネントのmin-widthを指定できます |
| position | 'relative' / 'absolute' / 'static' / 'fixed' / 'sticky' | undefined | styleのpositionを指定できます |
| rounded | 'small' / 'medium' / 'large' | undefined | コンポーネントの角を丸める場合に指定できます |
| tag | string | 'div' | コンポーネントのタグを指定できます |
| width | string / number | undefined | コンポーネントの幅(width)を指定できます |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | コンポーネント内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
