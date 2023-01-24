<script setup lang="ts">
import { reactive } from "vue";
import { logEvent } from "histoire/client";
import CButton from "@/components/form/CButton.vue";

const data: {
    color: string
    outline: boolean
    disabled: boolean
} = reactive({
    color: 'light',
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
            :color="data.color"
            :outline="data.outline"
            :disabled="data.disabled"
            >
            ボタン
            </CButton>

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
| color    | "white" / "black" / "light" / "dark" / "primary" / "link" / "success" / "danger" / "warning" / "info" | "light"  | ボタンの色指定                |
| outline  | boolean                      | false     | outlineを有効にするかどうか             |
</docs>