<script setup lang="ts">
import {reactive} from "vue";
import { mdiAccount } from '@mdi/js';
import CCluster from "@/components/layout/CCluster.vue";
import CAlert from "@/components/feedback/CAlert.vue";
import CBox from "@/components/layout/CBox.vue";
import CStack from "@/components/layout/CStack.vue";
import CButton from '@/components/containment/CButton.vue'

const data: {
    closable: boolean
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info'
    density: 'default' | 'comfortable' | 'compact'
    elevation: 'small'|'medium'|'large'|undefined
    isAppendIcon: boolean
    isPrependIcon: boolean
    isTitle: boolean
    prominent: boolean
    rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    text: string
    type: 'error' | 'warning' | 'info' | 'success' | undefined
    variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
} = reactive({
    closable: false,
    color: 'light',
    density: 'default',
    elevation: undefined,
    isAppendIcon: false,
    isPrependIcon: false,
    isTitle: false,
    prominent: false,
    rounded: 'medium',
    text: '云いすぎ君もねどこがこわくんて近くのゴーシュのぶん人が出第二ドレミファソラシド目の病気がなってくださいなます。子は半分あるて行っまし。おいでは六むしっ先生のようにきいてしまいな。ゴーシュは虫手たり何をはじめてっです。ゴーシュはなかをすこしと叩きてセロが外のようをあけて狸からとりてぶるぶるあとをしてくれだ。',
    type: undefined,
    variant: 'flat',
})

const type: {
    type: 'error' | 'warning' | 'info' | 'success' | undefined
} = reactive({
    type: 'error'
})

const closable: {
    show: boolean
} = reactive({
    show: true,
})

</script>

<template>
<Story
    title="Feedback / CAlert"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox>
            <CAlert
            :text="data.text"
            :color="data.color"
            :closable="data.closable"
            :density="data.density"
            :elevation="data.elevation"
            :variant="data.variant"
            :type="data.type"
            :prepend-icon="data.isPrependIcon ? mdiAccount : undefined"
            :append-icon="data.isAppendIcon ? mdiAccount : undefined"
            :prominent="data.prominent"
            :rounded="data.rounded"
            :title="data.isTitle ? 'タイトル' : undefined"
            />

        </CBox>
        <template #controls>
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
            <HstSelect
                v-model="data.type"
                title="type"
                :options="[
                            {value: undefined, label: 'undefined'},
                            {value: 'error', label: 'error'},
                            {value: 'warning', label: 'warning'},
                            {value: 'info', label: 'info'},
                            {value: 'success', label: 'success'},
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
            <HstText v-model="data.text" title="text"/>
            <HstCheckbox v-model="data.closable" title="closable"/>
            <HstCheckbox v-model="data.prominent" title="prominent"/>
            <HstCheckbox v-model="data.isPrependIcon" title="prepend-iconを表示"/>
            <HstCheckbox v-model="data.isAppendIcon" title="append-iconを表示"/>
            <HstCheckbox v-model="data.isTitle" title="titleを表示"/>

        </template>
    </Variant>
    <Variant title="Type" auto-props-disabled>
        <CBox>
            <CStack>
                <CAlert :type="type.type">
                    もし嘉納さんを享有垣覗きこう使用がしで受売そんな気持私か会得がというお経験たたないずば、その事実も何か中学外国で知れて、嘉納さんのはずから代りのこれをちゃんとご病気と進んとおれ職で実意味にしようにもし同存在へあるでうて、どうしてもかつて誤解を済ましましておかたのにやつしざるます。
                </CAlert>
            </CStack>
        </CBox>
        <template #controls>
            <HstSelect
                v-model="type.type"
                title="type"
                :options="[
                            {value: undefined, label: 'undefined'},
                            {value: 'error', label: 'error'},
                            {value: 'warning', label: 'warning'},
                            {value: 'info', label: 'info'},
                            {value: 'success', label: 'success'},
                        ]"
            />
        </template>
    </Variant>
    <Variant title="Closable" auto-props-disabled>
        <CBox>
            <CStack>
                <CAlert v-if="closable.show" closable @click:close="closable.show = false" color="success" variant="tonal">
                    もし嘉納さんを享有垣覗きこう使用がしで受売そんな気持私か会得がというお経験たたないずば、その事実も何か中学外国で知れて、嘉納さんのはずから代りのこれをちゃんとご病気と進んとおれ職で実意味にしようにもし同存在へあるでうて、どうしてもかつて誤解を済ましましておかたのにやつしざるます。
                </CAlert>
            </CStack>
            <CCluster justify="center">
                <CButton v-if="!closable.show" @click="closable.show = true">
                    chipを再表示
                </CButton>
            </CCluster>
        </CBox>
    </Variant>
    <Variant title="Border" auto-props-disabled>
        <CBox>
            <CStack>
                <CAlert border="top" border-color="primary">
                    もし嘉納さんを享有垣覗きこう使用がしで受売そんな気持私か会得がというお経験たたないずば、その事実も何か中学外国で知れて、嘉納さんのはずから代りのこれをちゃんとご病気と進んとおれ職で実意味にしようにもし同存在へあるでうて、どうしてもかつて誤解を済ましましておかたのにやつしざるます。
                </CAlert>
                <CAlert border="end" border-color="success">
                    そのところ金力のところこの通りも何上に立ちでかと岡田さんとなさいなりた、人心の当時たにおいて肝推薦うあっずば、大勢の時を欝が今かもの招きが前して合うて、もう少しの事実より打ち壊すとその時をもっともありないなと読むまし方まして、ないずだがそれだけご機会出た事ですですな。            </CAlert>
                <CAlert border="bottom" border-color="danger">
                    もっとも国家か共通か仮定に足りないて、ほか末他から閉じのでもらいた末のご戦争の今に行けれでなけれ。
                </CAlert>
                <CAlert border="start" border-color="info">
                    またご影響にさがはいずものたて、徳義心をも、しかるに私かありて探しれないます行っれんだと思いが、左もあるているでる。
                </CAlert>
            </CStack>
        </CBox>
    </Variant>
    <Variant title="outlined" auto-props-disabled>
        <CBox>
            <CStack>
                <CAlert color="primary" variant="outlined">
                    <template #title>
                        セロ弾きのゴーシュ
                    </template>
                    もし嘉納さんを享有垣覗きこう使用がしで受売そんな気持私か会得がというお経験たたないずば、その事実も何か中学外国で知れて、嘉納さんのはずから代りのこれをちゃんとご病気と進んとおれ職で実意味にしようにもし同存在へあるでうて、どうしてもかつて誤解を済ましましておかたのにやつしざるます。
                </CAlert>
                <CAlert type="success" variant="outlined">
                    もっとも国家か共通か仮定に足りないて、ほか末他から閉じのでもらいた末のご戦争の今に行けれでなけれ。
                </CAlert>
                <CAlert border="top" border-color="warning" type="warning" variant="outlined" prominent>
                    そのところ金力のところこの通りも何上に立ちでかと岡田さんとなさいなりた、人心の当時たにおいて肝推薦うあっずば、大勢の時を欝が今かもの招きが前して合うて、もう少しの事実より打ち壊すとその時をもっともありないなと読むまし方まして、ないずだがそれだけご機会出た事ですですな。
                </CAlert>
            </CStack>
        </CBox>
    </Variant>
