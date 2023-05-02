<script setup lang="ts">
import { reactive } from 'vue';
import CDataTable from '@/components/dataDisplay/CDataTable.vue';

const data: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    headers: {
            key: string
            title: string
            align?: 'start' | 'end' 
        }[]
    density: 'default' | 'comfortable' | 'compact'
    hover: boolean
} = reactive({
    nameList:[
        {
            id:'001',
            name: '田中太郎',
            age: 40,
            gender: '男',
        },
        {
            id:'002',
            name: '鈴木仁美',
            age: 32,
            gender: '女',
        },
        {
            id:'003',
            name: '赤坂三郎',
            age: 25,
            gender: '男',
        },
        {
            id:'004',
            name: '目黒四郎',
            age: 44,
            gender: '男',
        },
    ],
    headers: [
        {key: 'id', title: 'ID'},
        {key: 'name', title: '氏名'},
        {key: 'gender', title: '性別'},
        {key: 'age', title: '年齢'},
    ],
    density: 'default',
    hover: false,
})


</script>

<template>
<Story
    title="Data & Display / CDataTable"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CDataTable
        :headers="data.headers"
        :items="data.nameList"
        ></CDataTable>
        <template #controls>
        </template>
    </Variant>
</Story>
</template>

<docs lang="md">
# CDataTable
<!-- 基本的なセレクトボックス部品です。
フォールスルー属性が適用されています。 -->

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
<!-- | appendIcon | string | undefined | 入力フォームの右外側に表示させるiconを指定します |
| appendInnerIcon | string | undefined | 入力フォームの右内側に表示させるiconを指定します |
| clearable | boolean | false | 選択した値をクリアするボタンを追加する場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|
| id | string | undefined | idを指定します |
| items | any[] | [] | オブジェクトの配列、または文字列の配列を指定できます。オブジェクトの配列の場合、itemValueを使用することで、キーを変更できます。 |
| itemValue | string | 'value' | itemsがオブジェクトの配列の場合、識別するためのキーを指定することができます |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string/number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | any | null | コンポーネントのv-model値です |
| multiple | boolean | false | 複数選択を可能にする場合は指定します |
| name | string | undefined | nameを指定します |
| placeholder | string | undefined | placeholderに表示するメッセージを指定します |
| prependIcon | string | undefined | 入力フォームの左外側に表示させるiconを指定します |
| prependInnerIcon | string | undefined | 入力フォームの左内側に表示させるiconを指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します | -->

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
<!-- | empty |  | ドロップダウンリストに一件も表示されない時に使用します |
| item | item/index| ドロップダウンリストの各項目の表示方法をカスタムできます |
| prependItem |  | ドロップダウンリストの先頭に追加する表示項目を指定します |
| selection | item / index| 選択された値の表示方法をカスタムできます | -->

## Events

| Name | Parameters | Description |
| --- | --- | --- |
<!-- | update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:appendInner | - | 入力フォームの右内側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prependInner | - | 入力フォームの左内側に表示されたアイコンをクリックした時に発行されるイベントです | -->
</docs>
