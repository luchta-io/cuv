<script setup lang="ts">
import { computed, reactive} from "vue";
import { mdiAccount, mdiWifi, mdiAirplane } from '@mdi/js';
import CAvatar from "@/components/images/CAvatar.vue";
import CCluster from "@/components/layout/CCluster.vue";
import CStack from "@/components/layout/CStack.vue";
import CSvgIcon from "@/components/images/CSvgIcon.vue";
import CBox from "@/components/layout/CBox.vue";

const data: {
    isIcon: boolean
    size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    color: 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'success' | 'danger' | 'warning' | 'info' | undefined
    isImage: boolean
    rounded: 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'circle'
    variant: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
} = reactive({
    isIcon: false,
    size: 'medium',
    color: 'light',
    isImage: false,
    rounded: 'circle',
    variant: 'flat',
})

const image = computed(() => {
    return data.isImage ? '/cuv/src/assets/sample_Parakeet.png' : undefined
})

const icon = computed(() => {
    return data.isIcon ? mdiAccount : undefined
})

</script>

<template>
<Story
    title="Images & Icons / CAvatar"
    :layout="{ type: 'grid', width: '100%' }"
>
    <Variant title="基本" auto-props-disabled>
        <CBox>
            <CCluster justify="center">
                <CAvatar
                    :color="data.color"
                    :icon="icon"
                    :size="data.size"
                    :image="image"
                    :rounded="data.rounded"
                    :variant="data.variant"
                />
            </CCluster>
        </CBox>
        <template #controls>
            <HstSelect
                v-model="data.color"
                title="color"
                :options="[
                            {value: undefined, label: 'なし(undefined)'},
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
            <HstCheckbox v-model="data.isIcon" title="icon"/>
            <HstCheckbox v-model="data.isImage" title="image"/>
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
        </template>
    </Variant>
    <Variant title="サイズ" auto-props-disabled>
        <CCluster justify="space-between" align="center">
            <CStack class="flex flex-col items-center">
                <CAvatar size="x-small" color="dark"/>
                x-small
            </CStack>
            <CStack class="flex flex-col items-center">
                <CAvatar size="small" color="dark"/>
                small
            </CStack>
            <CStack class="flex flex-col items-center">
                <CAvatar color="dark"/>
                medium
            </CStack>
            <CStack class="flex flex-col items-center">
                <CAvatar size="large" color="dark"/>
                large
            </CStack>
            <CStack class="flex flex-col items-center">
                <CAvatar size="x-large" color="dark"/>
                x-large
            </CStack>
        </CCluster>
    </Variant>
    <Variant title="タイル" auto-props-disabled>
        <CCluster justify="center">
            <CAvatar color="link" rounded="none">
                <CSvgIcon :icon="mdiWifi" class="text-white"/>
            </CAvatar>
        </CCluster>
    </Variant>
    <Variant title="Slot" auto-props-disabled>
        <CCluster justify="space-around">
            <CAvatar color="primary">
                <CSvgIcon :icon="mdiAirplane"/>
            </CAvatar>
            <CAvatar color="light">
                <img src="/cuv/src/assets/sample_cat.png"/>
            </CAvatar>
            <CAvatar color="warning">
                CUV
            </CAvatar>
        </CCluster>
    </Variant>
</Story>
</template>

<docs lang="md">
# CAvatar
プロフィール写真を表示する際など、コンテナの中にコンテンツを表示するためのコンポーネントです。

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | 'white' \| 'black' \| 'light' \| 'dark' \| 'primary' \| 'link' \| 'success' \| 'danger' \| 'warning' \| 'info' | undefined | 色を指定します |
| icon | string | undefined | iconのpathを指定します |
| image | string | undefined | 画像のsrcに渡すpathを指定します |
| rounded | 'none' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| 'circle' | 'circle' | コンポーネントの`border-radius`を指定します |
| size | 'x-small' \| 'small' \| 'medium' \| 'large' \| 'x-large' | "medium" | サイズを指定します |
| variant | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | 'flat' | コンポーネントに個別のスタイルを適用します |

## Slots

| Name | Props (if scoped) | Description |
| --- | --- | --- |
| default| - | このコンポーネント内に表示するコンテンツを指定します |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| - | - | このコンポーネント独自のイベントはありません |
</docs>
