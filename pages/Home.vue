<template>
  <div>
    <h2></h2>
    <Content>
    </Content>
    <div class="py-2"></div>
    <h2>文档分类</h2>
    <Content>
      <div class="button-group px-5 py-5">
        <UTooltip v-for="(item, index) in keyArr" :key="index" :text="content[item]">
          <UButton>
            <a :href="`/view/#${item}`" color="primary">{{ item }}</a>
          </UButton>
        </UTooltip>
      </div>
    </Content>
  </div>
</template>
<script setup lang="ts">
import { metaKeyByCetagory } from '~/utils'
// @ts-ignore
const VIEW = import.meta.glob('public/view//*.*.(ts|json)', { eager: true })
const keyArr: Set<string> = new Set(metaKeyByCetagory(VIEW) as string[]);

const content: Record<string, string> = {
  build: '构建工具',
  npm: 'npm插件',
  web: '前端',
  vue: 'Vue',
  node: 'NodeJS',
  tool: '工具',
}

</script>
<style lang="scss" scoped>
h2 {
  font-size: 1.5rem;
}
</style>
