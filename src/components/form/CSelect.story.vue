<script setup lang="ts">
import { computed, reactive } from 'vue';
import CSelect from '@/components/form/CSelect.vue';
import CBox from '@/components/layout/CBox.vue';
import CCheckbox from '@/components/form/CCheckbox.vue';

const data: {
    modelValue: string
    bloodTypeList: string[]
    label: string
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: 'A型',
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: '基本のラベル',
    variant: 'filled'
})

const object: {
    modelValue: string
    nameList: {
        value: string
        name: string
    }[]
    label: string
} = reactive({
    modelValue: '',
    nameList: [
        {
            value: '1',
            name: '田中 太郎',
        },
        {
            value: '2',
            name: '田中 一郎',
        },
        {
            value: '3',
            name: '鈴木 花子',
        },
        {
            value: '4',
            name: 'JOHNSON MARY',
        },
    ],
    label: 'ラベル',
})

const multiple: {
    modelValue: string[]
    bloodTypeList: string[]
    label: string
} = reactive({
    modelValue: ['B型'],
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: 'ラベル'
})

const custom: {
    modelValue: string[]
    nameList: {
        id: string
        姓: string
        名: string
    }[]
    label: string
    multiple: boolean
} = reactive({
    modelValue: [],
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
        {
            id: '5',
            姓: '山田',
            名: '太郎',
        },
        {
            id: '6',
            姓: 'Gammaracanthuskytodermogammarus',
            名: 'loricatobaical-ensis',
        },
        {
            id: '7',
            姓: 'あけち',
            名: 'こごろう',
        },
    ],
    label: 'ラベル',
    multiple: true,
})

const clearable: {
    modelValue: string
    bloodTypeList: string[]
    label: string
    clearable: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '',
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: 'ラベル',
    clearable: true,
    variant: 'filled',
})

const disabled: {
    modelValue: string
    bloodTypeList: string[]
    label: string
    disabled: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: 'A型',
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: 'ラベル',
    disabled: true,
    variant: 'filled'
})

const readonly: {
    modelValue: string
    bloodTypeList: string[]
    label: string
    readonly: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '',
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: 'ラベル',
    readonly: true,
    variant: 'filled'
})

const error: {
    modelValue: string
    bloodTypeList: string[]
    label: string
    error: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: '',
    bloodTypeList: [
        'A型',
        'B型',
        'O型',
        'AB型',
    ],
    label: 'ラベル',
    error: true,
    variant: 'filled'
})

const isAllChecked = computed({
    get: () => custom.modelValue.length === custom.nameList.length,
    set: value => {
        return value
    }
})

const customToggle = () => {
    if(custom.modelValue.length === custom.nameList.length) return custom.modelValue = []
    return custom.modelValue = custom.nameList.map(x => x.id)
}

</script>

<template>
<Story
    title="Form / CSelect"
    :layout="{ type: 'grid', width: 500 }"
