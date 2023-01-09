import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',//登录
    name: 'login',
    component: (resolve) => {
      require(['./../views/login.vue'], resolve)
    },
  },
  //首页
  {
    path: '/home',
    name: 'home',
    component: (resolve) => {
      require(['./../views/home.vue'], resolve)
    },
  },
  //视频上传
  {
    path: '/videoUpload',
    name: 'videoUpload',
    component: (resolve) => {
      require(['./../views/videoUpload.vue'], resolve)
    },
  },
  //问题跟踪
  {
    path: '/problemTracking',
    name: 'problemTracking',
    component: (resolve) => {
      require(['./../views/problemTracking.vue'], resolve)
    },
  },
  //锅炉管理
  {
    path: '/boilerManagement',
    name: 'boilerManagement',
    component: (resolve) => {
      require(['./../views/boilerManagement.vue'], resolve)
    },
  },
  //任务管理
  {
    path: '/taskManagemen',
    name: 'taskManagemen',
    component: (resolve) => {
      require(['./../views/taskManagemen.vue'], resolve)
    },
  },
];
const router = new Router({
  // mode: 'history',
  base: '/',
  routes,
});
export default router;
