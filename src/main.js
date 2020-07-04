import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoodTablePlugin from 'vue-good-table';
import axios from 'axios';
Vue.use(axios);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// window.axios = axios;
Vue.prototype.$axios = axios

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
import { ValidationProvider,ValidationObserver ,extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


extend('required', {
  ...required,
  message: 'This field is required'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
