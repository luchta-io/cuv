<script setup lang="ts">
import CBox from "@/components/layout/CBox.vue";
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
    <Story title="Layout / Box">
        <c-box :padding="data.padding" :border="data.bordered">
        BOX
        <c-box :padding="data.nestpadding" :border="data.nestbordered">
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
    </Story>
</template>
<docs lang="md">
# Box

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| padding  | "none" / "small" / "medium" / "large" | "medium" | padding の指定              |
| bordered | boolean                               | false    | border を有効にするかどうか |
</docs>