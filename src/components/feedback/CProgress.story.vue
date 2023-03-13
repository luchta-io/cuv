<script setup lang="ts">
import {reactive} from "vue";
import CProgress from "@/components/feedback/CProgress.vue";
import CCluster from "@/components/layout/CCluster.vue";
const data: {
    size: 'default' | 'small' | 'large'
    width: 'default' | 'thin' | 'thick'
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    size: 'default',
    width: 'default',
    color: 'black',
})
</script>

<template>
<Story
    title="Feedback / CProgress"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-cluster align="center" justify="center">
            <c-progress
            :size="data.size"
            :width="data.width"
            :color="data.color"/>
        </c-cluster>
        <template #controls>
            <HstSelect
            v-model="data.size"
            title="size"
            :options="[
                        {value: 'default', label: 'default'},
                        {value: 'small', label: 'small'},
                        {value: 'large', label: 'large'},
                    ]"
            />
            <HstSelect
            v-model="data.width"
            title="width"
            :options="[
                        {value: 'default', label: 'default'},
                        {value: 'thin', label: 'thin'},
                        {value: 'thick', label: 'thick'},
                    ]"
            />
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
        </template>
    </Variant>
    <Variant title="size" auto-props-disabled>
        <c-cluster align="center" justify="center">
            <c-progress/>
            <c-progress size="small"/>
            <c-progress size="large"/>
        </c-cluster>
    </Variant>
    <Variant title="width" auto-props-disabled>
        <c-cluster align="center" justify="center">
            <c-progress/>
            <c-progress width="thin"/>
            <c-progress width="thick"/>
        </c-cluster>
    </Variant>
    <Variant title="color" auto-props-disabled>
        <c-cluster align="center" justify="center">
            <c-progress color="primary"/>
            <c-progress color="link"/>
            <c-progress color="success"/>
            <c-progress color="danger"/>
            <c-progress color="warning"/>
            <c-progress color="info"/>
        </c-cluster>
    </Variant>
</Story>
</template>

<docs lang="md">
# CProgress
ユーザの操作をブロックする必要があるときに、ユーザーへ伝える手段として有用なコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | 'default' / 'small' / 'large' | 'default' | サイズを指定します |
| width | 'default' / 'thin' / 'thick' | 'default' | コンポーネントの太さを指定します |
| color | 'white' / 'black' / 'light' / 'dark' / 'primary' / 'link' / 'success' / 'danger' / 'warning' / 'info' | 'black' | コンポーネントの色を指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