>
    <Variant title="基本" auto-props-disabled>
        <c-box>
            <c-select
                v-model="data.modelValue"
                :items="data.bloodTypeList"
                :label="data.label"
                :variant="data.variant"
            />
        </c-box>  
        <template #controls>
            <HstText v-model="data.modelValue" title="modelValue"/>
            <HstJson v-model="data.bloodTypeList" title="items"/>
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
        </template>
    </Variant>
    <Variant title="オブジェクトの配列の場合" auto-props-disabled>
        <c-box>
            <c-select
                v-model="object.modelValue"
                :items="object.nameList"
                :label="object.label"
            >
                <template v-slot:selection="{item}">
                    {{ item.name }}
                </template>
                <template v-slot:item="{item}">
                    {{ item.name }}
                </template>
            </c-select>
        </c-box>
        <template #controls>
            <HstJson v-model="object.nameList" title="items"/>
        </template>
    </Variant>
    <Variant title="複数選択" auto-props-disabled>
        <c-box>
            <c-select
                v-model="multiple.modelValue"
                :items="multiple.bloodTypeList"
                :label="multiple.label"
                multiple
            />
        </c-box>
        <template #controls>
        </template>
    </Variant> 
    <Variant title="カスタム" auto-props-disabled>
        <c-box>
            <c-select
                v-model="custom.modelValue"
                :items="custom.nameList"
                item-value="id"
                :label="custom.label"
                :multiple="custom.multiple"
            >
                <template v-slot:prependItem>
                    <c-checkbox
                    v-model="isAllChecked"
                    @click="customToggle"
                    label="全選択"/>
                </template>
                <template v-slot:selection="{item, index}">
                    <span v-if="index < 2">
                        {{ item.姓+' '+item.名 }} 
                    </span>
                    {{ index < custom.modelValue.length-1 && index < 2 ?', ':'' }}
                    <span
                        v-if="index === 2"
                        class="text-grey text-caption align-self-center"
                        >
                        +{{ custom.modelValue.length - 2 }}人
                    </span>
                </template>
                <template v-slot:item="{item}">
                    {{ item.姓+' '+item.名 }}
                </template>
            </c-select>
        </c-box>
        <template #controls>
            <HstJson v-model="custom.nameList" title="items"/>
            <HstCheckbox v-model="custom.multiple" title="multiple"/>
        </template>
    </Variant>
    <Variant title="clearable" auto-props-disabled>
        <c-box>
            <c-select
                v-model="clearable.modelValue"
                :items="clearable.bloodTypeList"
                :label="clearable.label"
                :clearable="clearable.clearable"
                :variant="clearable.variant"
            />
        </c-box>
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
    <Variant title="不活性化" auto-props-disabled>
        <c-box>
            <c-select
                v-model="disabled.modelValue"
                :items="disabled.bloodTypeList"
                :label="disabled.label"
                :variant="disabled.variant"
                :disabled="disabled.disabled"
            />
        </c-box>
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
        <c-box>
            <c-select
                v-model="readonly.modelValue"
                :items="readonly.bloodTypeList"
                :label="readonly.label"
                :variant="readonly.variant"
                :readonly="readonly.readonly"
            />
        </c-box>
        <template #controls>
            <HstCheckbox v-model="readonly.readonly" title="readonly"/>
            <HstSelect
            v-model="data.variant"
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
        <c-box>
            <c-select
                v-model="error.modelValue"
                :items="error.bloodTypeList"
                :label="error.label"
                :variant="error.variant"
                :error="error.error"
            >
            <template v-slot:errorMessage>
                入力してください
            </template>
            </c-select>
        </c-box>
        <template #controls>
            <HstCheckbox v-model="error.error" title="error"/>
            <HstSelect
            v-model="data.variant"
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
# CSelect
基本的なセレクトボックス部品です。下記のProps/Eventsの他に、
html標準のbutton要素と同様の属性/イベントを扱うことができます。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | any | null | コンポーネントのv-model値です |
| items | any[] | [] | オブジェクトの配列、または文字列の配列を指定できます。オブジェクトの配列の場合、itemValueを使用することで、キーを変更できます。 |
| itemValue | string | 'value' | itemsがオブジェクトの配列の場合、識別するためのキーを指定することができます |
| label | string | '' | ラベルに設定するテキストを指定します |
| variant | 'filled'/'outlined'/'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| multiple | boolean | false | 複数選択を可能にする場合は指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| clearable | boolean | false | 選択した値をクリアするボタンを追加する場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| selection | item / index| 選択された値の表示方法をカスタムできます |
| prependItem |  | ドロップダウンリストの先頭に追加する表示項目を指定します |
| item | item/index| ドロップダウンリストの各項目の表示方法をカスタムできます |
| empty |  | ドロップダウンリストに一件も表示されない時に使用します |
| errorMessage |  | エラーの時のメッセージを表示する時に使用します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
</docs>
