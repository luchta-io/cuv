<script setup lang="ts">
import { reactive } from 'vue';
import CSelect from '@/components/form/CSelect.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    選択値: string
    血液型: string[]
    ラベル: string
} = reactive({
    選択値: '',
    血液型: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    ラベル: '基本のラベル'
})

const object: {
    選択値: string
    名簿: {
        id: string
        姓: string
        名: string
    }[]
    ラベル: string
} = reactive({
    選択値: '',
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
    ラベル: '基本のラベル'
})

const clearable: {
    選択値: string
    血液型: string[]
    ラベル: string
    clearable: boolean
} = reactive({
    選択値: '',
    血液型: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    ラベル: '基本のラベル',
    clearable: true,
})

const disabled: {
    選択値: string
    血液型: string[]
    ラベル: string
    disabled: boolean
} = reactive({
    選択値: 'A型',
    血液型: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    ラベル: '基本のラベル',
    disabled: true,
})
const readonly: {
    選択値: string
    血液型: string[]
    ラベル: string
    readonly: boolean
} = reactive({
    選択値: '',
    血液型: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    ラベル: '基本のラベル',
    readonly: true,
})

</script>

<template>
<Story
    title="Form / CSelect"
    :layout="{ type: 'grid', width: 500 }"
>
<Variant title="基本" auto-props-disabled>
        <c-box class="pb-48">
            <c-select
                v-model="data.選択値"
                :items="data.血液型"
                :label="data.ラベル"
            >
            </c-select>
        </c-box>
    
        <template #controls>
        </template>
    </Variant>
    <Variant title="オブジェクト配列の場合" auto-props-disabled>
        <c-box>
            <c-select
                v-model="object.選択値"
                :items="object.名簿"
                item-value="id"
                :label="object.ラベル"
            >
                <template v-slot:selection="{item}">
                    {{ item.姓+' '+item.名 }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓+' '+item.名 }}
                </template>
            </c-select>
        </c-box>
        <template #controls>
        </template>
    </Variant>
    <Variant title="clearable" auto-props-disabled>
        <c-box>
            <c-select
                v-model="clearable.選択値"
                :items="clearable.血液型"
                :label="clearable.ラベル"
                :clearable="clearable.clearable"
            />
        </c-box>
        <template #controls>
        </template>
    </Variant>
    <Variant title="不活性化" auto-props-disabled>
        <c-box>
            <c-select
                v-model="disabled.選択値"
                :items="disabled.血液型"
                :label="disabled.ラベル"
                :disabled="disabled.disabled"
            />
        </c-box>
        <template #controls>
        </template>
    </Variant>
    <Variant title="読み取り専用" auto-props-disabled>
        <c-box>
            <c-select
                v-model="readonly.選択値"
                :items="readonly.血液型"
                :label="readonly.ラベル"
                :readonly="readonly.readonly"
            />
        </c-box>
        <template #controls>
        </template>
    </Variant>
</Story>
</template>

<docs lang="md">
# CSelect
基本的なセレクトボックス部品です。下記のProps/Eventsの他に、
html標準のbutton要素と同様の属性/イベントを扱うことができます。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | ボタンに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
