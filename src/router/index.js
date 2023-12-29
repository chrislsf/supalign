import { createRouter, createWebHashHistory  } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 登录
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        hidden: true
      }
    },
    // 404
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: {
        hidden: true
      }
    },
    // 重定向
    {
      path: '/',
      redirect: '/home',
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'ele-HomeFilled',
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/test/index.vue'),
      meta: {
        title: '测试',
        icon: 'ele-HomeFilled',
      }
    },
    //面像分析
    {
      path: '/face',
      name: 'Face',
      component: () => import('@/views/face/index.vue'),
      meta: {
        title: '面像评测',
        hidden: true
      }
    },
    //头颅侧位分析
    {
      path: '/headside',
      name: 'Headside',
      component: () => import('@/views/headside/index.vue'),
      meta: {
        hidden: true
      }
    },
    //牙例分析
    {
      path: '/dental',
      name: 'Dental',
      component: () => import('@/views/dental/index.vue'),
      meta: {
        title: '牙例分析',
        hidden: true
      }
    },
    //图片上传
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('@/views/upload/index.vue'),
      meta: {
        title: '图片上传',
        hidden: true
      }
    },
    { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

// 导出路由
export default router;