<script setup lang="ts">
import CImposter from '@/components/layout/CImposter.vue';
import CBox from '@/components/layout/CBox.vue';
</script>

<template>
    <Story 
    title="Layout / Imposter">
        <Variant>
            <div class="relative bg-yellow-50">
                <h3>位置指定コンテナ</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                <c-imposter
                class="with-outline"
                >
                    <c-box background-color="white">
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                    </c-box>
                </c-imposter>
            </div>
        </Variant>
    </Story>
</template>
