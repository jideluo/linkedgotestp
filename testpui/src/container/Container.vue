<template>
  <div class="app">
    <el-container>
      <!--导入sidebar的方法-->
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <Sidebar :collapse="isCollapse" :routes="$router.options.routes[1].children"/>
      </el-aside>
      <el-container>
        <el-header class="app-header" >
          <div style="width: 20px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>

          <!--<el-menu-->
            <!--:default-active="activeIndex"-->
            <!--class="el-menu-demo"-->
            <!--mode="horizontal"-->
            <!--@select="handleSelect"-->
            <!--background-color="#545c64"-->
            <!--text-color="#fff"-->
            <!--active-text-color="#ffd04b"-->
          <!--&gt;-->
            <!--<el-menu-item index="1">处理中心</el-menu-item>-->
            <!--<el-submenu index="2">-->
              <!--<template slot="title">我的工作台</template>-->
              <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
              <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--<el-submenu index="2-4">-->
                <!--<template slot="title">选项4</template>-->
                <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
              <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
            <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
          <!--</el-menu>-->
          <!--<div class="line"></div>-->
          <!--<el-menu-->
            <!--:default-active="activeIndex2"-->
            <!--class="el-menu-demo"-->
            <!--mode="horizontal"-->
            <!--@select="handleSelect"-->
            <!--background-color="#545c64"-->
            <!--text-color="#fff"-->
            <!--active-text-color="#ffd04b">-->
            <!--<el-menu-item index="1">处理中心</el-menu-item>-->
            <!--<el-submenu index="2">-->
              <!--<template slot="title">我的工作台</template>-->
              <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
              <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--<el-submenu index="2-4">-->
                <!--<template slot="title">选项4</template>-->
                <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
              <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
            <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
          <!--</el-menu>-->

          <!--&lt;!&ndash; 我是样例菜单 &ndash;&gt;-->
          <!--<el-menu default-active="1"-->
          <!--class="el-menu-demo tab-page"-->
          <!--mode="horizontal"-->
          <!--@select="handleSelect"-->
          <!--active-text-color="#409EFF">-->
          <!--<el-menu-item index="1">处理中心</el-menu-item>-->
          <!--<el-submenu index="2">-->
          <!--<template slot="title">我的工作台</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="3"-->
          <!--disabled>消息中心-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="4">-->
          <!--<a href="#">订单管理</a>-->
          <!--</el-menu-item>-->
          <!--</el-menu>-->

          <div class="app-header-userinfo">
            <el-dropdown trigger="hover"
                         :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided
                                  @click.native="logout">退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  export default {
    name: 'Container',
    components: {
      Sidebar
    },
    data() {
      return {
        username: '',
        isCollapse: false
      }
    },
    methods: {
      toggleSideBar() {
        this.isCollapse = !this.isCollapse
      },
      logout: function () {
        this.$confirm('确认退出?', '提示', {})
          .then(() => {
            sessionStorage.removeItem('user');
            this.$router.push('/login');
          })
          .catch(() => {
          });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
    mounted: function () {
      let user = sessionStorage.getItem('user');
      if (user) {
        this.username = user;
      }
    },
  }

</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
  .el-menu-demo{
    width: 90%;
  }
  .app-header{
    /*height: 100%;*/
    /*background-color: #545c64;*/
  }
</style>
