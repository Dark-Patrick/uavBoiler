import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";
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
  //登录信息失效
  {
    path: "/error",
    name: "error",
    component:(resolve)=>{
      require(['./../views/error.vue'], resolve)
    },
  },
];
const router = new Router({
  // mode: 'history',
  base: '/',
  routes,
});

router.beforeEach((to, from, next)=>{
  if(to.path.startsWith("/login")){
    window.localStorage.removeItem("access-admin");
    next();
  }
  else {
    let admin = JSON.parse(window.localStorage.getItem("access-admin"));
    if(!admin){
      next({path: "/login"});
    }
    else {
      //校验token合法性
      axios({
        url:"checkToken",
        method:"get",
        headers:{
          token:admin.token
        }
      }).then((response)=>{
        if(!response.data){
          console.log("校验失败");
          next({path:"/login"});
        }
      })
      next();
    }
  }
})

export default router;
