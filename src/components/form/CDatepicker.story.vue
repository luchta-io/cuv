<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiComment, mdiClock } from '@mdi/js';
import CBox from "@/components/layout/CBox.vue";
import CDatepicker from "@/components/form/CDatepicker.vue";
import CStack from '@/components/layout/CStack.vue'

const data: {
    autoApply: boolean
    cancelText: string
    clearable: boolean
    enableSeconds: boolean
    enableTimePicker: boolean
    disabled: boolean
    label: string
    modelValue: any
    multiDates: boolean
    placeholder: string|undefined
    readonly: boolean
    selectText: string
    textInput: boolean
    variant: 'filled'|'outlined'|'underlined'
    weekStart: string
} = reactive({
    autoApply: true,
    cancelText: 'キャンセル',
    clearable: true,
    disabled: false,
    enableSeconds: false,
    enableTimePicker: true,
    label: 'ラベル',
    modelValue: undefined,
    multiDates: false,
    placeholder: '入力してください',
    readonly: false,
    selectText: '選択',
    textInput: true,
    variant: 'filled',
    weekStart: '1',
})

const monthPicker: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
})

const timePicker: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
})

const customFormat: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
    format: string
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
    format: 'yyyy年MM月dd HH時mm分',
})

const functionCustomFormat: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
})

const multi: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: [new Date()],
    variant: 'filled',
})

const disableDate: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
})

const icons: {
    modelValue: any
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    variant: 'filled',
})

const disabled: {
    modelValue: any
    disabled: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    disabled: true,
    variant: 'filled',
})

const readonly: {
    modelValue: any
    readonly: boolean
    variant: 'filled'|'outlined'|'underlined'
} = reactive({
    modelValue: new Date(),
    readonly: true,
    variant: 'filled',
})

