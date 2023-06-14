<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiAccount } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";

const data: {
  color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
  icon: boolean
  variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
} = reactive({
  color: 'light',
  icon: false,
  variant: 'elevated',
})
</script>

<template>
  <Story
      title="Containment / CButton"
      :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="基本" auto-props-disabled>
      <CBox>
        <CCluster justify="center">
          <CButton
              @click="logEvent('fire native click event', $event)"
              @focus="logEvent('fire native focus event', $event)"
              :color="data.color"
              :icon="data.icon?mdiAccount:''"
              :variant="data.variant"
          >
            ボタン
          </CButton>
        </CCluster>  
      </CBox>

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
        <HstSelect
            v-model="data.variant"
            title="variant"
            :options="[
                        {value: 'text', label: 'text'},
                        {value: 'flat', label: 'flat'},
                        {value: 'elevated', label: 'elevated'},
                        {value: 'tonal', label: 'tonal'},
                        {value: 'outlined', label: 'outlined'},
                        {value: 'plain', label: 'plain'},
                    ]"
        />
        <HstCheckbox
            v-model="data.icon"
            title="icon"
        />     
      </template>
    </Variant>

    <Variant title="非活性" auto-props-disabled>
      <CBox>
        <CCluster justify="center">
          <CButton disabled>
            ボタン
          </CButton>
        </CCluster>
      </CBox>
    </Variant>

    <Variant title="長いコンテンツ" auto-props-disabled>
      <CBox>
        <CCluster justify="center">
          <CButton>
            床下もかっこうの身動きおいで団にセロをやる猫なない。するともう少し同じうたという医者ますまし。愉快たたんではでしでは萱の上手館のなかではふらふらまっ黒たまして、いつだけ灰からついれ方たます。わからすぎこれも猫へ永くたが一生けん命の汗の先生らでかける第一ゴーシュたちのまねにのんていたな。公会堂はいまできといた。
          </CButton>
        </CCluster>
      </CBox>
    </Variant>

  </Story>
</template>

<docs lang="md">
# CButton

基本的なボタン部品です。
フォールスルー属性が適用されています。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | ボタンの色を指定します |
| outlined | boolean | false | ボタンの見た目をアウトラインボタンにする場合は指定します |
| id | string | undefined | idを指定します |
| name | string | undefined | nameを指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | ボタンに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
