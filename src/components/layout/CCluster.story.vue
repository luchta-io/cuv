<script setup lang="ts">
import CBox from '@/components/layout/CBox.vue';
import CCluster from '@/components/layout/CCluster.vue';

</script>

<template>
    <Story title="Layout / Cluster">
        <Variant>
            <c-cluster class="with-outline">
                <p>あいうえお</p>
                <c-box>BOX</c-box>
                <c-box>BOX</c-box>
                <c-cluster class="with-outline">
                    <p>あいうえお</p>
                    <c-box>Nested Cluster BOX</c-box>
                </c-cluster>
            </c-cluster>
        </Variant>
    </Story>
</template>
