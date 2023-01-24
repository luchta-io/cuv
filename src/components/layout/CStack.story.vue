<script setup lang="ts">
import CStack from '@/components/layout/CStack.vue';
import CBox from '@/components/layout/CBox.vue';

</script>

<template>
    <Story title="Layout / Stack">
        <Variant>
            <c-stack
                class="with-outline"
            >
                <c-box>BOX</c-box>
                <c-box>BOX</c-box>
                <c-box>BOX</c-box>
                <c-box>
                <c-box>Nested BOX</c-box>
                <c-box>Nested BOX</c-box>
                </c-box>
                <c-stack class="with-outline">
                    <c-box>Nested Stack BOX</c-box>
                    <c-box>Nested Stack BOX</c-box>
                </c-stack>
            </c-stack>
        </Variant>
    </Story>
</template>
