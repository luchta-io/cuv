<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiComment } from '@mdi/js'
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";
import CAutocomplete from "@/components/form/CAutocomplete.vue";

interface nameListType {
    id: string
    姓: string
    名: string
}

const string: {
    modelValue: string
    bloodType: string[]
    label: string
    variant: 'filled'|'outlined'|'underlined'
    placeholder: string
} = reactive({
    modelValue: '',
    bloodType: [
    'A型',
    'B型',
    'O型',
    'AB型',
    ],
    label: 'ラベル',
    variant: 'filled',
    placeholder: '入力してください'
})

const object: {
    modelValue: string
    nameList: nameListType[]
    itemValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
    placeholder: string
} = reactive({
    modelValue: '',
    nameList: [
        {
            id: '1',
            姓: '田中',
            名: '太郎',
        },
        {
            id: '2',
            姓: '田中',
            名: '一郎',
        },
        {
            id: '3',
            姓: '鈴木',
            名: '花子',
        },
        {
            id: '4',
            姓: 'JOHNSON',
            名: 'MARY',
        },
    ],
    itemValue: 'id',
    label: 'ラベル',
    variant: 'filled',
    placeholder: '入力してください'
})

const clearable: {
    modelValue: string
    clearable: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '1',
    clearable: true,
    variant: 'filled'
})

const labelslot: {
    modelValue: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '1',
    variant: 'filled'
})

const icons: {
    modelValue: string
    label: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '',
    label: 'ラベル',
    variant: 'filled',
})

const disabled: {
    modelValue: string
    disabled: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '1',
    disabled: true,
    variant: 'filled'
})

const readonly: {
    modelValue: string
    readonly: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '1',
    readonly: true,
    variant: 'filled'
})

const error: {
    modelValue: string
    error: boolean
    variant: 'filled'|'outlined'|'underlined'
    errorMessage: string|string[]|undefined
    maxErrors: string|undefined
} = reactive({
    modelValue: '1',
    error: true,
    variant: 'filled',
    errorMessage: [
        '入力が必須です',
        '最大文字数制限(10文字)を超えています',
        '半角英数字を入力してください'
    ],
    maxErrors: undefined,
})

const stringArrayFilter = (item:string, searchText:string) => {
    const keyword = searchText.toUpperCase()
    return item.toUpperCase().indexOf(keyword) > -1
}

const objectArrayFilter = (item:nameListType, searchText:string) => {
    const keyword = searchText.toUpperCase()
    if(item.姓.toUpperCase().indexOf(keyword) > -1) return true
    return item.名.toUpperCase().indexOf(keyword) > -1
}
</script>

