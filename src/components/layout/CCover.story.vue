<script setup lang="ts">
import { reactive } from 'vue';
import CCover from '@/components/layout/CCover.vue';
import CStack from '@/components/layout/CStack.vue';

const data: {
    centered: string
    space: string
    minHeight: string
    noPad: boolean
} = reactive({
    centered: "div",
    space: "1rem",
    minHeight: "100vh",
    noPad: true,
})

</script>

<template>
    <Story title="Layout / CCover">
        <Variant title="centered" auto-props-disabled>
            <div class="h-screen bg-gray-100">
                <c-cover
                    :centered="data.centered"
                    class="with-outline bg-white"
                >
                    <h1 class="text-3xl">H1</h1>
                    <h2 class="text-2xl">H2</h2>
                    <div>Div</div>
                    <h3 class="text-xl">H3</h3>
                    <p>P</p>
                </c-cover>
            </div>
            <template #controls>
                <HstText v-model="data.centered" title="centered"/>
            </template>
        </Variant>
        <Variant title="space" auto-props-disabled>
            <c-cover
                :space="data.space"
                class="with-outline bg-yellow-200"
            >
                <p class="bg-white text-2xl">セロ弾きのゴーシュ</p>
                <p class="bg-white text-xl">宮沢賢治</p>
                <p class="bg-white">かっこうは町はずれのきょろきょろ耳げへ児にする一心たらだ。ではちょっといいかげんじましというかっこうたでし。上手ましましのましはましすると棒のそれどころみちの上へもやっと愉快うでしが、おれまで下へつきあたっれことなかった。</p>
                <p class="bg-white">とまっすぎみんなもぶんを白いたとこんどの子の療屋へ出し第一セロ手のかっかをなれて出しだた。楽隊は毎晩ちているん。</p>
            </c-cover>
            <template #controls>
                <HstText v-model="data.space" title="space"/>
            </template>
        </Variant>
        <Variant title="minHeight" auto-props-disabled>
            <div class="h-screen bg-gray-100">
                <c-cover
                    :min-height="data.minHeight"
                    class="with-outline bg-white"
                >
                    <p class="text-2xl">セロ弾きのゴーシュ</p>
                    <p class="text-xl">宮沢賢治</p>
                    <p class="">かっこうは町はずれのきょろきょろ耳げへ児にする一心たらだ。ではちょっといいかげんじましというかっこうたでし。上手ましましのましはましすると棒のそれどころみちの上へもやっと愉快うでしが、おれまで下へつきあたっれことなかった。</p>
                    <p class="">とまっすぎみんなもぶんを白いたとこんどの子の療屋へ出し第一セロ手のかっかをなれて出しだた。楽隊は毎晩ちているん。</p>
                </c-cover>
            </div>
            <template #controls>
                <HstText v-model="data.minHeight" title="minHeight"/>
            </template>
        </Variant>
        <Variant title="noPad" auto-props-disabled>
            <div class="h-screen bg-gray-100">
                <c-cover
                    :no-pad="data.noPad"
                    centered=""
                    class="with-outline bg-yellow-200"
                >
                    <c-stack class="bg-white">
                        <p class="text-2xl">セロ弾きのゴーシュ</p>
                        <p class="text-xl">宮沢賢治</p>
                        <p>かっこうは町はずれのきょろきょろ耳げへ児にする一心たらだ。ではちょっといいかげんじましというかっこうたでし。上手ましましのましはましすると棒のそれどころみちの上へもやっと愉快うでしが、おれまで下へつきあたっれことなかった。</p>
                        <p>とまっすぎみんなもぶんを白いたとこんどの子の療屋へ出し第一セロ手のかっかをなれて出しだた。楽隊は毎晩ちているん。</p>
                    </c-stack>
                </c-cover>
            </div>
            <template #controls>
                <HstCheckbox v-model="data.noPad" title="noPad"/>
            </template>
        </Variant>
    </Story>
</template>
<docs lang="md">
# CCover
内包された要素を、垂直方向に中央揃えするかどうかを指定でき、
また、トップ/ヘッダーおよびボトム/フッター要素に対応できるレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| centered | string | 'div' | 単純なセレクタとしてCover内に中央揃えされる主要素を指定 |
| space | string | '1rem' | すべての子要素の間や周囲にできる最小のスペース |
| minHeight | string | '100vh' | コンポーネントの最小の高さ |
| noPad | boolean | false | コンテナ要素のpaddingにもスペースを適用するかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CCover内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>