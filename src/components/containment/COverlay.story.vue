<script setup lang="ts">
import {reactive, watchEffect} from "vue";
import CButton from "@/components/containment/CButton.vue";
import COverlay from "@/components/containment/COverlay.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CCenter from "@/components/layout/CCenter.vue";
import CProgress from "@/components/feedback/CProgress.vue";

const data: {
    active: boolean
} = reactive({
    active: false
})
const contained: {
    active: boolean
    contained: boolean
} = reactive({
    active: false,
    contained: true,
})
const disabled: {
    active: boolean
    disabled: boolean
} = reactive({
    active: false,
    disabled: true,
})
const loading: {
    active: boolean
} = reactive({
    active: false,
})

watchEffect(() => {
    loading.active && setTimeout(() => {
        loading.active = false
    }, 3000)
})

</script>

<template>
<Story
    title="Containment / COverlay"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-center intrinsic>
            <c-button @click="data.active = true">overlayを表示</c-button>
        </c-center>
        <c-overlay v-model="data.active"/>
        <template #controls>
            <HstCheckbox v-model="data.active" title="modelValue"/>
        </template>
    </Variant>

    <Variant title="contained" auto-props-disabled>
        <c-box>
            <c-cluster justify="center">
                <div class="relative p-4 h-60 w-60 shadow-lg">
                    <c-cluster justify="center">
                        <c-button @click="contained.active = true" color="success">
                            overlayを表示
                        </c-button>
                    </c-cluster>
                    <c-overlay v-model="contained.active" contained>
                        <c-cluster justify="center" align="center">
                            <c-button @click="contained.active=false">閉じる</c-button>
                        </c-cluster>
                    </c-overlay>
                </div>    
            </c-cluster>
        </c-box>
        <template #controls>
            <HstCheckbox v-model="contained.active" title="modelValue"/>
            <HstCheckbox v-model="contained.contained" title="contained"/>
        </template>
    </Variant>

    <Variant title="disabled" auto-props-disabled>
        <c-center intrinsic>
            <c-button @click="disabled.active = true" color="dark">overlayを表示</c-button>
        </c-center>
        <c-overlay v-model="disabled.active" :disabled="disabled.disabled">
            <c-center>
                <c-button @click="disabled.active=false">
                    閉じる
                </c-button>
            </c-center>
        </c-overlay>
        <template #controls>
            <HstCheckbox v-model="disabled.active" title="modelValue"/>
            <HstCheckbox v-model="disabled.disabled" title="disabled"/>
        </template>
    </Variant>

    <Variant title="Loading" auto-props-disabled>
        <c-center intrinsic>
            <c-button @click="loading.active = true" color="link">Loadingを開始</c-button>
        </c-center>
        <c-overlay v-model="loading.active" disabled>
            <c-center>
                <c-progress color="link"/>
            </c-center>
        </c-overlay>
    </Variant>
</Story>
</template>

<docs lang="md">
# COverlay
ユーザーの操作を制限するために、ページ等に重ねることが可能なコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | boolean | false | コンポーネントを表示する場合は指定します |
| contained | boolean | false | コンポーネントを親のサイズに制限する場合は指定します(position: absolute;) |
| disabled | boolean | false | コンポーネントをクリックする機能を削除する場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | コンポーネント内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
