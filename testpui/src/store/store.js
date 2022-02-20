// import Vue from 'vue'
// import Vuex from 'vuex'
// import Cookie from 'vue-cookies'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   // 组件中通过 this.$store.state.username 调用
//   state: {
//     username: Cookie.get('username'),
//     token: Cookie.get('token')
//   },
//   mutations: {
//     // 组件中通过 this.$store.commit(参数)  调用
//     saveToken: function (state, data) {
//       state.username = data.username
//       state.token = data.token
//       Cookie.set('username', data.username, '20min')
//       Cookie.set('token', data.token, '20min')

//     },
//     clearToken: function (state) {
//       state.username = null
//       state.token = null
//       Cookie.remove('username')
//       Cookie.remove('token')
//     }
//   }
// })



import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
});
 
export default store;