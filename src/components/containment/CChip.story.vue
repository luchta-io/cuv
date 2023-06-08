<script setup lang="ts">
import { reactive} from "vue";
import { mdiAccount, mdiLabel } from '@mdi/js';
import CButton from "@/components/containment/CButton.vue";
import CBox from "@/components/layout/CBox.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CSvgIcon from "@/components/images/CSvgIcon.vue";
import CAvatar from "@/components/images/CAvatar.vue";
import CChip from "@/components/containment/CChip.vue";

const data: {
    closable: boolean
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info' | undefined
    density: 'default' | 'comfortable' | 'compact'
    draggable: boolean
    elevation: 'small'|'medium'|'large'|undefined
    isAppendIcon: boolean
    isPrependIcon: boolean
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
} = reactive({
    closable: false,
    color: 'light',
    density: 'default',
    draggable: false,
    elevation: undefined,
    isAppendIcon: false,
    isPrependIcon: false,
    size: 'medium',
    variant: 'tonal',
})

const closable: {
    showChip: boolean
} = reactive({
    showChip: true
})

</script>

<template>
<Story
    title="Containment / CChip"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <CChip 
                :color="data.color" 
                :variant="data.variant"
                :closable="data.closable"
                :density="data.density"
                :draggable="data.draggable"
                :prepend-icon="data.isPrependIcon ? mdiAccount : undefined"
                :append-icon="data.isAppendIcon ? mdiAccount : undefined"
                :elevation="data.elevation"
                :size="data.size"
                >
                    chip
                </CChip>
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
            <HstCheckbox v-model="data.closable" title="closable"/>
            <HstCheckbox v-model="data.draggable" title="draggable"/>
            <HstCheckbox v-model="data.isPrependIcon" title="prepend-icon"/>
            <HstCheckbox v-model="data.isAppendIcon" title="append-icon"/>
        </template>
    </Variant>
    <Variant title="Closable" auto-props-disabled>
        <CCluster justify="center">
            <CChip v-if="closable.showChip" closable @click:close="closable.showChip = false">
                chip
            </CChip>
            <CButton v-if="!closable.showChip" @click="closable.showChip = true" color="primary">
                chipを再表示
            </CButton>
        </CCluster>
    </Variant>
    <Variant title="Label" auto-props-disabled>
        <CCluster justify="center">
            <CChip label>
                Label
            </CChip>
            <CChip label color="danger">
                <CCluster space="0.2rem" align="center">
                    <CSvgIcon :icon="mdiLabel"/>
                    Tag
                </CCluster>
            </CChip>
            <CChip label color="link" closable :prepend-icon="mdiAccount">
                鈴木 太郎
            </CChip>
        </CCluster>
    </Variant>
    <Variant title="サイズ" auto-props-disabled>
        <CCluster justify="space-around" align="center">
            <CChip size="x-small">
                x-small chip
            </CChip>
            <CChip size="small">
                small chip
            </CChip>
            <CChip>
                medium chip (default)
            </CChip>
            <CChip size="large">
                large chip
            </CChip>
            <CChip size="x-large">
                x-large chip
            </CChip>
        </CCluster>
    </Variant>
    <Variant title="Slots" auto-props-disabled>
        <CCluster justify="center">
            <CChip>
                <template #prepend>
                    <CAvatar>
                        <img src="/cuv/src/assets/sample_cat.png"/>
                    </CAvatar>
                </template>
                今日の猫ニュース
            </CChip>
        </CCluster>
    </Variant>
</Story>
</template>

<docs lang="md">
# CChip
小さな情報を伝達する時に便利なコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appendIcon | string | undefined | コンポーネントの右側に表示させるiconを指定します |
| closable | boolean | false | コンポーネントの非表示を可能にするcloseIconを表示する場合は指定します |
| closeIcon | string | `mdiCloseCircle` | closeIconを指定できます |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'light' | チップの色を指定します |
| density | 'default' \| 'comfortable' \| 'compact' | 'default' | コンポーネントが使用する垂直方向の高さを調整します |
| disabled | boolean | false | 非活性にする場合は指定します |
| draggable | boolean | false | チップをドラッグ可能にする場合は指定します |
| elevation | 'small' \| 'medium' \| 'large' | undefined | 影をつける場合に指定します |
| label | boolean | false | コンポーネントの角の半径を半分にして、labelとして使用したい場合は指定します |
| modelValue | boolean | false | コンポーネントのv-model値。コンポーネントが選択された場合はtrueを返します |
| prependIcon | string | undefined | コンポーネントの左側に表示させるiconを指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'circle' | コンポーネントの`border-radius`を指定します |
| size | 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' | "medium" | サイズを指定します |
| text | string | undefined | コンポーネントのコンテンツテキストを指定します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'tonal' | コンポーネントに個別のスタイルを適用します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default | `{isSelected:boolean, disabled:boolean}` | コンポーネント内に表示するコンテンツを指定します |
| append | - | コンテンツの右側に表示するコンテンツを指定します |
| prepend | - | コンテンツの左側に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | - | コンポーネントのv-modelが変更されたときに発行されるイベントです |
| click | - | コンポーネントがclickされたときに発行されるイベントです |
| click:close | - | closableが有効な場合、closeアイコンがクリックされた場合に発行されるイベントです |
</docs>
