<template>
  <div>
    <!-- <NuxtWelcome /> -->
    {{ msg }}

    <UButton>Click Me</UButton>
  </div>
</template>

<script setup lang="ts">
  const msg = ref('Welcome to Nuxt 3!')
</script>
