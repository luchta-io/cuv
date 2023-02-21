<script setup lang="ts">
import CBox from "@/components/layout/CBox.vue";
import CGrid from "@/components/layout/CGrid.vue";
import { reactive } from "vue";

const data: {
    padding: 'none'|'small'|'medium'|'large';
    bordered: boolean;
    nestpadding: 'none'|'small'|'medium'|'large';
    nestbordered: boolean;
} = reactive({
    padding: 'medium',
    bordered: true,
    nestpadding: 'medium',
    nestbordered: true,
})

</script>

<template>
    <Story title="Layout / Box" :layout="{ type: 'grid', width: '100%' }">
        <Variant title="入れ子" auto-props-disabled>
            <c-box :padding="data.padding" :bordered="data.bordered">
                BOX
                <c-box :padding="data.nestpadding" :bordered="data.nestbordered">
                    Nested BOX
                </c-box>
            </c-box>
            <template #controls>
                <c-box>
                    <div class="text-lg font-bold">Box</div>
                    <HstSelect
                    v-model="data.padding"
                    title="padding"
                    :options="[
                        { value: 'none', label: 'none (p-0)' },
                        { value: 'small', label: 'small (p-2)' },
                        { value: 'medium', label: 'medium (p-4)' },
                        { value: 'large', label: 'large (p-8)' },
                    ]"
                    />
                    <HstCheckbox v-model="data.bordered" title="border" />
                </c-box>
                <c-box>
                    <div class="text-lg font-bold">Nested Box</div>
                    <HstSelect
                    v-model="data.nestpadding"
                    title="padding"
                    :options="[
                        { value: 'none', label: 'none' },
                        { value: 'small', label: 'small' },
                        { value: 'medium', label: 'medium' },
                        { value: 'large', label: 'large' },
                    ]"
                    />
                    <HstCheckbox v-model="data.nestbordered" title="border" />
                </c-box>
            </template>
        </Variant>
        <Variant title="Gird上に配置されるカード">
            <c-grid min="8rem">
                <c-box v-for="n in 10" :key="n" bordered>
                    BOX{{n}}
                </c-box>
            </c-grid>
        </Variant>
        <Variant title="文章中に表示されるフローコンテンツ">
            ゴーシュはゴーシュのあんばい狸みちへ茎に手伝っ口ました。するといきなりまじめたたという首たた。粗末たならわけたもだまた虫の大丈夫曲のときをはどうして気の毒ですないて、みんなまでゴーシュからありがっもんたです。
            云いすぎおまえも狩になくましが前の嘴のからだ汁をくわえ第一先生みちのかっこうをこりからやろたでし。畑は前仕上げとくださいまし
            <c-box bordered>BOX</c-box>
            耳は二しゴーシュのようをかもて来まし。ゴーシュはゴーシュ一つとぼくをとりてやろませ。
            ボロンボロンは療がしばらくとなおるばセロがセロのようで弾きてしずかをちがいがどんと音楽へなおして出した。きちんともっとゴーシュがガラスをなりですな。おまえしっかりにセロをありておっかさんを弾きますなら。扉へたっましで。「かっこうで置いまし。
        </Variant>
    </Story>
</template>
<docs lang="md">
# Box
コンテンツをグループ化するために使用するレイアウトコンポーネントです。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| padding  | "none" / "small" / "medium" / "large" | "medium" | padding の指定              |
| bordered | boolean                               | false    | border を有効にするかどうか |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | CBox内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |

</docs>