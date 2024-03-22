<template>
  <Content>
    <UCard :class="['blog-card', renderClassBg()]" v-for="(item, index) in list" :key="index">
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
  },
  {
    name: '3',
    description: '1'
  },
  {
    name: '4',
    description: '2'
  },
  {
    name: '5',
    description: '1'
  },
  {
    name: '6',
    description: '2'
  }
])

function renderClassBg() {
  const p = Math.ceil(Math.random() * 4);
  return `bg${p}`
}

</script>
<style lang="scss" scoped>
.blog-card {
  margin-bottom: 20px;
  min-height: 230px;
  cursor: pointer;
  color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
  }
}

@each $i in 1, 2, 3, 4 {
  .bg#{$i} {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .blog-card.bg#{$i} {
    background-image: url('../assets/blog/blog-placeholder-#{$i}.jpg');
  }
}
</style>
