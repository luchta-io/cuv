<script setup lang="ts">
import { reactive } from "vue";
import { mdiArrowRight, mdiChevronRight } from '@mdi/js';
import CBreadcrumbs from "@/components/navigation/CBreadcrumbs.vue";
import CSvgIcon from "@/components/images/CSvgIcon.vue";

type ColorType =
  'white' | 'black' | 'light' | 'dark' | 
  'primary' | 'link' |
  'success' | 'danger' | 'warning' | 'info'

type ItemsType = {
  title: string,
  disabled?: boolean,
  href?: string
}

const pageStringList = [
  'Home',
  'Doc',
  'Breadcrumb'
]

const pageObjectList = [
  {
    title: 'Home',
    disabled: false,
    href: 'link_home'
  },
  {
    title: 'Doc',
    disabled: false,
    href: 'link_doc'
  },
  {
    title: 'Breadcrumb',
    disabled: true,
    href: 'link_breadcrumbs'
  },
]

const pageObjectRouterLinkList = [
  {
    title: 'Home',
    disabled: false,
    to: 'link_home'
  },
  {
    title: 'Doc',
    disabled: false,
    to: 'link_doc'
  },
  {
    title: 'Breadcrumb',
    disabled: true,
    to: 'link_breadcrumbs'
  },
]

const data: {
  bgColor: ColorType | undefined
  color: ColorType | undefined
  items: (string | ItemsType)[],
  density: 'default' | 'comfortable' | 'compact'
  divider: string
  rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
} = reactive({
  bgColor: undefined,
  color: undefined,
  items: pageObjectList,
  density: 'default',
  divider: '/',
  rounded: 'none',
})

</script>

<template>
<Story
  title="Navigation / CBreadcrumbs"
  :layout="{ type: 'grid', width: '100%' }"
>
  <Variant title="基本" auto-props-disabled>
    <CBreadcrumbs
      :bg-color="data.bgColor"
      :color="data.color"
      :density="data.density"
      :divider="data.divider"
      :items="data.items"
      :rounded="data.rounded"
    />
    <template #controls>
      <HstSelect
          v-model="data.bgColor"
          title="bgColor"
          :options="[
                      {value: undefined, label: 'undefined'},
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
          v-model="data.color"
          title="color"
          :options="[
                      {value: undefined, label: 'undefined'},
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
      <HstText v-model="data.divider" title="divider"/>
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
      <HstJson v-model="data.items" title="items"/>
    </template>
  </Variant>
  <Variant title="router-link" auto-props-disabled>
    <CBreadcrumbs
      :items="pageObjectRouterLinkList"
    />
  </Variant>
  <Variant title="Props Divider" auto-props-disabled>
    <CBreadcrumbs
      :items="pageStringList"
      divider="-"
    />
    <CBreadcrumbs
      :items="pageStringList"
      divider="."
    />
  </Variant>
  <Variant title="Slots Divider" auto-props-disabled>
    <CBreadcrumbs
      :items="pageStringList"
    >
      <template #divider>
        <CSvgIcon :icon="mdiArrowRight"/>
      </template>
    </CBreadcrumbs>
    <CBreadcrumbs
      :items="pageStringList"
    >
      <template #divider>
        <CSvgIcon :icon="mdiChevronRight"/>
      </template>
    </CBreadcrumbs>
  </Variant>
  <Variant title="Slots Title" auto-props-disabled>
    <CBreadcrumbs
      :items="pageStringList"
    >
      <template v-slot:title="{ item }">
        {{ item.toUpperCase() }}
      </template>
    </CBreadcrumbs>
  </Variant>
</Story>
</template>

<docs lang="md">
# CBreadcrumbs

ユーザーが今WEBサイト上のどこにいるのかを伝えることが可能な、階層順のリストコンポーネントです。またはパンくずリストとも呼ばれます。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| bgColor | ColorType*1 | undefined | `background-color`を指定します |
| color | ColorType*1 | undefined | titleの`color`を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| divider | string | '/' | 階層を区切る文字列を指定します |
| items | (string \| ItemsType*2)[] | undefined | Breadcrumbsを自動生成するために使用される文字列またはオブジェクトの配列を渡します*3 |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'none' | コンポーネントの`border-radius`を指定します |

* *1 : ColorType = `'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info'`
* *2 : ItemsType = `{
  title: string;
  disabled?: boolean;
  href?: string;
  to?: string;
}`
* *3 : リンクを使用する場合
  * aタグ = itemsオブジェクトに、hrefを追加することで、リンクを渡すことができます
  * router-linkタグ = itemsオブジェクトに、toを追加することで、リンクを渡すことができます

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| title | `{index: number, item: string\|ItemsType}` | title部分に表示するコンテンツを表示します |
| divider | `{index: number, item: string\|ItemsType}` | パンくずの区切り部分に表示するコンテンツを表示します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>
