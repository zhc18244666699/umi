import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/drag', component: '@/pages/Drag/index' },
  ],
  fastRefresh: {},
});