</Story>
</template>

<docs lang="md">
# CAlert
アイコンや色などを使用して、重要な情報をユーザーに伝えるのに有用なコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | コンポーネントの右側に表示させるiconを指定します |
| border | 'top' \| 'end' \| 'bottom' \| 'start' | undefined | コンポーネントに色付きの境界線を追加する場合は、位置を指定します |
| borderColor | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | undefined | 枠線の色を指定します |
| closable | boolean | false | コンポーネントの非表示を可能にするcloseIconを表示する場合は指定します |
| closeIcon | string | `mdiClose` | closeIconを指定できます |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | コンポーネントの色を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| elevation | 'small' \| 'medium' \| 'large' | undefined | 影をつける場合に指定します |
| position | 'static' \| 'relative' \| 'fixed' \| 'absolute' \| 'sticky' | 'relative' | スタイルの`position`を指定します |
| prependIcon | string | undefined | コンポーネントの左側に表示させるiconを指定します |
| prominent | boolean | false | より注目が集まるように、縦方向の中央に大きなアイコンを表示する場合は指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'medium' | コンポーネントの`border-radius`を指定します |
| text | string | undefined | コンポーネントのコンテンツテキストを指定します |
| title | string | undefined | コンポーネントのタイトルテキストを指定します |
| type | 'error' \| 'warning' \| 'info' \| 'success' | undefined | 事前定義されたアイコンと色を持つ特殊なアラートを作成します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'tonal' | コンポーネントに個別のスタイルを適用します |


## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | コンポーネント内に表示するコンテンツを指定します |
| append | - | コンテンツの右側に表示するコンテンツを指定します |
| prepend | - | コンテンツの左側に表示するコンテンツを指定します |
| title | - | コンポーネントのタイトルに表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| click:close | - | closableが有効な場合、closeアイコンがクリックされた場合に発行されるイベントです |
</docs>
