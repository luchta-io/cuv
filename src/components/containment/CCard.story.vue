<script setup lang="ts">
import {onMounted, reactive} from "vue";
import { mdiHome, mdiReload, mdiBook } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CCard from "@/components/containment/CCard.vue";
import CFrame from "@/components/layout/CFrame.vue";

type ColorType =
    'white' | 'black' | 'light' | 'dark' | 
    'primary' | 'link' |
    'success' | 'danger' | 'warning' | 'info'

const bookTitle = 'セロ弾きのゴーシュ'
const bookSubtitle = '宮沢賢治'
const bookText = '狸はかっこうの心配顔げへロマチックシューマンが弾い外ました。またぎっしり上手ませでってかっこうだまし。気の毒なましのたもたいやのどの愉快らのっきりをはばたばた同じたなて、何ばかりゴーシュをひけられのだだ。あるすぎおまえも小屋にひどくたてさっきの狸の舌手が済む第一ジャズらのかっこうを弾くて行っだます。虫もこんどおこっからいです。'

const data: {
    color: ColorType
    density:'default' | 'comfortable' | 'compact'
    disabled: boolean
    elevation: 'small'|'medium'|'large' | undefined
    hover: boolean
    loading: boolean
    position: 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'
    rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    subtitle: string
    text: string
    title: string
    variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    width: string
    isActionButton: boolean
    isAppendIcon: boolean
    isPrependIcon: boolean
} = reactive({
    color: 'white',
    density: 'default',
    disabled: false,
    elevation: undefined,
    hover: false,
    loading: false,
    position: 'relative',
    rounded: 'medium',
    subtitle: bookSubtitle,
    text: bookText,
    title: bookTitle,
    variant: 'elevated',
    width: '400px',
    isActionButton: false,
    isAppendIcon: false,
    isPrependIcon: false,
})

const customActions: {
    show: boolean
} = reactive({
    show: false
})

const loading: {
    loading: boolean
    newDate: string
} = reactive ({
    newDate: '',
    loading: false,
})

const getNewDate = () => {
    loading.loading = true
    setTimeout(() => {
        const now = new Date()
        const month = (now.getMonth()+1).toString().length == 1 ? '0' + (now.getMonth()+1) : now.getMonth()+1
        const date = now.getDate().toString().length == 1 ? '0' + now.getDate() : now.getDate()
        const hours = now.getHours().toString().length == 1 ? '0' + now.getHours() : now.getHours()
        const minutes = now.getMinutes().toString().length == 1 ? '0' + now.getMinutes() : now.getMinutes()
        const seconds = now.getSeconds().toString().length == 1 ? '0' + now.getSeconds() : now.getSeconds()
        loading.newDate = `${now.getFullYear()}/${month}/${date} ${hours}:${minutes}:${seconds}`
        loading.loading = false
    }, 2000)
}

onMounted(() => {
    getNewDate()
})

</script>

