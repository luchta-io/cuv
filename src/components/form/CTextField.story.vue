<script setup lang="ts">
import {reactive} from "vue";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import CTextField from "@/components/form/CTextField.vue";
import CBox from "@/components/layout/CBox.vue";

const filled: {
    入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    入力値: '',
    ラベル: 'filledのラベル',
    placeholder: 'filledのplaceholder',
})

const outline: {
    入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    入力値: '',
    ラベル: 'outlinedのラベル',
    placeholder: '',
})

const underline: {
    入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    入力値: '',
    ラベル: 'underlinedのラベル',
    placeholder: '',
})

const email : {
    入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    入力値: '',
    ラベル: 'emailのラベル',
    placeholder: 'email@address.com',
})

const password : {
    入力値: string
    ラベル: string
    placeholder: string
    show: boolean
} = reactive({
    入力値: 'password',
    ラベル: 'emailのラベル',
    placeholder: '',
    show: false,
})

const disabled : {
    入力値: string
    ラベル: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    入力値: '吾輩は猫である',
    ラベル: '夏目漱石',
    variant: 'filled',
})

const readonly : {
    入力値: string
    ラベル: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    入力値: 'セロ弾きのゴーシュ',
    ラベル: '宮沢賢治',
    variant: 'filled',
})

const error : {
    filled入力値: string
    outlined入力値: string
    underlined入力値: string
    ラベル: string
    placeholder: string
    variant: 'filled'|'outlined'|'underlined'
    error: boolean
    errorMessage: string|Array<string>
    maxErrors: string|undefined
} = reactive({
    filled入力値: '',
    outlined入力値: '',
    underlined入力値: '',
    ラベル: 'ラベル',
    placeholder: '入力してください',
    variant: 'filled',
    error: true,
    errorMessage: [
        '入力が必須です',
        '最大文字数制限(10文字)を超えています',
        '半角英数字を入力してください'
    ],
    maxErrors: undefined,
})

</script>

<template>
<Story
    title="Form / CTextField"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="filled" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="filled.入力値"
                :label="filled.ラベル"
                :placeholder="filled.placeholder"
                id="filled"
            />
        </c-box>
        <template #controls>
            <HstText v-model="filled.入力値" title="modelValue"/>
            <HstText v-model="filled.ラベル" title="label"/>
            <HstText v-model="filled.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="outlined" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="outline.入力値"
                :label="outline.ラベル"
                :placeholder="outline.placeholder"
                variant="outlined"
                id="outlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="outline.入力値" title="modelValue"/>
            <HstText v-model="outline.ラベル" title="label"/>
            <HstText v-model="outline.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="underlined" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="underline.入力値"
                :label="underline.ラベル"
                :placeholder="underline.placeholder"
                variant="underlined"
                id="underlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="underline.入力値" title="modelValue"/>
            <HstText v-model="underline.ラベル" title="label"/>
            <HstText v-model="underline.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="email" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="email.入力値"
                :label="email.ラベル"
                :placeholder="email.placeholder"
                id="email"
            />
        </c-box>
    </Variant> 
    
    <Variant title="password" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="password.入力値"
                :label="password.ラベル"
                :placeholder="password.placeholder"
                :append-icon="password.show ? mdiEye : mdiEyeOff"
                :type="password.show?'text':'password'"
                @click:append="password.show = !password.show"
                id="password"
            />
        </c-box>
    </Variant>    

    <Variant title="非活性" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="disabled.入力値"
                :label="disabled.ラベル"
                :variant="disabled.variant"
                disabled
            />
        </c-box>
        <template #controls>
            <HstSelect
            v-model="disabled.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>

    <Variant title="読み取り専用" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="readonly.入力値"
                :label="readonly.ラベル"
                :variant="readonly.variant"
                readonly
            />
        </c-box>
        <template #controls>
            <HstSelect
            v-model="readonly.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>

    <Variant title="警告" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="error.filled入力値"
                :label="error.ラベル"
                :placeholder="error.placeholder"
                :variant="error.variant"
                :error="error.error"
                :error-message="error.errorMessage"
                :max-errors="error.maxErrors"
                id="error"
            />
        </c-box>
        <template #controls>
            <HstCheckbox v-model="error.error" title="error"/>
            <HstJson v-model="error.errorMessage" title="errorMessage"/>
            <HstText v-model="error.maxErrors" title="maxErrors"/>
            <HstSelect
            v-model="error.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>

</Story>
</template>

<docs lang="md">
# CTextField
入力フォームの基本的なコンポーネントです。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | iconを入力フォームの右に追加する場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|
| id | string | undefined | idを指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | string | '' | コンポーネントのv-model値です |
| name | string | undefined | nameを指定します |
| placeholder | string | '' | placeholderのメッセージを指定することができます |
| prependIcon | string | undefined | iconを入力フォームの左に追加する場合は指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| type | 'text'/'email'/'password' | 'text' | inputのtype属性を選択します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左側に表示されたアイコンをクリックした時に発行されるイベントです |

</docs>
