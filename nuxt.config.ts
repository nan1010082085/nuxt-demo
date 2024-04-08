// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  modulesDir: ['node_modules']
});
