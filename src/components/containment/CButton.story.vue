<script setup lang="ts">
import {reactive} from "vue";
import {logEvent} from "histoire/client";
import { mdiAccount, mdiAccountCircle } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";

const data: {
  appendIcon: boolean
  color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
  density: 'default' | 'comfortable' | 'compact'
  elevation: 'small'|'medium'|'large'|undefined
  icon: boolean
  prependIcon: boolean
  rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
  size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
  variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
} = reactive({
  appendIcon: false,
  color: 'light',
  density: 'default',
  elevation: undefined,
  icon: false,
  prependIcon: false,
  rounded: 'medium',
  size: 'medium',
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
              :append-icon="data.appendIcon?mdiAccountCircle:undefined"
              :color="data.color"
              :density="data.density"
              :elevation="data.elevation"
              :icon="data.icon?mdiAccount:''"
              :prepend-icon="data.prependIcon?mdiAccountCircle:undefined"
              :rounded="data.rounded"
              :size="data.size"
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
          v-model="data.density"
          title="density"
          :options="[
                      {value: 'default', label: 'default'},
                      {value: 'comfortable', label: 'comfortable'},
                      {value: 'compact', label: 'compact'},
                  ]"
          />
        <HstSelect
            v-model="data.elevation"
            title="elevation"
            :options="[
                        {value: undefined, label: 'undefined'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                    ]"
        />
        <HstSelect
            v-model="data.size"
            title="size"
            :options="[
                        {value: 'x-small', label: 'x-small'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                        {value: 'x-large', label: 'x-large'},
                    ]"
        />
        <HstSelect
            v-model="data.rounded"
            title="rounded"
            :options="[
                        {value: 'none', label: 'none'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                        {value: 'x-large', label: 'x-large'},
                        {value: 'circle', label: 'circle'},
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
        <HstCheckbox v-model="data.prependIcon" title="prepend-icon"/>
        <HstCheckbox v-model="data.appendIcon" title="append-icon"/>

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

    <Variant title="サイズ" auto-props-disabled>
      <CBox>
        <CCluster justify="space-around" align="center">
          <CButton size="x-small">
              x-small button
          </CButton>
          <CButton size="small">
              small button
          </CButton>
          <CButton>
              medium button (default)
          </CButton>
          <CButton size="large">
              large button
          </CButton>
          <CButton size="x-large">
              x-large button
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
