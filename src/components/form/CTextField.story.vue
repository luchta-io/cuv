<script setup lang="ts">
import {reactive} from "vue";
import CTextField from "@/components/form/CTextField.vue";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";

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
    placeholder: ' ',
})

const underline: {
    入力値: string
    ラベル: string
    placeholder: string
} = reactive({
    入力値: '',
    ラベル: 'underlinedのラベル',
    placeholder: ' ',
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

    <Variant title="outlined">
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
    <Variant title="underlined">
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
# CTextField

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | string | '' | コンポーネントのv-model値です |
| label | string | '' | ラベルに設定するテキストを指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| isError | boolean | false | コンポーネントをエラー状態にする場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| errorMessage |  | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |

</docs>
