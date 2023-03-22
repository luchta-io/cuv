<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiComment } from '@mdi/js'
import CTextarea from "@/components/form/CTextarea.vue";
import CStack from "@/components/layout/CStack.vue";

const data: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    rows: string
    placeholder: string
} = reactive({
    modelValue: '',
    label: 'ラベル',
    variant: 'filled',
    rows: '5',
    placeholder: '入力してください'
})
const clearable: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    clearable: boolean
} = reactive({
    modelValue: '腹はいちどの病気猫みちを晩へ許しゴーシュなな。ではこれからだめましませという交響楽だない。',
    label: 'ラベル',
    variant: 'filled',
    clearable: true,
})
const icons: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    rows: string
} = reactive({
    modelValue: '',
    label: 'ラベル',
    variant: 'filled',
    rows: '1',
})
const disabled: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    disabled: boolean
} = reactive({
    modelValue: '腹はいちどの病気猫みちを晩へ許しゴーシュなな。ではこれからだめましませという交響楽だない。生意気ただことたもたそれからゴーシュの変屋のときではどうしてくたくたなくまして、いつでもおしまいでありがっんですでし。終る過ぎおまえも楽譜に青いなかって今の窓のポケットらへいい第一かっこう者の病気へはいるといましない。ざとじぶんのもいま聞いてしまうませ。風は十思っ子のようを思っで来た。ゴーシュも片手猫たりみんなへぶっつかってだした。ゴーシュはふしぎへすこしにふくが譜を控室のようを引きあげておっかさんがこめでさっさと扉へとってった。',
    label: 'ラベル',
    variant: 'filled',
    disabled: true,
})
const readonly: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    readonly: boolean
} = reactive({
    modelValue: '腹はいちどの病気猫みちを晩へ許しゴーシュなな。ではこれからだめましませという交響楽だない。生意気ただことたもたそれからゴーシュの変屋のときではどうしてくたくたなくまして、いつでもおしまいでありがっんですでし。終る過ぎおまえも楽譜に青いなかって今の窓のポケットらへいい第一かっこう者の病気へはいるといましない。ざとじぶんのもいま聞いてしまうませ。風は十思っ子のようを思っで来た。ゴーシュも片手猫たりみんなへぶっつかってだした。ゴーシュはふしぎへすこしにふくが譜を控室のようを引きあげておっかさんがこめでさっさと扉へとってった。',
    label: 'ラベル',
    variant: 'filled',
    readonly: true,
})
const error: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    error: boolean
} = reactive({
    modelValue: '',
    label: 'ラベル',
    variant: 'filled',
    error: true,
})
</script>

<template>
<Story
    title="Form / CTextarea"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="基本" auto-props-disabled>
        <c-textarea
        v-model="data.modelValue"
        :label="data.label"
        :variant="data.variant"
        :placeholder="data.placeholder"
        :rows="data.rows"
        />
        <template #controls>
            <HstText v-model="data.modelValue" title="modelValue"/>
            <HstText v-model="data.label" title="label"/>
            <HstSelect
            v-model="data.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
            <HstText v-model="data.rows" title="rows"/>
            <HstText v-model="data.placeholder" title="placeholder"/>
        </template>
    </Variant>
    <Variant title="clearable" auto-props-disabled>
        <c-textarea
        v-model="clearable.modelValue"
        :label="clearable.label"
        :variant="clearable.variant"
        :clearable="clearable.clearable"
        rows="5"
        />
        <template #controls>
            <HstCheckbox v-model="clearable.clearable" title="clearable"/>
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
        <c-stack>
            <c-textarea
            v-model="icons.modelValue"
            label="prepend-icon"
            :variant="icons.variant"
            :rows="icons.rows"
            :prepend-icon="mdiComment"
            @click:prepend="logEvent('fire click:prepend', $event)"
            />
            <c-textarea
            v-model="icons.modelValue"
            label="append-icon"
            :variant="icons.variant"
            :rows="icons.rows"
            :append-icon="mdiComment"
            @click:append="logEvent('fire click:append', $event)"
            />
            <c-textarea
            v-model="icons.modelValue"
            label="prepend-inner-icon"
            :variant="icons.variant"
            :rows="icons.rows"
            :prepend-inner-icon="mdiComment"
            @click:prepend-inner="logEvent('fire click:prepend-inner', $event)"
            />
            <c-textarea
            v-model="icons.modelValue"
            label="append-inner-icon"
            :variant="icons.variant"
            :rows="icons.rows"
            :append-inner-icon="mdiComment"
            @click:append-inner="logEvent('fire click:append-inner', $event)"
            />
        </c-stack>
        <template #controls>
            <HstText v-model="icons.modelValue" title="modelValue"/>
            <HstSelect
            v-model="icons.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
            <HstText v-model="icons.rows" title="rows"/>
        </template>
    </Variant>
    <Variant title="非活性" auto-props-disabled>
        <c-textarea
        v-model="disabled.modelValue"
        :label="disabled.label"
        :variant="disabled.variant"
        :disabled="disabled.disabled"
        />
        <template #controls>
            <HstCheckbox v-model="disabled.disabled" title="disabled"/>
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
        <c-textarea
        v-model="readonly.modelValue"
        :label="readonly.label"
        :variant="readonly.variant"
        :readonly="readonly.readonly"
        />
        <template #controls>
            <HstCheckbox v-model="readonly.readonly" title="readonly"/>
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
        <c-textarea
        v-model="error.modelValue"
        :label="error.label"
        :variant="error.variant"
        :error="error.error"
        clearable
        >
        <template v-slot:errorMessage>
            ・入力が必須の項目です。
        </template>
        </c-textarea>
        <template #controls>
            <HstCheckbox v-model="error.error" title="error"/>
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
# CTextarea

基本的なテキストエリア部品です。複数行の入力が可能です。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | any | undefined | コンポーネントのv-model値です |
| label | string | '' | ラベルに設定するテキストを指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| id | string | undefined | idを指定します |
| name | string | undefined | nameを指定します |
| prependIcon | string | undefined | 入力フォームの左外側に表示させるiconを指定します |
| appendIcon | string | undefined | 入力フォームの右外側に表示させるiconを指定します |
| prependInnerIcon | string | undefined | 入力フォームの左内側に表示させるiconを指定します |
| appendInnerIcon | string | undefined | 入力フォームの右内側に表示させるiconを指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| clearable | boolean | false | 入力したテキストをクリアするボタンを追加する場合は指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| placeholder | string | '' | placeholderのメッセージを指定することができます |
| rows | string/number | 2 | コントロールで見ることが可能なテキストの行数を指定できます |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| errorMessage |  | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:appendInner | - | 入力フォームの右内側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prependInner | - | 入力フォームの左内側に表示されたアイコンをクリックした時に発行されるイベントです |
</docs>
