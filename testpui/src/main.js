// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  'axios'
// import store from './store/store'
// import Login from './views/Login'

import VueParticles from 'vue-particles'
import '@/styles/index.scss'
import 'font-awesome/scss/font-awesome.scss'

/*引入下面三行*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueParticles)
Vue.use(ElementUI);

Vue.prototype.$axios =axios//注册，以后就可以用$axios来定义了

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})



// 用 vue-router 的 beforeEach 实现
// beforeEach 方法接收三个参数：
//
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// router.beforeEach((to, from, next) => {
//   if(to.path === '/login'){
//     sessionStorage.removeItem('user');
//   }
//   var user = sessionStorage.getItem('user');
//   if(!user && to.path !== '/login'){
//     next({
//       path: '/login'
//     })
//   }else{
//     next();
//   }
// })


// // 导航守卫
// // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });
