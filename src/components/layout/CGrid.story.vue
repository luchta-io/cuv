<script setup lang="ts">
import CGrid from '@/components/layout/CGrid.vue';
import CBox from '@/components/layout/CBox.vue';
</script>

<template>
    <Story title="Layout / Grid">
        <Variant>
            <c-grid
                class="with-outline"
            >
                <c-box>
                BOX
                </c-box>
                <c-box>
                BOX
                </c-box>
                <c-box>
                BOX
                </c-box>
            </c-grid>
        </Variant>
    </Story>
</template>
