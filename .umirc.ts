import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/drag', component: '@/pages/Drag/index' },
    { path: '/player', component: '@/pages/Player/index' },
    { path: '/detail', component: '@/pages/Detail/index' },
    { path: '/login', component: '@/pages/Login/index' },
  ],
  fastRefresh: {},
});
