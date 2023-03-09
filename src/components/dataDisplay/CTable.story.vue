<script setup lang="ts">
import {reactive} from "vue";
import CTable from "@/components/dataDisplay/CTable.vue";
import CBox from "@/components/layout/CBox.vue";

const data: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
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
    density: 'default',
    hover: false,
})

const fixed: {
    nameList: {
        id: string
        name: string
        age: number
        gender: '男'|'女'
    }[]
    fixedFooter: boolean
    fixedHeader: boolean
    height: string
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
        {
            id:'005',
            name: '田中五郎',
            age: 5,
            gender: '男',
        },
        {
            id:'006',
            name: '田中六郎',
            age: 60,
            gender: '男',
        },
        {
            id:'007',
            name: '小林菜奈',
            age: 17,
            gender: '女',
        },
        {
            id:'008',
            name: 'Abbie Johnson',
            age: 108,
            gender: '女',
        },
    ],
    fixedFooter: true,
    fixedHeader: true,
    height: '300px'
})

</script>

<template>
<Story
    title="Data Display / CTable"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <c-table
        :density="data.density"
        :hover="data.hover">
            <thead>
                <tr>
                    <th class="text-left">id</th>
                    <th class="text-left">名前</th>
                    <th class="text-left">年齢</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in data.nameList"
                    :key="item.name"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}歳</td>
                </tr>
            </tbody>
        </c-table>
        <template #controls>
            <HstSelect
            v-model="data.density"
            title="density"
            :options="[
                        {value: 'default', label: 'default'},
                        {value: 'comfortable', label: 'comfortable'},
                        {value: 'compact', label: 'compact'},
                    ]"
            />
            <HstCheckbox v-model="data.hover" title="hover"/>
            <HstJson v-model="data.nameList" title="(tbodyに表示するデータ)"/>
        </template>
    </Variant>
    <Variant title="ヘッダー/フッターの固定" auto-props-disabled>
        <c-table 
        :height="fixed.height" 
        :fixed-footer="fixed.fixedFooter"
        :fixed-header="fixed.fixedHeader">
            <thead>
                <tr>
                    <th class="text-left">id</th>
                    <th class="text-left">名前</th>
                    <th class="text-left">年齢</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in fixed.nameList"
                    :key="item.name"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}歳</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3" class="text-left">計：{{ data.nameList.length }}</th>
                </tr>
            </tfoot>
        </c-table>
        <template #controls>
            <HstCheckbox v-model="fixed.fixedHeader" title="fixedHeader"/>
            <HstCheckbox v-model="fixed.fixedFooter" title="fixedFooter"/>
            <HstText v-model="fixed.height" title="height"/>
            <HstJson v-model="fixed.nameList" title="(tbodyに表示するデータ)"/>
        </template>
    </Variant>
    <Variant title="slots" auto-props-disabled>
        <c-table>
            <template v-slot:top>
                <c-box class="bg-gray-100 text-lg">
                    社員名簿
                </c-box>
            </template>
            <thead>
                <tr>
                    <th class="text-left">id</th>
                    <th class="text-left">名前</th>
                    <th class="text-left">年齢</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in data.nameList"
                    :key="item.name"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}歳</td>
                </tr>
            </tbody>
            <template v-slot:bottom>
                <c-box class="bg-gray-100 text-end">
                    2022/04/01 更新
                </c-box>
            </template>
        </c-table>
    </Variant>
</Story>
</template>

<docs lang="md">
# CTable

table要素を囲むラッパーコンポーネントです。
コンポーネント内ではthead、tbody、trなどの通常のテーブル要素をすべて使用できます。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| density | 'default'/'comfortable'/'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します。 |
| fixedFooter | boolean | false | コンポーネントのtheadの位置を固定します |
| fixedHeader | boolean | false | コンポーネントのtfootの位置を固定します |
| height | string | 'auto' | table全体の高さを指定します |
| hover | boolean | false | trをhoverした時に背景色をつける際は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | tableに表示するコンテンツを指定します |
| top | - | tableの上部に表示するコンテンツを指定します |
| bottom | - | tableの下部に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
