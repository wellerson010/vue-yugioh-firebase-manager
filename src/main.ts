import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from '@/components/App.vue';
import router from '@/router';
import store from '@/vuex/store';
import '@/registerServiceWorker';

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');