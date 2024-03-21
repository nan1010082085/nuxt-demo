<template>
  <div class="content">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { defineOptions } from 'vue';

defineOptions({
  name: 'Content'
})

const msg = 'content'
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>
