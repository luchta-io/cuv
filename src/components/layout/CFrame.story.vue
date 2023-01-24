<script setup lang="ts">
import CFrame from '@/components/layout/CFrame.vue';

</script>

<template>
    <Story 
    title="Layout / Frame"
    :layout="{
        type: 'grid',
        width: 300,
    }">
        <Variant title="Frame有り">
            <c-frame
            ratio="16:8"
            class="with-outline"
            >
                <img
                    src="@/assets/alberta-gf9d16eebb_1920.jpeg"
                    alt="alberta picture"
                >
            </c-frame>
        </Variant>
        <Variant title="Frame無し">
            <img
            src="@/assets/alberta-gf9d16eebb_1920.jpeg"
            alt="alberta picture"
            >
        </Variant>
    </Story>
</template>
