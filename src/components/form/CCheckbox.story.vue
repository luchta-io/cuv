<script setup lang="ts">
import {reactive} from "vue";
import CCheckbox from "@/components/form/CCheckbox.vue";

const 基本: {
    選択値: boolean
    ラベル: string
    色: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
} = reactive({
    選択値: false,
    ラベル: 'ラベル',
    色: 'black',
})

const group: {
    選択値: string[]
} = reactive({
    選択値: [],
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
    選択値: boolean
    indeterminate: boolean
} = reactive({
    選択値: false,
    indeterminate: true,
})

const disabled: {
    選択値: boolean
    disabled: boolean
} = reactive({
    選択値: false,
    disabled: true,
})

const readonly: {
    選択値: boolean
    readonly: boolean
} = reactive({
    選択値: false,
    readonly: true,
})

const error: {
    選択値: boolean
    error: boolean
} = reactive({
    選択値: false,
    error: true,
})
</script>

<template>
<Story
    title="Form / CCheckbox"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-checkbox
            v-model="基本.選択値"
            :label="基本.ラベル"
            :color="基本.色"
        />
        <template #controls>
            <HstCheckbox v-model="基本.選択値" title="modelValue"/>
            <HstSelect
                v-model="基本.色"
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
            <HstText v-model="基本.ラベル" title="label"/>
        </template>
    </Variant>
    <Variant title="グループ化(配列)" auto-props-disabled>
        <div>
            選択された値：{{ group.選択値 }}
        </div>
        <c-checkbox
            v-model="group.選択値"
            label="checkbox1"
            value="checkbox1"
        />
        <c-checkbox
            v-model="group.選択値"
            label="checkbox2"
            value="checkbox2"
        />
        <c-checkbox
            v-model="group.選択値"
            label="checkbox3"
            value="checkbox3"
        />
        <template #controls>
            <HstJson v-model="group.選択値" title="modelValue"/>
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
            v-model="indeterminate.選択値"
            label="indeterminate"
            :indeterminate="indeterminate.indeterminate"
        />
        <template #controls>
            <HstCheckbox v-model="indeterminate.選択値" title="modelValue"/>
        </template>
    </Variant>
    <Variant title="非活性" auto-props-disabled>
        <c-checkbox
            v-model="disabled.選択値"
            label="disabled"
            :disabled="disabled.disabled"
        />
        <template #controls>
            <HstCheckbox v-model="disabled.disabled" title="disabled"/>
        </template>
    </Variant>
    <Variant title="読み取り専用" auto-props-disabled>
        <c-checkbox
            v-model="readonly.選択値"
            label="readonly"
            :readonly="readonly.readonly"
        />
        <template #controls>
            <HstCheckbox v-model="readonly.readonly" title="readonly"/>
        </template>
    </Variant>
    <Variant title="警告" auto-props-disabled>
        <c-checkbox
            v-model="error.選択値"
            label="error"
            :error="error.error"
        >
            <template v-slot:errorMessage>
                選択してください
            </template>
        </c-checkbox>
        <template #controls>
            <HstCheckbox v-model="error.error" title="error"/>
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
| modelValue | any | undefined | コンポーネントのv-model値です |
| color | 'white' / 'black' / 'light' / 'dark' / 'primary' / 'link' / 'success' / 'danger' / 'warning' / 'info' | 'black' |  |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| value | string | '' | チェックされた時に返す値を指定します |
| id | string | undefined | idを指定します |
| name | string | undefined | nameを指定します |
| indeterminate | boolean | false | チェックボックスを不確定状態にする場合は指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| errorMessage |  | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
