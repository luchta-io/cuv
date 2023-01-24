<script setup lang="ts">
import CSidebar from '@/components/layout/CSidebar.vue';
import CBox from '@/components/layout/CBox.vue';
import CStack from '@/components/layout/CStack.vue';
</script>

<template>
    <Story title="Layout / Sidebar">
        <Variant>
            <c-sidebar
                class="with-outline"
            >
                <c-box>
                Side Box
                <c-stack>
                    <span>Stack item1</span>
                    <span>Stack item2</span>
                </c-stack>
                </c-box>
                <c-box>
                content Box
                </c-box>
            </c-sidebar>
        </Variant>
    </Story>
</template>
