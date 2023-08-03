<script setup lang="ts">
import { reactive } from "vue";
import { mdiCrown, mdiEarth, mdiMicrophone, mdiBaseballBat, mdiLaptop, mdiArrowRightBoldBoxOutline, mdiArrowLeftBoldBoxOutline } from '@mdi/js';
import CBox from "@/components/layout/CBox.vue";
import CTabs from "@/components/navigation/CTabs.vue";
import CTab from "@/components/navigation/CTab.vue";
import CSheet from "@/components/containment/CSheet.vue";
import CStack from "@/components/layout/CStack.vue";

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const news = [
  'ランキング',
  'エンタメ',
  'スポーツ',
  '経済',
  '国内',
  'IT',
  '地域',
  'グローバル',
  '科学',
  'ライフ'
]

const number = [
  'one',
  'two',
  'three'
]

const data: {
  alignTabs: 'end' | 'start' | 'center' | 'title'
  bgColor: ColorType
  color: ColorType
  density:'default' | 'comfortable' | 'compact'
  disabled: boolean
  grow: boolean
  modelValue: string
} = reactive({
  alignTabs: 'start',
  bgColor: 'primary',
  color: 'white',
  density:'default',
  disabled: false,
  grow: false,
  modelValue: 'ランキング'
})

const custom: {
  items: Array<string>
  modelValue: string
} = reactive({
  items: news,
  modelValue: 'ランキング'
})

const alignTabs: {
  modelValue: string
} = reactive({
  modelValue: 'one'
})

const grow: {
  modelValue: string
} = reactive({
  modelValue: 'one'
})

const arrows: {
  modelValue: string
} = reactive({
  modelValue: ''
})

const customIcon: {
  modelValue: string
} = reactive({
  modelValue: ''
})

const disabled: {
  modelValue: string
} = reactive({
  modelValue: 'one'
})

</script>

