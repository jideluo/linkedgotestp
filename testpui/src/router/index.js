import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Container from '@/container/Container'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,

      children: [
        {
          path: 'dashboard', name: '项目', component: Dashboard,
          children:[
            {path: 'dashboard1', name: '产品中心', component: Dashboard,},
            {path: 'dashboard2', name: '用例管理', component: Dashboard,},
            {path: 'dashboard3', name: '定时任务', component: Dashboard,},
            {path: 'dashboard4', name: 'BUG管理', component: Dashboard,},
            {path: 'dashboard5', name: '测试报告', component: Dashboard,},
            // {path: 'dashboard1', name: 'Web UI', component: Dashboard,},
            // {path: 'dashboard1', name: 'APP UI', component: Dashboard,},
            // {path: 'dashboard1', name: 'APP Monkey', component: Dashboard,},
            // {path: 'dashboard1', name: 'RS485', component: Dashboard,},
          ]
          // children: [
          //   {path: 'dashboard1', name: '首页1', component: Dashboard,},
          //   {
          //     path: 'dashboard2', name: '首页2', component: Dashboard,
          //     children: [
          //       {path: 'dashboard21', name: '首页21', component: Dashboard,},
          //       {path: 'dashboard22', name: '首页22', component: Dashboard,},
          //     ]
          //   },
          // ]
        },
        {
          path: 'article', name: '设置', component: Article,
          children:[
            {path: 'dashboard1', name: '邮箱设置', component: Article,},
            {path: 'dashboard2', name: '环境检测', component: Article,},
          ]
        },
      ]
    },
  ],
  mode: 'history'

  

})

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

