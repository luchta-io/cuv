<script setup lang="ts">
import {reactive} from "vue";
import { mdiCart } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CTooltip from "@/components/containment/CTooltip.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CStack from "@/components/layout/CStack.vue";
import CSvgIcon from "@/components/images/CSvgIcon.vue";
import CAvatar from "@/components/images/CAvatar.vue";

const data: {
    text: string
    modelValue: boolean
    disabled: boolean
} = reactive({
    text: 'Tooltip',
    modelValue: false,
    disabled: false,
})

const custom: {
    show: boolean
} = reactive({
    show: false,
})
</script>

<template>
<Story
    title="Containment / CTooltip"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox padding="large">
            <CCluster justify="center">
                <CTooltip :text="data.text" v-model="data.modelValue" :disabled="data.disabled">
                    <template #activator>
                        <CButton>Tooltipを表示</CButton>
                    </template>
                </CTooltip>
            </CCluster>
        </CBox>
        <template #controls>
            <HstText v-model="data.text" title="text"/>
            <HstCheckbox v-model="data.modelValue" title="modelValue"/>
            <HstCheckbox v-model="data.disabled" title="disabled"/>
        </template>
    </Variant>
    <Variant title="位置" auto-props-disabled>
        <CBox padding="large">
            <CCluster justify="space-around">
                <CTooltip text="Tooltip" location="start">
                    <template #activator>
                        <CButton>START</CButton>
                    </template>
                </CTooltip>
                <CTooltip text="Tooltip" location="end">
                    <template #activator>
                        <CButton>END</CButton>
                    </template>
                </CTooltip>
                <CTooltip text="Tooltip" location="top">
                    <template #activator>
                        <CButton>TOP</CButton>
                    </template>
                </CTooltip>
                <CTooltip text="Tooltip" location="bottom">
                    <template #activator>
                        <CButton>BOTTOM</CButton>
                    </template>
                </CTooltip>
            </CCluster>
        </CBox>
    </Variant>
    <Variant title="カスタム" auto-props-disabled>
        <CBox padding="large">
            <CStack>
                <CCluster justify="center">
                    <CButton @click="custom.show = !custom.show">TOGGLE</CButton>
                </CCluster>
                <CCluster justify="center" class="pt-10">
                    <CTooltip v-model="custom.show" location="top">
                        <template #activator>
                            <CAvatar color="light" variant="elevated">
                                <CSvgIcon :icon="mdiCart"/>
                            </CAvatar>
                        </template>
                        <span>Tooltip</span>
                    </CTooltip>
                </CCluster>
            </CStack>    
        </CBox>
    </Variant>
</Story>
</template>

<docs lang="md">
# CTooltip
要素の上にマウスを移動させた時に、情報を伝えるのに役立つコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| disabled | boolean | false | コンポーネントをクリックまたはターゲットにする機能を削除する場合は指定します |
| id | string | undefined | idを指定します |
| location | 'start' \| 'end' \| 'top' \| 'bottom' | 'end' | コンテンツに対してtooltipを表示する位置を指定します |
| modelValue | boolean | false | コンポーネントのv-model値。tooltipの表示非表示を手動で切り替えることができます |
| text | string | undefined | コンポーネントのコンテンツテキストを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | tooltip内に表示するコンテンツを指定します |
| activator | - | tooltipをアウティブにするためのコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
