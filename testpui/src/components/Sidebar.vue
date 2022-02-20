<template>
  <div>
    <div class="app-side-logo">
      <img src="@/assets/go.png"
           :width="collapse ? '60' : '60'"
           height="60" />
    </div>

    <el-menu class="el-menu-vertical-demo"
             background-color="#000D17"
             text-color="#FFFFFF"
             :default-active="defaultActive"
             router
             :collapse="collapse"
    >
      <SidebarItem v-for="(item, idx) in routes"
                   :subroute="item"
                   :fatherpath="fatherPath"
                   :barIdx="idx" :key="idx" />
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'
  export default {
    naem: "Sidebar",
    components: {
      SidebarItem
    },
    props: {
      collapse: {
        type: Boolean
      },
      routes: {
        type: Array
      }
    },
    computed: {
      // 首次进入页面时展开当前页面所属的菜单
      defaultActive(){
        return this.$route.path
      },
      fatherPath(){
        // 这里直接获取路由配置的 '/' 项 列表的第一项
        return this.$router.options.routes[1].path
      }
    }
  }
</script>

<style>

  .el-menu-vertical-demo{
    left: 0px;
    top: 0px;
    height: 800px;
    background-color:rgba(255, 255, 255, 1);;
    /*height: 100%;*/
  }
  /*.app-side-logo*/
  /*{*/
  /*left: 0px;*/
  /*top: 0px;*/
  /*background-color: #000D17;*/
  /*}*/

</style>
