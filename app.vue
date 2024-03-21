<template>
  <div id="app">
    <div class="app-header">
      <Header />
    </div>
    <NuxtLayout>
      <div class="app-content">
        <Avatar/>

        <NuxtPage :transition="true"/>
      </div>

    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f1f1f1;
  height: 100vh;

  .app-header {
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(#fff, 0.1);
  }

  .app-content {
    position: relative;
    margin: 0 auto;
    width: 1024px;
    height: calc(100% - 60px);
  }
}
</style>
