import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import {
  sync
} from 'vuex-router-sync';
import App from './App.vue';
import Panel from './components/Panel.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.component('Panel', Panel);

Vue.use(Vuetify);
sync(store, router);

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
}).$mount('#app');
