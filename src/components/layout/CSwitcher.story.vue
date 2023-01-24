<script setup lang="ts">
import CSwitcher from '@/components/layout/CSwitcher.vue';
import CBox from '@/components/layout/CBox.vue';

</script>

<template>
    <Story title="Layout / Switcher">
        <Variant>
            <c-switcher
                class="with-outline"
            >
                <c-box>Box</c-box>
                <c-box>Box</c-box>
                <c-box>Box</c-box>
            </c-switcher>
        </Variant>
    </Story>
</template>
