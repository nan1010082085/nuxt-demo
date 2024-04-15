<template>
  <Content>
    <div :class="$style['view-wrapper']" v-for="(item, index) in keyArr" :key="item || index">
      <div :id="item" :class="$style['header']">
        {{ item }}
      </div>
      <div :class="$style['content']">
        <div :class="$style['view-item']" ref="viewItemRef" :style="[wateResize(view.title)]"
          v-if="isArray(getValueByType(item))" v-for="(view, vdx) in getValueByType(item)" :key="vdx">
          <UCard :class="$style.card">
            <template #header>
              <div :class="$style['card-header']">
                {{ view.title }}
                <div class="button-group" v-if="isArray(view.url)">
                  <UTooltip v-for="(urlG, udx) in (view.url as URLGlo[])" :text="urlG.label"
                    :popper="{ placement: 'top' }">
                    <UButton :padded="false" size="sm" variant="ghost" :key="udx" @click="open(urlG)">
                      <SvgIcon type="mdi" :path="urlG.icon" />
                    </UButton>
                  </UTooltip>
                </div>
                <UButton :padded="false" icon="i-mynaui-chevron-double-up-right" size="sm" variant="ghost" v-else
                  @click="open(view.url as string)" />
              </div>
            </template>
            <UButton :class="$style['view-item-badge']" size="sm" color="gray" variant="ghost">
              {{ view?.badge }}
            </UButton>
            {{ view.descrpition }}
          </UCard>
        </div>
      </div>
    </div>
  </Content>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { metaKeyByCetagory, objectByDefaults } from '~/utils'
import type { NpmGlo, URLGlo } from '~/types';
import SvgIcon from '@jamescoyle/vue-icon';

//  :data-len="getValueByType(item)?.length"
// @ts-ignore
const VIEW = import.meta.glob('public/view//*.*.(ts|json)', { eager: true })
const keyArr = new Set(metaKeyByCetagory(VIEW) as string[]);
const valueArr = objectByDefaults(VIEW)

const getValueByType = (type: string): NpmGlo[] | null => {
  const arr = valueArr.filter((i) => i.type === type);
  if (arr.length) {
    return arr.flatMap((item) => item.children.flatMap((child: NpmGlo) => ({ badge: item.title, ...child })))
  }
  return null;
}
const listIndex = computed(() => {
  let result = [];
  for (const iterator of keyArr) {
    result.push(...getValueByType(iterator) || [])
  }
  return result.map((item) => item.title)
})
const valueFindIndex = (title: string) => {
  return listIndex.value.findIndex((item) => item === title);
}


const open = (item: string | URLGlo) => {
  window.open(typeof item === 'string' ? item : item.url, '__blank')
}

const viewItemRef = ref()
function wateResize(title: string) {
  if (!viewItemRef.value) return {}
  let index = valueFindIndex(title);
  const tag = viewItemRef.value[index] as HTMLElement;
  if (!tag) return {}
  return {
    gridRowEnd: `span ${Math.ceil(tag.offsetHeight)}`
  }
};

onMounted(() => {
  console.log(listIndex.value)
})
</script>
<style lang="scss" module>
.view-wrapper {
  position: relative;
  padding: 0 10px;

  &:hover {
    .header {
      background: linear-gradient(to right, #0ff, #00f);
      background-clip: text;
      text-shadow: 0px 6px rgba($color: #000000, $alpha: .2);
      transform: rotate(-8deg) scale(1.02);
    }
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
  font-weight: bold;
  box-sizing: border-box;
  background: linear-gradient(to right, #00f, #0ff);
  background-clip: text;
  color: transparent;
  text-shadow: 0px 6px rgba($color: #000000, $alpha: .1);
  transform: rotate(-5deg) scale(1);
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.content {
  padding-top: 44px;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  column-gap: 10px;
}

.view-item {
  grid-row-start: auto;
  grid-row-end: span 300;
  height: fit-content;

  &-badge {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    font-size: 12px;
    text-align: right;
    // transform: rotate(15deg);
    // transform-origin: 50%;
    transition: all .2s linear;
  }
}

.card {
  position: relative;
  margin-bottom: 10px;
  box-shadow: none;
  border-bottom: 1px solid rgb(199, 199, 199);
  transition: all .5s cubic-bezier(0.215, 0.610, 0.355, 1);

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-bottom: none;

    .view-item-badge {
      transform: scale(1.05);
      font-weight: bold;
    }
  }

  .card-header {
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
