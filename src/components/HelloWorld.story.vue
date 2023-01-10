<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"
</script>

<template>
  <Story>
    <Variant title="朝の挨拶">
      <HelloWorld msg="おはよう！"/>
    </Variant>
    <Variant title="お昼の挨拶">
      <HelloWorld msg="こんにちは！"/>
    </Variant>
    <Variant title="夜の挨拶">
      <HelloWorld msg="こんばんは！"/>
    </Variant>
  </Story>
</template>