<template>
<Story
    title="Form Inputs & Controls / CAutocomplete"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="文字列の配列の場合" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="string.modelValue"
            :items="string.bloodType"
            :filter="stringArrayFilter"
            :label="string.label"
            :placeholder="string.placeholder"
            :variant="string.variant"
            id="string"
            />
        </c-box>
        <template #controls>
            <HstText v-model="string.modelValue" title="modelValue"/>
            <HstJson
                v-model="string.bloodType"
                title="items"
            />
            <HstText v-model="string.label" title="label"/>
            <HstSelect
            v-model="string.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
            <HstText v-model="string.placeholder" title="placeholder"/>
        </template>
    </Variant>
    <Variant title="オブジェクト配列の場合" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="object.modelValue"
            :items="object.nameList"
            :item-value="object.itemValue"
            :filter="objectArrayFilter"
            :label="object.label"
            :placeholder="object.placeholder"
            :variant="object.variant"
            id="object"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
            </c-autocomplete>    
        </c-box>
        <template #controls>
            <HstText v-model="object.modelValue" title="modelValue"/>
            <HstJson
                v-model="object.nameList"
                title="items"
            />
            <HstText v-model="object.itemValue" title="itemValue"/>
            <HstText v-model="object.label" title="label"/>
            <HstSelect
            v-model="object.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
            <HstText v-model="object.placeholder" title="placeholder"/>
        </template>
    </Variant>
    <Variant title="clearable" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="clearable.modelValue"
            :items="object.nameList"
            item-value="id"
            :filter="objectArrayFilter"
            :variant="clearable.variant"
            placeholder="入力"
            :clearable="clearable.clearable"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
            </c-autocomplete>
        </c-box>
        <template #controls>
            <HstCheckbox
                v-model="clearable.clearable"
                title="clearable"
            />
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
    <Variant title="Label Slots" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="labelslot.modelValue"
            :items="object.nameList"
            item-value="id"
            :filter="objectArrayFilter"
            :variant="labelslot.variant"
            placeholder="入力"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template #label>
                    氏名<span class="text-red-500">(必須)</span>
                </template>
            </c-autocomplete>
        </c-box>
        <template #controls>
            <HstSelect
            v-model="labelslot.variant"
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
        <c-box padding="large">
            <c-stack>
                <c-autocomplete
                v-model="icons.modelValue"
                :items="string.bloodType"
                :filter="stringArrayFilter"
                label="prepend-icon"
                :variant="icons.variant"
                :prepend-icon="mdiComment"
                placeholder="placeholder"
                clearable
                @click:prepend="logEvent('fire click:prepend', $event)"
                >
                </c-autocomplete>
                <c-autocomplete
                v-model="icons.modelValue"
                :items="string.bloodType"
                :filter="stringArrayFilter"
                label="append-icon"
                :variant="icons.variant"
                :append-icon="mdiComment"
                clearable
                @click:append="logEvent('fire click:append', $event)"
                >
                </c-autocomplete>
                <c-autocomplete
                v-model="icons.modelValue"
                :items="string.bloodType"
                :filter="stringArrayFilter"
                label="prepend-inner-icon"
                :variant="icons.variant"
                :prepend-inner-icon="mdiComment"
                clearable
                @click:prepend-inner="logEvent('fire click:prepend-inner', $event)"
                >
                </c-autocomplete>
                <c-autocomplete
                v-model="icons.modelValue"
                :items="string.bloodType"
                :filter="stringArrayFilter"
                label="append-inner-icon"
                :variant="icons.variant"
                :append-inner-icon="mdiComment"
                clearable
                @click:append-inner="logEvent('fire click:append-inner', $event)"
                >
                </c-autocomplete>
            </c-stack>
        </c-box>
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
        </template>
    </Variant>
    <Variant title="非活性" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="disabled.modelValue"
            :items="object.nameList"
            item-value="id"
            :filter="objectArrayFilter"
            :variant="disabled.variant"
            placeholder="入力してください"
            :disabled="disabled.disabled"
            label="ラベル"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
            </c-autocomplete>
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
        <c-box padding="large">
            <c-autocomplete
            v-model="readonly.modelValue"
            :items="object.nameList"
            item-value="id"
            :filter="objectArrayFilter"
            :variant="readonly.variant"
            :readonly="readonly.readonly"
            label="ラベル"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
            </c-autocomplete>
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
        <c-box padding="large">
            <c-autocomplete
            v-model="error.modelValue"
            label="ラベル"
            :items="object.nameList"
            item-value="id"
            :filter="objectArrayFilter"
            :variant="error.variant"
            placeholder="入力"
            :error="error.error"
            :error-message="error.errorMessage"
            :max-errors="error.maxErrors"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
            </c-autocomplete>
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
# CAutocomplete
入力補完機能のついたフォームコンポーネントです。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | 入力フォームの右外側に表示させるiconを指定します |
| appendInnerIcon | string | undefined | 入力フォームの右内側に表示させるiconを指定します |
| clearable | boolean | false | 入力したテキストをクリアするボタンを追加する場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|
| filter | (item: any, searchText: string) => boolean | undefined | 絞り込みを行うための関数を指定します |
| id | string | undefined | idを指定します |
| items | any[] | [] | オブジェクトの配列、または文字列の配列を指定できます。オブジェクトの配列の場合、itemValueを使用することで、キーを変更できます。 |
| itemValue | string | '' | itemsがオブジェクトの配列の場合、識別するためのキーを指定することができます |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | any | null | コンポーネントのv-model値です |
| name | string | undefined | nameを指定します |
| placeholder | string | '' | placeholderのメッセージを指定することができます |
| prependIcon | string | undefined | 入力フォームの左外側に表示させるiconを指定します |
| prependInnerIcon | string | undefined | 入力フォームの左内側に表示させるiconを指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| empty |  | ドロップダウンリストに一件も表示されない時に使用します |
| item | item/index | ドロップダウンリストの各項目の表示方法をカスタムできます |
| selection | item | 選択された値の表示方法をカスタムできます |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:appendInner | - | 入力フォームの右内側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prependInner | - | 入力フォームの左内側に表示されたアイコンをクリックした時に発行されるイベントです |
</docs>
