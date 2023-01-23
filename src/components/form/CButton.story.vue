<script setup lang="ts">
import { reactive } from "vue";
import { logEvent } from "histoire/client";
import CButton from "@/components/form/CButton.vue";

const data: {
    msg: string
    color: string
    size: 'small' | 'medium' | 'large'
    outline: boolean
    disabled: boolean
} = reactive({
    msg: 'ボタン',
    color: 'light',
    size: 'medium',
    outline: false,
    disabled: false,
})

</script>

<template>
    <Story 
    title="Form / Button"
    >
        <Variant>
            <CButton 
            @click="logEvent('Click!!', $event)"
            :msg="data.msg"
            :color="data.color"
            :size="data.size"
            :outline="data.outline"
            :disabled="data.disabled"
            />

            <template #controls>
                <HstText v-model="data.msg" title="msg" />
                <HstSelect 
                    v-model="data.color"
                    title="Color"
                    :options="[
                        {value: 'white', label: 'white'},
                        {value: 'light', label: 'light'},
                        {value: 'success', label: 'success'},
                        {value: 'danger', label: 'danger'},
                        {value: 'warning', label: 'warning'},
                        {value: 'info', label: 'info'},
                    ]"
                />
                <HstSelect 
                    v-model="data.size"
                    title="Size"
                    :options="[
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                    ]"
                />
                <HstCheckbox 
                    v-model="data.outline"
                    title="Outline"
                />
                <HstCheckbox 
                    v-model="data.disabled"
                    title="Disabled"
                />

            </template>            
        </Variant>
    </Story>
</template>

<docs lang="md">
# Button

色、サイズ、ステータスを指定できるボタン部品です。

## Props

| Name     | Type                         | Default   | Description                    |
| -------- | ---------------------------- | --------- | ------------------------------ |
| size     | "small" / "medium" / "large" | "medium"  | ボタンのサイズ指定                |
| disabled | boolean                      | false     | ボタンが無効かどうか              |
</docs>