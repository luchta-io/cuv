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
<docs lang="md">
# CCenter
水平方向の中央揃えを行うためのレイアウト部品です。

## Props

| Name     | Type                                  | Default  | Description                 |
| -------- | ------------------------------------- | -------- | --------------------------- |
| max | string | '100%' | cssのmax-widthの値 |
| gutters | string | '1rem' | コンテンツの両端の最小限のスペース|
| andText | boolean | false | テキストも中央揃えにするかどうか(text-align: center) |
| intrinsic | boolean | false | 子要素をそのコンテンツ幅に基づいて中央揃えにさせるか |

</docs>