<template>
  <div class="about py-5">
    <!-- <UCarousel v-slot="{ item }" :items="items">
      <img class="image" :src="item" />
    </UCarousel> -->
    <UDivider class="py-3">
      <SvgIcon type="mdi" :path="mdiAccountStar"></SvgIcon>
    </UDivider>

    <Content>
      <UButton @click="open">个人空间</UButton>
    </Content>

    <UDivider class="py-3">
      <SvgIcon type="mdi" :path="mdiSchool"></SvgIcon>
    </UDivider>

    <Content>
      <h2>教育</h2>
      <div class="content">
        <UTable :columns="infoColums" :rows="infoEducation"></UTable>
      </div>
    </Content>

    <UDivider class="py-3" icon="i-simple-icons-github"></UDivider>

    <Content>
      <h2>Github</h2>
      <div class="button-group py-5 px-5">
        <UButton class="content-item" color="primary" v-for="(item, index) in infoGithub" :key="index">
          <ULink target="_blank" :to="item.url" active-class="text-primary">
            {{ item.label }}
          </ULink>
        </UButton>
      </div>
    </Content>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AboutJson from 'public/about';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountStar, mdiSchool } from '@mdi/js';
const { education, github } = AboutJson;

const href = 'https://qichen.flowus.cn/';

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

const open = () => {
  window.open(href, '_blank')
}

onMounted(() => {
  items.value.push(...arr);
})
</script>
<style lang="scss" scoped>

.about {


    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 16px;
    }


  .image {
    width: 400px;
    height: 200px;
  }

}
</style>
