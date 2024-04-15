import type { RouterConfig } from '@nuxt/schema';

const pages = ['About', 'Blog', 'Home', 'View'];

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      path: '/',
      redirect: '/home'
    },
    ...(() => {
      return pages.map((key) => {
        return {
          name: key.toLowerCase(),
          path: `/${key.toLowerCase()}`,
          component: () => import(`~/pages/${key}.vue`).then((r) => r.default || r)
        }
      });
    })()
  ]
};
