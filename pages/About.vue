<template>
  <div class="about">
    <div class="title">
      <h1>杨</h1>
      <h2>东楠</h2>
    </div>

    <UCarousel v-slot="{ item }" :items="items">
      <img class="image" :src="item" />
    </UCarousel>

    <div class="contaienr">
      <h2>教育</h2>
      <div class="content">
        <UTable :columns="infoColums" :rows="infoEducation"></UTable>
      </div>
    </div>
    <div class="contaienr">
      <h2>Github</h2>
      <div class="content">
        <UButton class="content-item" color="primary" v-for="(item, index) in infoGithub" :key="index">
          <ULink target="_blank" :to="item.url" active-class="text-primary">
            {{ item.label }}
          </ULink>
        </UButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { education, github } from 'public/about.json';

// @ts-ignore
// `nuxt`内置`vite`模块
const d = import.meta.glob('/assets/blog/*.{pn,jp}g', { eager: true })
const arr: string[] = Object.values(d).map((i: any) => i.default);

const items = ref<string[]>([])

const infoColums = ref([
  { label: '', key: 'date' },
  { label: '', key: 'school' },
  { label: '', key: 'subject' },
  { label: '', key: 'education' },
  { label: '', key: 'desc' },
]);
const infoEducation = ref(education)

const infoGithub = ref<{ label: string; url: string; }[]>(github);


onMounted(() => {
  items.value.push(...arr);
})
</script>
<style lang="scss" scoped>

.about {
  padding: 20px;

  .title {
    display: flex;
    align-items: end;
    padding: 10px;
    gap: 5px;
    background-color: #fff;
    margin-bottom: 10px;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 16px;
    }

  }


  .image {
    width: 400px;
    height: 160px;
  }

  .contaienr {
    h2 {
      padding: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }

    .content {
      padding: 10px 20px;

      &-item {
        display: block;
        font-size: 18px;
        margin-bottom: 1px;
      }

      v-deep:thead {
        display: none;
      }
    }

  }

}
</style>
