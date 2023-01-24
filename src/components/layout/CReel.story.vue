<script setup lang="ts">
import CReel from '@/components/layout/CReel.vue';
import CBox from '@/components/layout/CBox.vue';
</script>

<template>
    <Story title="Layout / Reel">
        <Variant>
            <c-reel
                class="with-outline"
            >
                <c-box
                v-for="n of 10"
                :key="n"
                >
                BOX {{ n }}
                </c-box>
            </c-reel>
        </Variant>
    </Story>
</template>
