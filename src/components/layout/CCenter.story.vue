<script setup lang="ts">
import CBox from '@/components/layout/CBox.vue';
import CCenter from '@/components/layout/CCenter.vue';

</script>

<template>
    <Story title="Layout / Center">
        <Variant>
            <c-center
            gutters="2rem"
            class="with-outline">
                <p>
                    あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
                </p>
                <c-box
                border-width="1px"
                border-color="border-black"
                >
                    BOX
                </c-box>
                <c-center class="with-outline">
                    <c-box
                    border-width="1px"
                    border-color="border-black"
                    >
                        Nested Center BOX
                    </c-box>

                </c-center>
            </c-center>
        </Variant>
    </Story>
</template>
