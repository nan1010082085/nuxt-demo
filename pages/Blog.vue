<template>
  <Content>
    <UCard class="blog-card" v-for="(item, index) in list" :key="index">
      <template #header>
        <div class="header">
          {{ item.name }}
          <UButton :padded="false" icon="i-mynaui-chevron-double-up-right" size="sm" variant="ghost" />
        </div>
      </template>
      {{ item.description }}
    </UCard>
  </Content>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const list = ref([
  {
    name: '1',
    description: '1'
  },
  {
    name: '2',
    description: '2'
  }
])

</script>
<style lang="scss" scoped>
.blog-card {
  margin-bottom: 20px;
  cursor: pointer;
  .header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
