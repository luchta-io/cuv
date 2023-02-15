<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import CTextField from "@/components/form/CTextField.vue";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";

const filled: {
    入力値: string
    ラベル: string
    placeholder: string
    disabled: boolean
} = reactive({
    入力値: '',
    ラベル: 'filledのラベル',
    placeholder: 'filledのplaceholder',
    disabled: false,
})

const outline: {
    入力値: string
    ラベル: string
    placeholder: string
    disabled: boolean
} = reactive({
    入力値: '',
    ラベル: 'outlinedのラベル',
    placeholder: ' ',
    disabled: false,
})

const underline: {
    入力値: string
    ラベル: string
    placeholder: string
    disabled: boolean
} = reactive({
    入力値: '',
    ラベル: 'underlinedのラベル',
    placeholder: ' ',
    disabled: false,
})

const 非活性 : {
    入力値: string
    ラベル: string
} = reactive({
    入力値: '吾輩は猫である',
    ラベル: '夏目漱石',
})

const 読み取り専用 : {
    入力値: string
    ラベル: string
} = reactive({
    入力値: 'セロ弾きのゴーシュ',
    ラベル: '宮沢賢治',
})

const 警告 : {
    filled入力値: string
    outlined入力値: string
    underlined入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    filled入力値: '',
    outlined入力値: '',
    underlined入力値: '',
    ラベル: 'ラベル',
    placeholder: '入力してください',
})

</script>

<template>
<Story
    title="Form / Input"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="filled" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="filled.入力値"
                @focus="logEvent('fire native focus event', $event)"
                @blur="logEvent('fire native blur event', $event)"
                :label="filled.ラベル"
                :placeholder="filled.placeholder"
                :disabled="filled.disabled"
                id="filled"
            />
        </c-box>
        <template #controls>
            <HstText v-model="filled.入力値" title="modelValue"/>
            <HstText v-model="filled.ラベル" title="label"/>
            <HstText v-model="filled.placeholder" title="placeholder"/>
            <HstCheckbox v-model="filled.disabled" title="disabled"/>
        </template>
    </Variant>

    <Variant title="outlined">
        <c-box padding="medium">
            <c-text-field 
                v-model="outline.入力値"
                :label="outline.ラベル"
                :placeholder="outline.placeholder"
                :disabled="outline.disabled"
                variant="outlined"
                id="outlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="outline.入力値" title="modelValue"/>
            <HstText v-model="outline.ラベル" title="label"/>
            <HstText v-model="outline.placeholder" title="placeholder"/>
            <HstCheckbox v-model="outline.disabled" title="disabled"/>
        </template>

    </Variant>
    <Variant title="underlined">
        <c-box padding="medium">
            <c-text-field 
                v-model="underline.入力値"
                :label="underline.ラベル"
                :placeholder="underline.placeholder"
                :disabled="underline.disabled"
                variant="underlined"
                id="underlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="underline.入力値" title="modelValue"/>
            <HstText v-model="underline.ラベル" title="label"/>
            <HstText v-model="underline.placeholder" title="placeholder"/>
            <HstCheckbox v-model="underline.disabled" title="disabled"/>
        </template>

    </Variant>
    <Variant title="非活性">
        <c-box padding="medium">
            <c-stack>
                <c-text-field 
                    v-model="非活性.入力値"
                    :label="非活性.ラベル"
                    disabled
                />
                <c-text-field 
                    v-model="非活性.入力値"
                    :label="非活性.ラベル"
                    variant="outlined"
                    disabled
                />
                <c-text-field 
                    v-model="非活性.入力値"
                    :label="非活性.ラベル"
                    variant="underlined"
                    disabled
                />
            </c-stack>
        </c-box>
    </Variant>

    <Variant title="読み取り専用">
        <c-box padding="medium">
            <c-stack>
                <c-text-field 
                    v-model="読み取り専用.入力値"
                    :label="読み取り専用.ラベル"
                    readonly
                />
                <c-text-field 
                    v-model="読み取り専用.入力値"
                    :label="読み取り専用.ラベル"
                    variant="outlined"
                    readonly
                />
                <c-text-field 
                    v-model="読み取り専用.入力値"
                    :label="読み取り専用.ラベル"
                    variant="underlined"
                    readonly
                />
            </c-stack>
        </c-box>
    </Variant>

    <Variant title="警告">
        <c-box padding="medium">
            <c-stack>
                <c-text-field 
                    v-model="警告.filled入力値"
                    :label="警告.ラベル"
                    :placeholder="警告.placeholder"
                    is-error
                    id="dangerfilled"
                >
                    <template #errorMessage>
                        エラーメッセージを表示します
                    </template>
                </c-text-field>
                <c-text-field 
                    v-model="警告.outlined入力値"
                    :label="警告.ラベル"
                    :placeholder="警告.placeholder"
                    variant="outlined"
                    is-error
                    id="dangeroutlined"
                />
                <c-text-field 
                    v-model="警告.underlined入力値"
                    :label="警告.ラベル"
                    :placeholder="警告.placeholder"
                    variant="underlined"
                    is-error
                    id="dangerunderlined"
                />
            </c-stack>
        </c-box>
    </Variant>

</Story>
</template>

<docs lang="md">
# TextInput

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | string | '' | コンポーネントのv-model値です |
| label | string | '' | ラベルに設定するテキストを指定します |
| id | string | 'textInputId' | idを指定します |
| placeholder | string | ' ' | placeholderのテキストを指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| disabled | boolean | false | コンポーネントを無効にします |
| readonly | boolean | false | コンポーネントを読み取り専用にします |
| isError | boolean | false | コンポーネントをエラー状態にします |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| errorMessage | errorMessage | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| focus | - | inputにfocusされた時に発火します |
| blur | - | inputからfocusが外れた時に発火します |

</docs>
