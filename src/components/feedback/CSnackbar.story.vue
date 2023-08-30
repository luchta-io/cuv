<script setup lang="ts">
import {reactive} from "vue";
import CCluster from "@/components/layout/CCluster.vue";
import CButton from "@/components/containment/CButton.vue";
import CSnackbar from "@/components/feedback/CSnackbar.vue";
import CBox from "@/components/layout/CBox.vue"
import CStack from "@/components/layout/CStack.vue"

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const data: {
    modelValue: boolean
    timeout: number
    color: ColorType
    disabled: boolean
    location: 'top' | 'bottom'
    rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    vertical: boolean
} = reactive({
    modelValue: false,
    timeout: 5000,
    color: 'dark',
    disabled: false,
    location: 'bottom',
    rounded: 'medium',
    variant: 'elevated',
    vertical: false,
})

const timeout: {
    modelValue: boolean
    timeout: number
} = reactive({
    modelValue: false,
    timeout: 2000
})

const contained: {
    modelValue: boolean
} = reactive({
    modelValue: false,
})

const vertical: {
    modelValue: boolean
} = reactive({
    modelValue: false,
})
</script>

<template>
<Story
    title="Feedback / CSnackbar"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox>
            <CCluster justify="center" space="">
                <CButton @click="data.modelValue = true" color="primary">
                    Snackbarを表示
                </CButton>
            </CCluster>
        </CBox>
        <CSnackbar 
        v-model="data.modelValue"
        :timeout="data.timeout"
        :color="data.color"
        :disabled="data.disabled"
        :location="data.location"
        :rounded="data.rounded"
        :variant="data.variant"
        :vertical="data.vertical"
        >
            これは、Snackbarです。
            <template #actions>
                <CButton @click="data.modelValue = false" variant="text" color="info">
                    Close
                </CButton>
            </template>
        </CSnackbar>
        <template #controls>
            <HstCheckbox v-model="data.modelValue" title="modelValue"/>
            <HstNumber v-model="data.timeout" title="timeout"/>
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
            <HstCheckbox v-model="data.disabled" title="disabled"/>
            <HstSelect 
            v-model="data.location" 
            title="location"
            :options="['top','bottom']"/>
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
            <HstCheckbox v-model="data.vertical" title="vertical"/>
        </template>
    </Variant>
    <Variant title="Timeout" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <CButton @click="timeout.modelValue = true">
                    Snackbarを表示
                </CButton>
            </CCluster>
        </CBox>
        <CSnackbar 
        v-model="timeout.modelValue"
        :timeout="timeout.timeout"
        >
            このSnackbarは2秒後に非表示になります
        </CSnackbar>
    </Variant>
    <Variant title="variant" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <CStack>
                    <CSnackbar color="primary" variant="flat" rounded="circle">
                        <template #activator>
                            <CButton color="primary" variant="flat" rounded="circle">
                                Snackbarを表示
                            </CButton>
                        </template>
                        これは、Snackbarです。
                    </CSnackbar>
                    <CSnackbar color="link" variant="tonal">
                        <template #activator>
                            <CButton color="link" variant="tonal">
                                Snackbarを表示
                            </CButton>
                        </template>
                        これは、Snackbarです。
                    </CSnackbar>
                    <CSnackbar color="success" variant="outlined">
                        <template #activator>
                            <CButton color="success" variant="outlined">
                                Snackbarを表示
                            </CButton>
                        </template>
                        これは、Snackbarです。
                    </CSnackbar>
                    <CSnackbar color="danger">
                        <template #activator>
                            <CButton color="danger">
                                Snackbarを表示
                            </CButton>
                        </template>
                        これは、Snackbarです。
                    </CSnackbar>
                </CStack>
            </CCluster>
        </CBox>
    </Variant>
    <Variant title="contained" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <div class="relative p-4 h-60 max-w-[600px] w-full shadow-lg border border-black rounded">
                    <CCluster justify="center">
                        <CButton @click="contained.modelValue = true">
                            Snackbarを表示
                        </CButton>
                    </CCluster>
                    <CSnackbar v-model="contained.modelValue" contained>
                        これは、Snackbarです。
                        <template #actions>
                            <CButton @click="contained.modelValue = false" color="danger" variant="text">閉じる</CButton>
                        </template>
                    </CSnackbar>
                </div>
            </CCluster>
        </CBox>
    </Variant>
    <Variant title="variant" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <CButton @click="vertical.modelValue = true">
                    Snackbarを表示
                </CButton>
                <CSnackbar v-model="vertical.modelValue" vertical>
                    これは、Snackbarです。<br/>
                    コンテンツを重ねて表示することができます。
                    <template #actions>
                        <CButton @click="vertical.modelValue = false" color="danger" variant="text">閉じる</CButton>
                    </template>
                </CSnackbar>
            </CCluster>
        </CBox>
    </Variant>
</Story>
</template>

<docs lang="md">
# CSnackbar
ディスプレイの下方または上方から一時的に情報をポップアップ表示することが可能なコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'black' | コンポーネントの色を指定します |
| contained | boolean | false | 表示領域を親要素に制限します。(注: 親要素には、position:relative が必要です) |
| disabled | boolean | false | 非活性にする場合は指定します |
| id | string | undefined | idを指定します |
| location | 'top' \| 'bottom' | 'bottom' | ディスプレイに対してコンテンツを表示する位置を指定します |
| modelValue | boolean | false | コンポーネントのv-model値です。表示する場合はtrueを指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'circle' | コンポーネントの`border-radius`を指定します |
| timeout | number | 5000 | 自動的に非表示になるまでの待機時間 (ミリ秒)。常に表示する場合は`-1`を指定します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'tonal' | コンポーネントに個別のスタイルを適用します |
| vertical | boolean | false | コンテンツやアクションボタンを重ねて表示する場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | snackbar内に表示するコンテンツを指定します |
| activator | - | snackbarをアウティブにするためのコンテンツを指定します |
| actions | - | snackbar内にアクションボタンを配置する場合に指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
