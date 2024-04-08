<template>
  <Content>
    <div :class="$style['view-container']">
      <div
        :class="$style['view-item']"
        ref="viewItemRef"
        :style="[wateResize(index)]"
        v-for="(item, index) in list"
        :key="index"
      >
        <UCard :class="$style.card">
          <template #header>
            <div>{{ item.title }}</div>
          </template>

          {{ item.content }}
        </UCard>
      </div>
    </div>
  </Content>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const list = ref([
  {
    title: 'Waterfall',
    content: 'Waterfall is a simple and beautiful theme for hexo.'
  },
  {
    title: 'Waterfall',
    content: 'Waterfall is a simple and beautiful theme for hexo.'
  },
  {
    title: 'Waterfall',
    content: 'Waterfall is a simple and beautiful theme for hexo.'
  },
  {
    title: 'Waterfall',
    content: 'Waterfall is a simple and beautiful theme for hexo.'
  },
  {
    title: 'Waterfall',
    content: 'Waterfall is a simple and beautiful theme for hexo.'
  }
])

const viewItemRef = ref([]);

function wateResize(index: number) {
  const tag = viewItemRef.value[index] as any;
  if (!tag) return {};
  return {
    gridRowEnd: `span ${Math.ceil(tag.offsetHeight)}`
  }
};
</script>
<style lang="scss" module>
.view-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  column-gap: 10px;

  .view-item {
    grid-row-start: auto;
    grid-row-end: span 300;
    height: fit-content;
    margin-bottom: 10px;
  }

  .card {
    transition: all .6s cubic-bezier(0.215, 0.610, 0.355, 1);
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
