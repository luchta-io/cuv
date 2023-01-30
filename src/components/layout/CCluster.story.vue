<script setup lang="ts">
import CBox from '@/components/layout/CBox.vue';
import CCluster from '@/components/layout/CCluster.vue';
import { reactive } from 'vue';

const data: {
    justify: string;
    align: string;
    space: string
} = reactive({
    justify: 'justify-start',
    align: 'items-start',
    space: 'gap-4'
})

</script>

<template>
    <Story title="Layout / Cluster">
        <Variant>
            <c-cluster
            :justify="data.justify"
            :align="data.align"
            :space="data.space"
            class="with-outline">
                <p>あいうえお</p>
                <c-box border>BOX</c-box>
                <c-box border>BOX</c-box>
                <c-cluster
                :justify="data.justify"
                :align="data.align"
                :space="data.space"
                class="with-outline">
                    <p>あいうえお</p>
                    <c-box border>Nested Cluster BOX</c-box>
                </c-cluster>
            </c-cluster>
            <template #controls>
                <HstSelect 
                    v-model="data.justify"
                    title="justify"
                    :options="[
                        {value: 'justify-start', label: 'justify-start'},
                        {value: 'justify-end', label: 'justify-end'},
                        {value: 'justify-center', label: 'justify-center'},
                        {value: 'justify-between', label: 'justify-between'},
                        {value: 'justify-around', label: 'justify-around'},
                        {value: 'justify-evenly', label: 'justify-evenly'},
                    ]"
                />
                <HstSelect 
                    v-model="data.align"
                    title="align"
                    :options="[
                        {value: 'items-start', label: 'items-start'},
                        {value: 'items-end', label: 'items-end'},
                        {value: 'items-center', label: 'items-center'},
                        {value: 'items-baseline', label: 'items-baseline'},
                        {value: 'items-stretch', label: 'items-stretch'},
                    ]"
                />
                <!-- <HstText
                v-model="data.space"
                title="space"
                />    -->
            </template>
        </Variant>
    </Story>
</template>
