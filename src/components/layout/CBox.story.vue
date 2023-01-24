<script setup lang="ts">
import CBox from '@/components/layout/CBox.vue';
import { reactive } from 'vue';

const data: {
    padding: string;
    borderWidth: string;
    borderColor: string;
    backgroundColor: string;
    nestpadding: string;
    nestborderWidth: string;
    nestborderColor: string;
    nestbackgroundColor: string;
} = reactive({
    padding: 'p-2',
    borderWidth: 'border',
    borderColor: 'border-black',
    backgroundColor: 'bg-inherit',
    nestpadding: 'p-2',
    nestborderWidth: 'border',
    nestborderColor: 'border-black',
    nestbackgroundColor: 'bg-inherit',
})

</script>

<template>
    <Story title="Layout / Box">
        <c-box
        :padding="data.padding"
        :border-width="data.borderWidth"
        :border-color="data.borderColor"
        :background-color="data.backgroundColor"
        >
            BOX
            <c-box
            :padding="data.nestpadding"
            :border-width="data.nestborderWidth"
            :border-color="data.nestborderColor"
            :background-color="data.nestbackgroundColor"
            >
                Nested BOX
            </c-box>
        </c-box>
        <template #controls>
            <div class="text-lg font-bold">Box</div>
            <HstText v-model="data.padding" title="padding" />
            <HstText v-model="data.borderWidth" title="borderWidth" />
            <HstText v-model="data.borderColor" title="borderColor" />
            <HstText v-model="data.backgroundColor" title="backgroundColor" />
            <h1 class="text-lg font-bold">Nested Box</h1>
            <HstText v-model="data.nestpadding" title="padding" />
            <HstText v-model="data.nestborderWidth" title="borderWidth" />
            <HstText v-model="data.nestborderColor" title="borderColor" />
            <HstText v-model="data.nestbackgroundColor" title="backgroundColor" />
        </template>
    </Story>
</template>
