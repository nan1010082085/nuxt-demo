<template>
  <div class="header">
    <div class="logo">
      <div>{{ msg }}</div>
    </div>
    <div v-for="(item, index) in data" :key="index" class="content">
      <div :class="['content-item', { active: active == item.key }]" @click="routeTo(item.key)">{{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const { name } = useRoute();

const active = ref(name?.toString().toLowerCase() || '');

const data = ref([
  {
    label: '首页',
    key: 'home',
  },
  {
    label: '文档',
    key: 'view',
  },
  {
    label: '日志',
    key: 'blog',
  },
  {
    label: '关于',
    key: 'about'
  }
])

const routeTo = (path: string) => {
  active.value = path;
  navigateTo({
    path: '/' + path
  })
}


const msg = 'logo'
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  margin: 0 auto;
  width: 1024px;
  height: 60px;
  display: flex;

  .logo {
    width: 120px;
    line-height: 60px;
    text-align: center
  }

  .content {
    display: flex;
    justify-content: flex-start;
    line-height: 60px;
    position: relative;

    &-item {
      padding: 0 5px;
      min-width: 100px;
      cursor: pointer;
      font-size: 18px;
      text-align: center;
      background: linear-gradient(to right, #fff, #07b966) no-repeat right bottom;
      background-size: 0px 2px;
      transition:
        background-size 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
        font-weight 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      &:hover {
        background-position-x: left;
        background-size: 100% 2px;
        font-weight: bold;
      }

      &.active {
        background-position-x: left;
        background-size: 100% 2px;
        font-weight: bold;
      }
    }
  }

}
</style>
