<script setup lang="ts">
import { computed } from "vue";
import CButton from "@/components/form/CButton.vue";
const props = withDefaults(
  defineProps<{
    type?: "alert" | "confirm";
    modelValue: boolean;
    overscroll?: boolean;
    cancelText?: string;
    confirmText?: string;
    confirmColor?: string;
  }>(),
  {
    type: "confirm",
    modelValue: false,
    overscroll: false,
    cancelText: "キャンセル",
    confirmText: "確認",
    confirmColor: "",
  }
);
const emits = defineEmits<{
  (e: "close"): void;
  (e: "confirm"): void;
}>();

const computedColor = computed(() => {
  if (props.confirmColor) return props.confirmColor;
  if (props.type === "alert") return "danger";
  return "success";
});

const 確認 = () => {
  emits("confirm");
  emits("close");
};

const close = () => {
  if(props.type === 'alert') return
  emits('close')
  return 
}
</script>
<template>
  <div
    v-show="modelValue"
    @click.self="close"
    class="fixed top-0 left-0 z-50 inset-0 bg-gray-400/50 max-h-screen overflow-auto"
  >
    <div
      class="bg-white fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-sm max-h-[90vh] sm:max-h-[95vh] flex flex-col"
    >
      <div
        class="min-h-[30%] overscroll-contain flex-1 visible"
        :class="overscroll ? 'overflow-scroll' : ''"
      >
        <slot />
      </div>
      <div
        class="relative bottom-0 p-2 w-full bg-white border-t border-gray-200 flex flex-row-reverse justify-between"
      >
        <c-button @click="確認" :color="computedColor">
          {{ confirmText }}
        </c-button>
        <c-button v-show="type === 'confirm'" @click="$emit('close')">
          {{ cancelText }}
        </c-button>
      </div>
    </div>
  </div>
</template>