const error: {
    modelValue: any
    label: string
    placeholder: string
    variant: 'filled'|'outlined'|'underlined'
    error: boolean
    errorMessage: string|Array<string>
    maxErrors: string|undefined
} = reactive({
    modelValue: new Date(),
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

const dDate = (date:Date) => {
    return date < new Date();
}

const format = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}年${month}月${day}日`;
}
</script>

<template>
<Story
    title="Form Inputs & Controls / CDatepicker"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox>
            <CDatepicker 
            v-model="data.modelValue"
            :auto-apply="data.autoApply"
            :cancel-text="data.cancelText"
            :clearable="data.clearable"
            :disabled="data.disabled"
            :enable-seconds="data.enableSeconds"
            :enable-time-picker="data.enableTimePicker"
            :label="data.label"
            :multi-dates="data.multiDates"
            :placeholder="data.placeholder"
            :readonly="data.readonly"
            :variant="data.variant"
            :select-text="data.selectText"
            :text-input="data.textInput"
            :week-start="data.weekStart"
            />
        </CBox>
        <template #controls>
            <HstText v-model="data.modelValue" title="modelValue"/>
            <HstCheckbox v-model="data.autoApply" title="autoApply"/>
            <HstText v-model="data.cancelText" title="cancelText"/>      
            <HstCheckbox v-model="data.clearable" title="clearable"/>
            <HstCheckbox v-model="data.disabled" title="disabled"/>
            <HstCheckbox v-model="data.enableSeconds" title="enableSeconds"/>
            <HstCheckbox v-model="data.enableTimePicker" title="enableTimePicker"/>
            <HstText v-model="data.label" title="label"/>
            <HstCheckbox v-model="data.multiDates" title="multiDates"/>
            <HstText v-model="data.placeholder" title="placeholder"/>
            <HstCheckbox v-model="data.readonly" title="readonly"/>
            <HstText v-model="data.selectText" title="selectText"/>      
            <HstSelect
            v-model="data.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
            <HstText v-model="data.weekStart" title="weekStart"/>      
        </template>    
    </Variant>  
    <Variant title="Month Picker" auto-props-disabled>
        <CBox>
            <CDatepicker v-model="monthPicker.modelValue" :variant="monthPicker.variant" month-picker/>
        </CBox>
        <template #controls>
            <HstSelect
            v-model="monthPicker.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>    
    </Variant>  
    <Variant title="Time Picker" auto-props-disabled>
        <CBox>
            <CDatepicker v-model="timePicker.modelValue" :variant="timePicker.variant" :prepend-inner-icon="mdiClock" time-picker/>
        </CBox>
        <template #controls>
            <HstSelect
            v-model="timePicker.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>    
    </Variant>  
    <Variant title="Format" auto-props-disabled>
        <CBox>
            <CStack>
                <div>文字列を渡した場合</div>
                <CDatepicker v-model="customFormat.modelValue" :variant="customFormat.variant" :format="customFormat.format"/>
                <div>関数指定</div>
                <CDatepicker v-model="functionCustomFormat.modelValue" :variant="functionCustomFormat.variant" :format="format"/>
            </CStack>
        </CBox>
        <template #controls>
            <HstText v-model="customFormat.format" title="format(文字列)"/>
            <HstSelect
            v-model="customFormat.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>    
    </Variant>  
    <Variant title="複数選択" auto-props-disabled>
        <CBox>
            <CDatepicker v-model="multi.modelValue" :variant="multi.variant" :auto-apply="false" select-text="選択" cancel-text="キャンセル" multi-dates/>
        </CBox>
        <template #controls>
            <HstSelect
            v-model="multi.variant"
            title="variant"
            :options="[
                {value: 'filled', label: 'filled'},
                {value: 'outlined', label: 'outlined'},
                {value: 'underlined', label: 'underlined'},
            ]"
            />
        </template>    
    </Variant>  
    <Variant title="非活性な日付" auto-props-disabled>
        <CBox>
            <CDatepicker v-model="disableDate.modelValue" :variant="disableDate.variant" :disabled-dates="dDate"/>
        </CBox>
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
    <Variant title="Icons" auto-props-disabled>
        <CBox>
            <CStack>
                <CDatepicker v-model="icons.modelValue" :variant="icons.variant" :prepend-icon="mdiComment" @click:prepend="logEvent('click:prepend', $event)"/>
                <CDatepicker v-model="icons.modelValue" :variant="icons.variant" :append-icon="mdiComment" @click:append="logEvent('click:append', $event)"/>
                <CDatepicker v-model="icons.modelValue" :variant="icons.variant" :prepend-inner-icon="mdiComment" @click:prependInner="logEvent('click:prependInner', $event)"/>
                <CDatepicker v-model="icons.modelValue" :variant="icons.variant" :append-inner-icon="mdiComment" @click:appendInner="logEvent('click:appendInner', $event)"/>
            </CStack>
        </CBox>
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
        <CBox>
            <CDatepicker v-model="disabled.modelValue" :variant="disabled.variant" :disabled="disabled.disabled"/>
        </CBox>
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
        <CBox>
            <CDatepicker v-model="readonly.modelValue" :variant="readonly.variant" :readonly="readonly.readonly"/>
        </CBox>
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
        <CBox>
            <CDatepicker 
            v-model="error.modelValue"
            :label="error.label"
            :placeholder="error.placeholder"
            :variant="error.variant"
            :error="error.error"
            :error-message="error.errorMessage"
            :max-errors="error.maxErrors"
            />
        </CBox>
        <template #controls>
            <HstText v-model="error.label" title="label"/>
            <HstText v-model="error.placeholder" title="placeholder"/>
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
# CDatepicker

ユーザーがカレンダーから日付、時刻などを選択することが可能なフォームコンポーネントです。
内部に[Vue datepicker](https://vue3datepicker.com/)ライブラリを使用しています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | 入力フォームの右外側に表示させるiconを指定します |
| appendInnerIcon | string | undefined | 入力フォームの右内側に表示させるiconを指定します |
| autoApply | boolean | true | カレンダーから日付値をクリックすると値が自動的に選択されます |
| cancelText | string | 'Cancel' | `autoApply`がfalseの場合、キャンセルボタンのテキストを指定します |
| clearable | boolean | false | 入力されたテキストをクリアするボタンを追加する場合は指定します |
| disabled | boolean | false | 非活性にする場合は指定します |
| disabledDates | Date[] \| string[] \| (date: Date) => boolean | undefined | 特定の日付を無効にする場合は指定します |
| enableSeconds | boolean | false | タイムピッカーで秒を有効にする場合は指定します |
| enableTimePicker | boolean | true | タイムピッカーを有効にする場合は指定します |
| error | boolean | false | コンポーネントをエラー状態にする場合は指定します |
| errorMessage | string/string[] | '' | コンポーネントをエラー状態にし、表示するメッセージを指定します|
| format | string\|((params: Date) => string) | undefined | フォーマット(日付の形式)を指定します。[詳細](https://vue3datepicker.com/props/formatting/#format) |
| id | string | undefined | idを指定します |
| label | string | '' | ラベルに設定するテキストを指定します |
| maxErrors | string\|number | undefined | 表示するエラーメッセージの数を制限します |
| modelValue | any | null | コンポーネントのv-model値です |
| monthPicker | boolean | false | 年月の選択をする場合は指定します |
| multiDates | boolean | false | 値の複数選択を可能にする場合は指定します |
| name | string | undefined | nameを指定します |
| placeholder | string | '' | placeholderのメッセージを指定することができます |
| prependIcon | string | undefined | 入力フォームの左外側に表示させるiconを指定します |
| prependInnerIcon | string | `mdiCalendar` | 入力フォームの左内側に表示させるiconを指定します |
| readonly | boolean | false | 読み取り専用にする場合は指定します |
| selectText | string | 'Select' | `autoApply`がfalseの場合、選択ボタンのテキストを指定します |
| textInput | boolean | true | 入力可能にする場合は指定します |
| timePicker | boolean | false | 時刻の選択をする場合は指定します |
| timezone | string | 'Asia/Tokyo' | タイムゾーンを指定することができます[詳細](https://vue3datepicker.com/props/modes/#timezone) |
| variant | 'filled'\|'outlined'\|'underlined' | 'filled' | コンポーネントに独自のスタイルを指定します |
| weekStart | number\|string | 1 | 曜日の開始値を0~6から指定することが可能です(例: 1→`月曜日`) |
| yearPicker | boolean | false | 年の選択をする場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のSlotはありません |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click:append | - | 入力フォームの右外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prepend | - | 入力フォームの左外側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:appendInner | - | 入力フォームの右内側に表示されたアイコンをクリックした時に発行されるイベントです |
| click:prependInner | - | 入力フォームの左内側に表示されたアイコンをクリックした時に発行されるイベントです |
</docs>
