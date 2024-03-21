<template>
  <div class="avatar">
    <img src="/assets/avatar.jpg" />
  </div>
</template>
<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'Avatar'
})
const msg = 'avatar';

</script>
<style lang="scss" scoped>
.avatar {
  position: absolute;
  top: 10px;
  left: -100px;
  transform: rotate(-15deg);
  box-sizing: border-box;
  background: #fff;
  border-radius: 50%;
  transition: all .3s linear;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  &:hover {
    box-shadow: 5px 3px #fff;
  }
}
</style>