<template>
  <Story
      title="Navigation / CTabs"
      :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="基本" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="data.modelValue"
        :items="news"
        :align-tabs="data.alignTabs"
        :bg-color="data.bgColor"
        :color="data.color"
        :density="data.density"
        :disabled="data.disabled"
        :grow="data.grow"
        />
      </CBox>
      <template #controls>
        <HstText v-model="data.modelValue" title="modelValue"/>
        <HstSelect
            v-model="data.alignTabs"
            title="alignTabs"
            :options="[
                        {value: 'start', label: 'start'},
                        {value: 'center', label: 'center'},
                        {value: 'end', label: 'end'},
                        {value: 'title', label: 'title'},
                    ]"
        />
        <HstSelect
            v-model="data.bgColor"
            title="bgColor"
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
            v-model="data.color"
            title="color"
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
          <HstCheckbox v-model="data.disabled" title="disabled"/>
          <HstCheckbox v-model="data.grow" title="grow"/>
          <HstJson v-model="news" title="items"/>
      </template>
    </Variant>
    <Variant title="カスタム" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="custom.modelValue"
        >
          <CTab color="danger" value="ランキング" :prepend-icon="mdiCrown">
            ランキング
          </CTab>
          <CTab color="link" value="国内" :prepend-icon="mdiEarth">
            国内
          </CTab>
          <CTab color="warning" value="エンタメ" :prepend-icon="mdiMicrophone">
            エンタメ
          </CTab>
          <CTab color="info" value="スポーツ" :prepend-icon="mdiBaseballBat">
            スポーツ
          </CTab>
          <CTab color="success" value="IT" :prepend-icon="mdiLaptop">
            IT
          </CTab>
        </CTabs>
        <CSheet color="light">
          <CBox padding="large" v-show="custom.modelValue === 'ランキング'">
            ランキングページ
          </CBox>
          <CBox padding="large" v-show="custom.modelValue === '国内'">
            国内ページ
          </CBox>
          <CBox padding="large" v-show="custom.modelValue === 'エンタメ'">
            エンタメページ
          </CBox>
          <CBox padding="large" v-show="custom.modelValue === 'スポーツ'">
            スポーツページ
          </CBox>
          <CBox padding="large" v-show="custom.modelValue === 'IT'">
            ITページ
          </CBox>
        </CSheet>
      </CBox>
    </Variant>
    <Variant title="alignTabs" auto-props-disabled>
      <CBox>
        <div class="font-semibold text-gray-700 pb-1">start</div>
        <CTabs 
        v-model="alignTabs.modelValue"
        :items="number"
        align-tabs="start"
        bg-color="light"
        />
      </CBox>
      <CBox>
        <div class="font-semibold text-gray-700 pb-1">center</div>
        <CTabs 
        v-model="alignTabs.modelValue"
        :items="number"
        align-tabs="center"
        bg-color="light"
        />
      </CBox>
      <CBox>
        <div class="font-semibold text-gray-700 pb-1">end</div>
        <CTabs 
        v-model="alignTabs.modelValue"
        :items="number"
        align-tabs="end"
        bg-color="light"
        />
      </CBox>
      <CBox>
        <div class="font-semibold text-gray-700 pb-1">title</div>
        <CTabs 
        v-model="alignTabs.modelValue"
        :items="number"
        align-tabs="title"
        bg-color="light"
        />
      </CBox>
    </Variant>
    <Variant title="grow" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="grow.modelValue"
        :items="number"
        grow
        bg-color="light"
        />
      </CBox>
    </Variant>
    <Variant title="density" auto-props-disabled>
      <CBox>
        <CStack space="0.5rem">
          <div class="font-semibold text-gray-700">compact</div>
          <CTabs 
          v-model="grow.modelValue"
          :items="number"
          density="compact"
          bg-color="info"
          color="white"
          />
        </CStack>
      </CBox>
      <CBox>
        <CStack space="0.5rem">
          <div class="font-semibold text-gray-700">comfortable</div>
          <CTabs 
          v-model="grow.modelValue"
          :items="number"
          density="comfortable"
          bg-color="info"
          color="white"
          />
        </CStack>
      </CBox>
    </Variant>
    <Variant title="show-arrows" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="arrows.modelValue"
        :items="news"
        show-arrows
        bg-color="light"
        />
      </CBox>
    </Variant>
    <Variant title="Customs Icon" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="customIcon.modelValue"
        :items="news"
        :prev-icon="mdiArrowLeftBoldBoxOutline"
        :next-icon="mdiArrowRightBoldBoxOutline"
        show-arrows
        bg-color="light"
        />
      </CBox>
    </Variant>
    <Variant title="disabled" auto-props-disabled>
      <CBox>
        <CTabs 
        v-model="disabled.modelValue"
        :items="number"
        disabled
        bg-color="light"
        />
      </CBox>
    </Variant>

  </Story>
</template>

<docs lang="md">
# CTabs / CTab

複数のタブを作成することで、ページ上のコンテンツを整理することが可能なコンポーネントです。

## Props
* colorType = 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info'

### CTabs
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| alignTabs | 'end' \| 'start' \| 'center' \| 'title' | 'start' | コンポーネントの位置を指定します |
| bgColor | colorType* | 'white' | `background-color`を指定します |
| color | colorType | 'black' | 選択されているタブの`color`を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| disabled | boolean | false | 非活性にする場合は指定します |
| grow | boolean | false | 可能な範囲で全てのスペースに広がるかどうかを指定します |
| items | string[] | undefined | タブに表示するテキストを配列で渡します。この値は`value`の値としても使用されます。 |
| modelValue | string | '' | v-model値を指定します |
| nextIcon | string | undefined | `show-arrows`がtrueの場合、右に表示されるアイコンをカスタムすることができます |
| prevIcon | string | undefined | `show-arrows`がtrueの場合、左に表示されるアイコンをカスタムすることができます |
| showArrows | boolean | false | タブの左右に矢印を表示させる場合は指定します |

### CTab
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | コンポーネントの右側に表示させるiconを指定します |
| color | colorType | 'black' | 選択されているタブの`color`を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| disabled | boolean | false | 非活性にする場合は指定します |
| elevation | 'small' \| 'medium' \| 'large' | undefined | 影をつける場合に指定します |
| icon | string | undefined | iconを指定します |
| prependIcon | string | undefined | コンポーネントの左側に表示させるiconを指定します |
| value | string \| number | undefined | valueの値を指定します |


## Slots

### CTabs
| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CTabsに表示するコンテンツを指定します |

### CTab
| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CTabに表示するコンテンツを指定します |

## Events

### CTabs
| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |

### CTab
| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
