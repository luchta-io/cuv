<script setup lang="ts">
import { reactive } from 'vue';
import CImposter from '@/components/layout/CImposter.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    breakout: boolean
    margin: string
    fixed: boolean
} = reactive({
    breakout: true,
    margin: '0px',
    fixed: true,
})
</script>

<template>
    <Story 
    title="Layout / CImposter">
    <Variant title="breakout" auto-props-disabled>
            <div class="relative bg-gray-100 my-20">
                <h3>位置指定コンテナ</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                <c-imposter
                :breakout="data.breakout"
                class="with-outline"
                >
                    <c-box class="bg-yellow-200">
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                    </c-box>
                </c-imposter>
            </div>
            <template #controls>
                <HstCheckbox 
                v-model="data.breakout"
                title="breakout"
                />
            </template>
        </Variant>
        <Variant title="margin" auto-props-disabled>
            <div class="relative bg-gray-100 my-20">
                <h3>位置指定コンテナ</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                <c-imposter
                :margin="data.margin"
                class="with-outline bg-white"
                >
                    <c-box>
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                    </c-box>
                </c-imposter>
            </div>
            <template #controls>
                <HstText
                v-model="data.margin"
                title="margin"
                />
            </template>
        </Variant>
        <Variant title="fixed" auto-props-disabled>
            <div class="relative bg-gray-100 my-20">
                <h3>位置指定コンテナ</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                <c-imposter
                :fixed="data.fixed"
                class="with-outline bg-yellow-200"
                >
                    <c-box>
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                    </c-box>
                </c-imposter>
            </div>
            <template #controls>
                <HstCheckbox 
                v-model="data.fixed"
                title="fixed"
                />
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CImposter
意図的にコンテンツを隠したい場合などに、コンテンツの上に重ねて表示することができるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| breakout | boolean | false | 位置指定コンテナから要素がはみ出しても良いか |
| margin | string | "0px" | (breakoutが適用されていない場合に)要素が配置される位置指定コンテナの内側の縁と要素との間にできる最小の余白 |
| fixed | boolean | false | 要素をビューポート基準に配置するかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CImposter内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>