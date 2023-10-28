import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueMeta from "vue-meta";
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