<template>
<Story
    title="Containment / CCard"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CCluster justify="center">
            <CBox>
                <CCard
                :append-icon="data.isAppendIcon ? mdiHome : undefined"
                :color="data.color"
                :density="data.density"
                :disabled="data.disabled"
                :elevation="data.elevation"
                :hover="data.hover"
                :loading="data.loading"
                :position="data.position"
                :prepend-icon="data.isPrependIcon ? mdiHome : undefined"
                :rounded="data.rounded"
                :subtitle="data.subtitle"
                :text="data.text"
                :title="data.title"
                :variant="data.variant"
                :width="data.width"
                >
                <template v-if="data.isActionButton" #actions>
                    <CButton color="white" variant="flat">クリック</CButton>
                </template>
                </CCard>
            </CBox>
        </CCluster>
        <template #controls>
            <HstCheckbox v-model="data.isAppendIcon" title="Show append-icon"/>
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
            <HstCheckbox v-model="data.hover" title="hover"/>
            <HstCheckbox v-model="data.loading" title="loading"/>
            <HstCheckbox v-model="data.isPrependIcon" title="Show prepend-icon"/>
            <HstSelect
                v-model="data.position"
                title="position"
                :options="[
                            {value: 'relative', label: 'relative'},
                            {value: 'absolute', label: 'absolute'},
                            {value: 'static', label: 'static'},
                            {value: 'fixed', label: 'fixed'},
                            {value: 'sticky', label: 'sticky'},
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
            <HstText v-model="data.subtitle" title="subtitle"/>
            <HstTextarea v-model="data.text" title="text"/>
            <HstText v-model="data.title" title="title"/>
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
            <HstCheckbox v-model="data.isActionButton" title="Show Actions"/>
            <HstText v-model="data.width" title="width"/>
        </template>
    </Variant>
    <Variant title="Slots" auto-props-disabled>
        <CCluster justify="center">
            <CBox>
                <CCard width="400px">
                    <template #title>
                        タイトル
                    </template>
                    <template #subtitle>
                        サブタイトル
                    </template>
                    <template #text>
                        ここはコンテンツです。
                    </template>
                </CCard>
            </CBox>
        </CCluster>
    </Variant>
    <Variant title="Ripple" auto-props-disabled>
        <CCluster justify="center">
            <CBox>
                <CCard
                :title="bookTitle"
                :subtitle="bookSubtitle"
                :text="bookText"
                ripple
                width="400px"
                />
            </CBox>
        </CCluster>
    </Variant>
    <Variant title="Custom Actions" auto-props-disabled>
        <CCluster justify="center">
            <CBox>
                <CCard width="400px" :prepend-icon="mdiBook" variant="outlined" color="black">
                    <CFrame ratio="16:9">
                        <img
                            src="@/assets/alberta-gf9d16eebb_1920.jpeg"
                            alt="alberta picture"
                        >
                    </CFrame>
                    <template #title>
                        {{ bookTitle }}
                    </template>
                    <template #subtitle>
                        {{ bookSubtitle }}
                    </template>
                    <template #text>
                        <CBox>
                            <div :class="customActions.show ? '' : 'truncate'">
                                {{ bookText }}
                            </div>
                        </CBox>
                    </template>
                    <template #actions>
                        <CButton v-show="!customActions.show" @click="customActions.show = true" variant="text">
                            さらに表示
                        </CButton>
                        <CButton v-show="customActions.show" @click="customActions.show = false" variant="text">
                            表示を減らす
                        </CButton>
                    </template>
                </CCard>
            </CBox>
        </CCluster>
    </Variant>
    <Variant title="Loading" auto-props-disabled>
        <CCluster justify="center">
            <CBox>
                <CCard
                title="Cafe Mountain"
                subtitle="東京都新宿区3-3-3 1F"
                :loading="loading.loading"
                width="400px"
                >
                    <CFrame ratio="16:9">
                        <img
                            src="@/assets/sample_salad.jpg"
                        >
                    </CFrame>
                    <template #append>
                        <CButton @click="getNewDate" :icon="mdiReload" color="black" variant="text"/>
                    </template>
                    <template #text>
                        <div>
                            有機栽培の野菜を用いたサラダやパスタ、全粒粉のパンで挟んだサンドウィッチを提供しています。
                            山の中にいるような、陽の光を感じるアットホームな雰囲気の中で、ぜひご賞味を...
                        </div>
                        <div class="pt-4 text-gray-500">最終アクセス日時 {{ loading.newDate }}</div>
                    </template>
                </CCard>
            </CBox>
        </CCluster>
    </Variant>
</Story>
</template>

<docs lang="md">
# CCard

タイトル、サブタイトル、コンテンツテキスト、アイコンなどを、シンプルに整列し、表現できるコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | タイトルとサブタイトルの右側に表示させるiconを指定します |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | コンポーネントの色を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| disabled | boolean | false | 非活性にする場合は指定します |
| elevation | 'small' \| 'medium' \| 'large' | undefined | 影をつける場合に指定します |
| hover | boolean | false | コンポーネントにhover時の変化を付与したい場合は指定します |
| id | string | undefined | idを指定します |
| loading | boolean | false | loadingを指定する場合は指定します |
| position | 'relative' \| 'absolute' \| 'static' \| 'fixed' \| 'sticky' | undefined | styleのpositionを指定できます |
| prependIcon | string | undefined | タイトルとサブタイトルの左側に表示させるiconを指定します |
| ripple | boolean | false | クリック時の波紋を表示する場合は指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'circle' | コンポーネントの`border-radius`を指定します |
| subtitle | string | undefined | サブタイトルを指定します |
| text | string | undefined | コンテンツのテキストを指定します |
| title | string | undefined | タイトルを指定します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'tonal' | コンポーネントに個別のスタイルを適用します |
| width | string | undefined | コンポーネントの幅を指定します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | - | デフォルトのvueスロットです。タイトルより上部に表示するコンテンツを指定します。 |
| item | - | 項目に表示するコンテンツを指定します。位置はdefaultの下、textの上です。 |
| prepend | - | タイトルとサブタイトルの右側に表示するコンテンツを指定します |
| content | - | 項目内に表示するコンテンツを指定します。位置はprependとappendの間です。 |
| title | - | タイトルに表示するコンテンツを指定します |
| subtitle | - | サブタイトルに表示するコンテンツを指定します |
| append | - | タイトルとサブタイトルの左側に表示するコンテンツを指定します |
| text | - | テキストに表示するコンテンツを指定します |
| actions | - | カードのアクションに使用されるコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
