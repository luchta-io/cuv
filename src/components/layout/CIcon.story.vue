<script setup lang="ts">
import CIcon from '@/components/layout/CIcon.vue';
import CCluster from '@/components/layout/CCluster.vue';
</script>

<template>
    <Story title="Layout / Icon">
        <Variant>
            <c-cluster>
                <button>
                <c-icon
                    class="with-outline"
                >
                    <svg>
                    <!-- <use href="@/assets/style/icons.svg#cross" /> -->
                    </svg>
                    with Button
                </c-icon>
                </button>
                <c-icon
                class="with-outline"
                >
                <svg>
                    <!-- <use href="@/assets/style/icons.svg#hamburger" /> -->
                </svg>
                Icon only
                </c-icon>
            </c-cluster>
        </Variant>
    </Story>
</template>
