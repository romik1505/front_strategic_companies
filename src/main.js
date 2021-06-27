import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router/router'
import store from './store/store'
// import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
// Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
