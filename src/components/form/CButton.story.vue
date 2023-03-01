<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import CButton from "@/components/form/CButton.vue";

const data: {
  color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
  outlined: boolean
} = reactive({
  color: 'light',
  outlined: false,
})
</script>

<template>
  <Story
      title="Form / CButton"
      :layout="{ type: 'grid', width: 200 }"
  >

    <Variant title="基本" auto-props-disabled>
      <CButton
          @click="logEvent('fire native click event', $event)"
          @focus="logEvent('fire native focus event', $event)"
          :color="data.color"
          :outlined="data.outlined"
      >
        ボタン
      </CButton>

      <template #controls>
        <HstSelect
            v-model="data.color"
            title="Color"
            :options="[
                        {value: 'white', label: 'white'},
                        {value: 'black', label: 'black'},
                        {value: 'light', label: 'light'},
                        {value: 'dark', label: 'dark'},
                        {value: 'primary', label: 'primary'},
                        {value: 'link', label: 'link'},
                        {value: 'success', label: 'success'},
                        {value: 'danger', label: 'danger'},
                        {value: 'warning', label: 'warning'},
                        {value: 'info', label: 'info'},
                    ]"
        />
        <HstCheckbox
            v-model="data.outlined"
            title="Outline"
        />
      </template>
    </Variant>

    <Variant title="非活性">
      <CButton disabled>
        ボタン
      </CButton>
    </Variant>

    <Variant title="長いコンテンツ">
      <CButton>
        我輩は猫である。名前はまだ無い。どこで生まれたかとんと検討がつかぬ。
      </CButton>
    </Variant>

  </Story>
</template>

<docs lang="md">
# CButton

基本的なボタン部品です。下記のProps/Eventsの他に、
html標準のbutton要素と同様の属性/イベントを扱うことができます。
refs. https://developer.mozilla.org/ja/docs/Web/HTML/Element/button

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' / 'black' / 'light' / 'dark' / 'primary' / 'link' / 'success' / 'danger' / 'warning' / 'info' | 'light' | ボタンの色を指定します |
| outlined | boolean | false | ボタンの見た目をアウトラインボタンにする場合は指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | ボタンに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
