<template>
  <div id = "login" class="login-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!--<h1 class="title">零狗智能自动化平台</h1>-->


    <el-form :model="myForm" :rules="myRule"
             status-icon
             ref="myForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">

      <!--linkedgo-图标-->
      <el-avatar shape="circle" :size="100" :src="url"></el-avatar>

      <h2 class="title">Linked-Go测试平台</h2>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="myForm.username"
                  auto-complete="off"
                  placeholder="用户名"
        >
          <template slot="prepend"><span class="fa fa-user fa-lg" style="width: 13px"></span></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="myForm.password" show-password>
          <template slot="prepend"><span class="fa fa-lock fa-lg" style="width: 13px"></span></template>
          <!--<template slot="suffix"><span class="password-eye" @click="showPassword" :class="eyeType"></span></template>-->
        </el-input>

      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberme"
      >记住密码
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>

  // import {requestLogin} from "../api/api";

  export default {
    data() {
      return {
        logining: false,
        pwdType: 'password',
        // eyeType: 'fa fa-eye-slash fa-lg',
        url:require("../assets/go.png"),
        ruleForm2:{
          account: '',
          checkPass:''
        },
        myForm: {
          username: "",
          password: "",
        },
        myRule: {
          username: [{required: true, message: '请输入账号', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: false
      }
    },
    methods: {
      handleSubmit() {

      let _this = this;
      if (this.myForm.username === '' || this.myForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        this.$axios.request({
          method: 'post',
          url: 'http://127.0.0.1:8000/api-token-auth/',
          data: _this.myForm
        }).then(res => {
          console.log(res.data);
          _this.userToken = 'Bearer ' + res.data.token;
           console.log( _this.userToken);
          // 将用户token保存到vuex中
          // _this.changeLogin({ Authorization: _this.userToken });
          _this.$router.push('/');
          alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    















        // this.$refs.myForm.validate((valid) => {
        //   if (valid) {
        //     this.logining = true;

        //     // if(this.myForm.username === ' ' || this.myForm.password === ' ')
        //     //   alert("账号或密码不能为空")
        //     this.$axios.request({
        //       url:"http://127.0.0.1:8000/api-token-auth/",
        //       method:"POST",
        //       data:{
        //         username: this.myForm.username,
        //         password: this.myForm.password
        //       },
        //       responseType:'json'
        //     }).then(function (response) {
        //       console.log(response.data)
        //       // that.$store.commit('saveToken',response.data)
        //       this.$router.push({path: '/'})
        //     })

        //     if (this.myForm.username === 'admin' && this.myForm.password === '123456') {
        //       this.logining = false;
        //       // 登陆成功 保存帐号密码
        //       if(this.rememberme){
        //         this.setCookie(this.myForm.username, this.myForm.password, 7)
        //       }else{
        //         this.deleteCookie()
        //       }
        //       sessionStorage.setItem('user', this.myForm.username);
        //       this.$router.push({path: '/'});//登录跳转界面
        //     } else {
        //       this.logining = false;
        //       this.$alert('账号或密码错误', '温馨提示', {
        //         confirmButtonText: '确定'
        //       })
        //     }            
        //   } else {
        //     console.log('error submit!');
        //     return false;
        //   }
        // })
      },
      // 密码显示图标效果
      // showPassword(){
      //   if (this.pwdType == "password") {
      //     this.pwdType = ''
      //     this.eyeType = 'fa fa-eye fa-lg'
      //   }
      //   else {
      //     this.pwdType ="password"
      //     this.eyeType = 'fa fa-eye-slash fa-lg'
      //   }
      // },

      // 存储在cookie中
      setCookie(name,pass,days){
        let expire = new Date()
        expire.setDate(expire.getDate() + days)
        document.cookie = `C-username=${name};expires=${expire}`
        document.cookie = `C-password=${pass};expires=${expire}`
      },
      getCookie(){
        if(document.cookie.length){
          let arr = document.cookie.split('; ')
          for(let i=0; i<arr.length; i++){
            let arr2 = arr[i].split('=')
            if(arr2[0] === 'C-username'){
              this.ruleForm2.username = arr2[1]
            }else if(arr2[0] === 'C-password'){
              this.ruleForm2.password = arr2[1]
              this.rememberme = true
            }
          }
        }
      },
      // 修改为空，天数为-1
      deleteCookie(){
        this.setCookie('', '', -1);
      },
    },

    mounted() {
      this.getCookie()
      // document.querySelector("login").setAttribute("style", "background-color:#1BA9DB");
    }
  };
</script >

<style >
  /*  粒子背景设定*/
  #particles-js {
    width: 100%;
    height: calc(100%);
    position: fixed;
  }
  .login-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #191c2c;
  }
  .title{
    text-align: center;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 200px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .el-avatar{
    position: fixed;
    margin: -80px 125px;
    background-color: unset;
  }

  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
</style>
