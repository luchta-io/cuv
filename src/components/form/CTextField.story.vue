<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiEye, mdiEyeOff, mdiComment } from "@mdi/js";
import CTextField from "@/components/form/CTextField.vue";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";

const filled: {
    modelValue: string
    label: string
    placeholder: string
} = reactive({
    modelValue: '',
    label: 'filledのラベル',
    placeholder: 'filledのplaceholder',
})

const outline: {
    modelValue: string
    label: string
    placeholder: string
} = reactive({
    modelValue: '',
    label: 'outlinedのラベル',
    placeholder: '',
})

const underline: {
    modelValue: string
    label: string
    placeholder: string
} = reactive({
    modelValue: '',
    label: 'underlinedのラベル',
    placeholder: '',
})

const email : {
    modelValue: string
    label: string
    placeholder: string
} = reactive({
    modelValue: '',
    label: 'emailのラベル',
    placeholder: 'email@address.com',
})

const password : {
    modelValue: string
    label: string
    placeholder: string
    show: boolean
} = reactive({
    modelValue: 'password',
    label: 'passwordのラベル',
    placeholder: '',
    show: false,
})

const clearable : {
    modelValue: string
    label: string
    placeholder: string
    clearable: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: 'バツをクリックするとクリアされます',
    label: 'clearable',
    placeholder: '',
    clearable: true,
    variant: 'filled',
})

const icons : {
    modelValue: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '',
    variant: 'filled',
})

const disabled : {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    disabled: boolean
} = reactive({
    modelValue: '吾輩は猫である',
    label: '夏目漱石',
    variant: 'filled',
    disabled: true,
})

const readonly : {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    readonly: boolean
} = reactive({
    modelValue: 'セロ弾きのゴーシュ',
    label: '宮沢賢治',
    variant: 'filled',
    readonly: true,
})

const error : {
    modelValue: string
    label: string
    placeholder: string
    variant: 'filled'|'outlined'|'underlined'
    error: boolean
    errorMessage: string|Array<string>
    maxErrors: string|undefined
} = reactive({
    modelValue: '',
    label: 'ラベル',
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
    title="Form Inputs & Controls / CTextField"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="filled" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="filled.modelValue"
                :label="filled.label"
                :placeholder="filled.placeholder"
                id="filled"
            />
        </c-box>
        <template #controls>
            <HstText v-model="filled.modelValue" title="modelValue"/>
            <HstText v-model="filled.label" title="label"/>
            <HstText v-model="filled.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="outlined" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="outline.modelValue"
                :label="outline.label"
                :placeholder="outline.placeholder"
                variant="outlined"
                id="outlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="outline.modelValue" title="modelValue"/>
            <HstText v-model="outline.label" title="label"/>
            <HstText v-model="outline.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="underlined" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="underline.modelValue"
                :label="underline.label"
                :placeholder="underline.placeholder"
                variant="underlined"
                id="underlined"
            />
        </c-box>
        <template #controls>
            <HstText v-model="underline.modelValue" title="modelValue"/>
            <HstText v-model="underline.label" title="label"/>
            <HstText v-model="underline.placeholder" title="placeholder"/>
        </template>
    </Variant>

    <Variant title="email" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="email.modelValue"
                :label="email.label"
                :placeholder="email.placeholder"
                id="email"
            />
        </c-box>
    </Variant> 
    
    <Variant title="password" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="password.modelValue"
                :label="password.label"
                :placeholder="password.placeholder"
                :append-icon="password.show ? mdiEye : mdiEyeOff"
                :type="password.show?'text':'password'"
                @click:append="password.show = !password.show"
                id="password"
            />
        </c-box>
    </Variant>  

    <Variant title="clearable" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="clearable.modelValue"
                :label="clearable.label"
                :placeholder="clearable.placeholder"
                :clearable="clearable.clearable"
                :variant="clearable.variant"
            />
        </c-box>
        <template #controls>
            <HstSelect
            v-model="clearable.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>    

    <Variant title="Icons" auto-props-disabled>
        <c-box padding="medium">
            <c-stack>
                <c-text-field 
                    v-model="icons.modelValue"
                    label="prepend-icon"
                    :variant="icons.variant"
                    :prepend-icon="mdiComment"
                    @click:prepend="logEvent('fire click:prepend', $event)"
                    clearable
                />
                <c-text-field 
                    v-model="icons.modelValue"
                    label="append-icon"
                    :variant="icons.variant"
                    :append-icon="mdiComment"
                    @click:append="logEvent('fire click:append', $event)"
                    clearable
                />
                <c-text-field 
                    v-model="icons.modelValue"
                    label="prepend-inner-icon"
                    :variant="icons.variant"
                    :prepend-inner-icon="mdiComment"
                    @click:prepend-inner="logEvent('fire click:prepend-inner', $event)"
                    clearable
                />
                <c-text-field 
                    v-model="icons.modelValue"
                    label="append-inner-icon"
                    :variant="icons.variant"
                    :append-inner-icon="mdiComment"
                    @click:append-inner="logEvent('fire click:append-inner', $event)"
                    clearable
                />
            </c-stack>
        </c-box>
        <template #controls>
            <HstSelect
            v-model="icons.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>

    <Variant title="非活性" auto-props-disabled>
        <c-box padding="medium">
            <c-text-field 
                v-model="disabled.modelValue"
                :label="disabled.label"
                :variant="disabled.variant"
                :disabled="disabled.disabled"
            />
        </c-box>
        <template #controls>
            <HstCheckbox
                v-model="disabled.disabled"
                title="disabled"
            />
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
                v-model="readonly.modelValue"
                :label="readonly.label"
                :variant="readonly.variant"
                :readonly="readonly.readonly"
            />
        </c-box>
        <template #controls>
            <HstCheckbox
                v-model="readonly.readonly"
                title="readonly"
            />
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
                v-model="error.modelValue"
                :label="error.label"
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
| appendIcon | string | undefined | 入力フォームの右外側に表示させるiconを指定します |
| appendInnerIcon | string | undefined | 入力フォームの右内側に表示させるiconを指定します |
| clearable | boolean | false | 選択した値をクリアするボタンを追加する場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|
| id | string | undefined | idを指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | string | '' | コンポーネントのv-model値です |
| name | string | undefined | nameを指定します |
| placeholder | string | '' | placeholderのメッセージを指定することができます |
| prependIcon | string | undefined | 入力フォームの左外側に表示させるiconを指定します |
| prependInnerIcon | string | undefined | 入力フォームの左内側に表示させるiconを指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| type | 'text'/'email'/'password' | 'text' | inputのtype属性を選択します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| label | - | ラベルの表示方法をカスタムします |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:appendInner | - | 入力フォームの右内側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prependInner | - | 入力フォームの左内側に表示されたアイコンをクリックした時に発行されるイベントです |

</docs>
