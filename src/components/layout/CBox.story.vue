<script setup lang="ts">
import CBox from '@/components/layout/CBox.vue';
import { reactive } from 'vue';

const data: {
    padding: 'none'|'small'|'medium'|'large';
    border: boolean;
    nestpadding: 'none'|'small'|'medium'|'large';
    nestborder: boolean;
} = reactive({
    padding: 'medium',
    border: true,
    nestpadding: 'medium',
    nestborder: true,
})

</script>

<template>
    <Story title="Layout / Box">
        <c-box
        :padding="data.padding"
        :border="data.border"
        >
            BOX
            <c-box
            :padding="data.nestpadding"
            :border="data.nestborder"
            >
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
                        {value: 'none', label: 'none (p-0)'},
                        {value: 'small', label: 'small (p-2)'},
                        {value: 'medium', label: 'medium (p-4)'},
                        {value: 'large', label: 'large (p-8)'},
                    ]"
                />
                <HstCheckbox 
                    v-model="data.border"
                    title="border"
                />
            </c-box>
            <c-box>
                <div class="text-lg font-bold">Nested Box</div>
                <HstSelect 
                    v-model="data.nestpadding"
                    title="padding"
                    :options="[
                        {value: 'none', label: 'none'},
                        {value: 'small', label: 'small'},
                        {value: 'medium', label: 'medium'},
                        {value: 'large', label: 'large'},
                    ]"
                />
                <HstCheckbox 
                    v-model="data.nestborder"
                    title="border"
                />
            </c-box>
        </template>
    </Story>
</template>
<docs lang="md">
# Box

## Props

| Name     | Type                              | Default   | Description                    |
| -------- | ----------------------------      | --------- | ------------------------------ |
| padding  | "none" / "small" / "medium" / "large" | "medium"  | paddingの指定                   |
| border   | boolean                           | false     | borderを有効にするかどうか         |
</docs>