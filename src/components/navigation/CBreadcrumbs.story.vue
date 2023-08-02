<script setup lang="ts">
import { reactive } from "vue";

</script>

<template>
  <Story
      title="Navigation / CTabs"
      :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="基本" auto-props-disabled>
      <template #controls>
      </template>
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
| alignTabs | 'end' \| 'start' \| 'center' | 'start' | コンポーネントの位置を指定します |
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
