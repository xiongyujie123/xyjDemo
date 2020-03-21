import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/info:id', component: '@/pages/toDoInfo' },
    { path: '/index', component: '@/pages/index' },
  ],
});
