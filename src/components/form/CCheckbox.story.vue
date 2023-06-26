<script setup lang="ts">
import {reactive} from "vue";
import CCheckbox from "@/components/form/CCheckbox.vue";

const data: {
    modelValue: boolean
    label: string
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    modelValue: false,
    label: 'ラベル',
    color: 'black',
})

const group: {
    modelValue: string[]
} = reactive({
    modelValue: [],
})

const colors: {
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    primary: boolean
    link: boolean
    success: boolean
    danger: boolean
    warning: boolean
    info: boolean
} = reactive({
    color: 'black',
    primary: true,
    link: true,
    success: true,
    danger: true,
    warning: true,
    info: true,
})

const indeterminate: {
    modelValue: boolean
    indeterminate: boolean
} = reactive({
    modelValue: false,
    indeterminate: true,
})

const disabled: {
    modelValue: boolean
    disabled: boolean
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    modelValue: false,
    disabled: true,
    color: 'black',
})

const readonly: {
    modelValue: boolean
    readonly: boolean
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    modelValue: false,
    readonly: true,
    color: 'black',
})

const error: {
    modelValue: boolean
    error: boolean
    errorMessage: string|string[]|undefined
    maxErrors: string|undefined
} = reactive({
    modelValue: false,
    error: true,
    errorMessage: [
        '選択が必須です',
        '選択が必須です2',
        '選択が必須です3'
    ],
    maxErrors: undefined,
})
</script>

<template>
<Story
    title="Form Inputs & Controls / CCheckbox"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-checkbox
            v-model="data.modelValue"
            :label="data.label"
            :color="data.color"
        />
        <template #controls>
            <HstCheckbox v-model="data.modelValue" title="modelValue"/>
            <HstSelect
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
            <HstText v-model="data.label" title="label"/>
        </template>
    </Variant>
    <Variant title="グループ化(配列)" auto-props-disabled>
        <div>
            選択された値：{{ group.modelValue }}
        </div>
        <c-checkbox
            v-model="group.modelValue"
            label="checkbox1"
            value="checkbox1"
        />
        <c-checkbox
            v-model="group.modelValue"
            label="checkbox2"
            value="checkbox2"
        />
        <c-checkbox
            v-model="group.modelValue"
            label="checkbox3"
            value="checkbox3"
        />
        <template #controls>
            <HstJson v-model="group.modelValue" title="modelValue"/>
        </template>
    </Variant>
    <Variant title="colors" auto-props-disabled>
        <c-checkbox
            v-model="colors.primary"
            color="primary"
        />
        <c-checkbox
            v-model="colors.link"
            color="link"
        />
        <c-checkbox
            v-model="colors.success"
            color="success"
        />
        <c-checkbox
            v-model="colors.danger"
            color="danger"
        />
        <c-checkbox
            v-model="colors.warning"
            color="warning"
        />
        <c-checkbox
            v-model="colors.info"
            color="info"
        />
    </Variant>
    <Variant title="indeterminate" auto-props-disabled>
        <c-checkbox
            v-model="indeterminate.modelValue"
            label="indeterminate"
            :indeterminate="indeterminate.indeterminate"
        />
        <template #controls>
            <HstCheckbox v-model="indeterminate.modelValue" title="modelValue"/>
        </template>
    </Variant>
    <Variant title="非活性" auto-props-disabled>
        <c-checkbox
            v-model="disabled.modelValue"
            label="disabled"
            :color="disabled.color"
            :disabled="disabled.disabled"
        />
        <template #controls>
            <HstSelect
                v-model="disabled.color"
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
            <HstCheckbox v-model="disabled.disabled" title="disabled"/>
        </template>
    </Variant>
    <Variant title="読み取り専用" auto-props-disabled>
        <c-checkbox
            v-model="readonly.modelValue"
            label="readonly"
            :color="readonly.color"
            :readonly="readonly.readonly"
        />
        <template #controls>
            <HstSelect
                v-model="readonly.color"
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
            <HstCheckbox v-model="readonly.readonly" title="readonly"/>
        </template>
    </Variant>
    <Variant title="警告" auto-props-disabled>
        <c-checkbox
            v-model="error.modelValue"
            label="error"
            :error="error.error"
            :error-message="error.errorMessage"
            :max-errors="error.maxErrors"
        />
        <template #controls>
            <HstCheckbox v-model="error.error" title="error"/>
            <HstJson v-model="error.errorMessage" title="errorMessage"/>
            <HstText v-model="error.maxErrors" title="maxErrors"/>
        </template>
    </Variant>

</Story>
</template>

<docs lang="md">
# CCheckbox
基本的なチェックボックス部品です。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' / 'black' / 'light' / 'dark' / 'primary' / 'link' / 'success' / 'danger' / 'warning' / 'info' | 'black' |  |
| disabled | boolean | false | 非活性にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| id | string | undefined | idを指定します |
| indeterminate | boolean | false | チェックボックスを不確定状態にする場合は指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | any | undefined | コンポーネントのv-model値です |
| name | string | undefined | nameを指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| value | string | '' | チェックされた時に返す値を指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
