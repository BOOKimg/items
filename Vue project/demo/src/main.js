// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false
import axios from 'axios' //用来做数据交互的
//axios.defaults.withCredentials=true //允许跨域取代服务携带cookie  能够正常的向服务器发送cookie/
var myAxios=axios.create({ //用来设置基本的请求路径的
   	
   })
Vue.prototype.$axios=myAxios //直接调用请求的工具 this.$axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
