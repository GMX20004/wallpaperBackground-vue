import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'pageLayout',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        component: () => import('@/views/homePage/index.vue'),
        meta: { keepAlive: true , requireAuth: true}
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: { keepAlive: true , requireAuth: true}
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/index.vue'),
        meta: { keepAlive: true , requireAuth: true}
      },
      {
        path: '/wallpaper',
        name: 'wallpaper',
        component: () => import('@/views/wallpaper/index.vue'),
        meta: { keepAlive: true , requireAuth: true}
      },
      {
        path: '/setUp',
        name: 'setUp',
        component: () => import('@/views/setUp/index.vue'),
        meta: { keepAlive: true , requireAuth: true}
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
