<script setup lang="ts">
import {reactive} from "vue";
import CBox from "@/components/layout/CBox.vue";
import CAutocomplete from "@/components/form/CAutocomplete.vue";

interface 名簿型 {
    id: string
    姓: string
    名: string
}

const data: {
    入力値: string
    名簿: 名簿型[]
    ラベル: string
    スタイル: 'filled'|'outlined'|'underlined'
} = reactive({
    入力値: '',
    名簿: [
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
    ラベル: 'ラベル',
    スタイル: 'filled',
})

const clearable: {
    選択された値: string
    スタイル: 'filled'|'outlined'|'underlined'
} = reactive({
    選択された値: '1',
    スタイル: 'filled'
})

const iserror: {
    選択された値: string
    スタイル: 'filled'|'outlined'|'underlined'
} = reactive({
    選択された値: '1',
    スタイル: 'filled'
})

const disabled: {
    選択された値: string
    スタイル: 'filled'|'outlined'|'underlined'
} = reactive({
    選択された値: '1',
    スタイル: 'filled'
})

const readonly: {
    選択された値: string
    スタイル: 'filled'|'outlined'|'underlined'
} = reactive({
    選択された値: '1',
    スタイル: 'filled'
})

const 絞り込み = (item:名簿型, searchText:string) => {
    const keyword = searchText.toUpperCase()
    if(item.姓.toUpperCase().indexOf(keyword) > -1) return true
    return item.名.toUpperCase().indexOf(keyword) > -1
}
</script>

<template>
<Story
    title="Form / CAutocomplete"
    :layout="{ type: 'grid', width: 500 }"
>
<Variant title="基本" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="data.入力値"
            :items="data.名簿"
            item-value="id"
            :filter="絞り込み"
            :label="data.ラベル"
            placeholder="placeholder"
            clearable
            :variant="data.スタイル"
            id="filled"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:empty>
                    一致するものはありませんでした
                </template>
            </c-autocomplete>    
        </c-box>
        <template #controls>
            <HstText v-model="data.入力値" title="modelValue"/>
            <HstJson
                v-model="data.名簿"
                title="items"
            />
            <HstText v-model="data.ラベル" title="label"/>
            <HstSelect
            v-model="data.スタイル"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>
    </Variant>
    <Variant title="clearable" auto-props-disabled>
        <c-box padding="large">
            <c-autocomplete
            v-model="clearable.選択された値"
            :items="data.名簿"
            item-value="id"
            :filter="絞り込み"
            :variant="clearable.スタイル"
            placeholder="入力"
            clearable
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
            <HstSelect
            v-model="clearable.スタイル"
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
            v-model="disabled.選択された値"
            :items="data.名簿"
            item-value="id"
            :filter="絞り込み"
            :variant="disabled.スタイル"
            placeholder="入力"
            disabled
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
            <HstSelect
            v-model="disabled.スタイル"
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
            v-model="readonly.選択された値"
            :items="data.名簿"
            item-value="id"
            :filter="絞り込み"
            :variant="readonly.スタイル"
            readonly
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
            <HstSelect
            v-model="readonly.スタイル"
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
            v-model="iserror.選択された値"
            :items="data.名簿"
            item-value="id"
            :filter="絞り込み"
            :variant="iserror.スタイル"
            placeholder="入力"
            is-error
            >
                <template v-slot:selection="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓 }} {{ item.名 }}
                </template>
                <template v-slot:errorMessage>
                    名前を入力してください
                </template>
            </c-autocomplete>
        </c-box>
        <template #controls>
            <HstSelect
            v-model="iserror.スタイル"
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

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | any | null | コンポーネントのv-model値です |
| items | any[] | [] | オブジェクトの配列、または文字列の配列を指定できます。オブジェクトの配列の場合、itemValueを使用することで、キーを変更できます。 |
| itemValue | string | 'value' | itemsがオブジェクト配列の場合、識別するためのキーを指定することができます |
| filter | (item: any, searchText: string) => boolean | undefined | 絞り込みを行うための関数を指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| readonly | boolean | false | 読み取り専用かどうか |
| isError | boolean | false | コンポーネントをエラー状態にするかどうか |
| clearable | boolean | false | 入力したテキストをクリアするボタンを追加するかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| selection | item | 選択された値の表示方法をカスタムできます |
| item | item | ドロップダウンリストの各項目の表示方法をカスタムできます |
| empty |  | ドロップダウンリストに一件も表示されない時に使用します |
| errorMessage |  | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
