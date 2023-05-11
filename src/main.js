import Vue from 'vue'
import App from './App'
import router from "./router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://192.168.0.175:8081/';//后端开发环境地址
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
// Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
