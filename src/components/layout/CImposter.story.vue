<script setup lang="ts">
import { reactive } from 'vue';
import CImposter from '@/components/layout/CImposter.vue';
import CBox from '@/components/layout/CBox.vue';

const data: {
    breakout: boolean
    margin: string
    fixed: boolean
} = reactive({
    breakout: false,
    margin: '0px',
    fixed: false,
})
</script>

<template>
    <Story 
    title="Layout / Imposter">
        <Variant>
            <div class="text-xl font-semibold py-10">Imposter</div>
            <div class="relative bg-yellow-200">
                <h3>位置指定コンテナ</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                <c-imposter
                :breakout="data.breakout"
                :margin="data.margin"
                :fixed="data.fixed"
                class="with-outline"
                >
                    <c-box class="bg-white">
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                        Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
                    </c-box>
                </c-imposter>
            </div>
            <template #controls>
                <HstCheckbox 
                v-model="data.breakout"
                title="breakout"
                />
                <HstText
                v-model="data.margin"
                title="margin"
                />
                <HstCheckbox 
                v-model="data.fixed"
                title="fixed"
                />
            </template>
        </Variant>
    </Story>
</template>
