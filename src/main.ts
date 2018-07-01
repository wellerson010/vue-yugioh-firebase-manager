import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from '@/components/App.vue';
import router from '@/router';
import store from '@/vuex/store';
import '@/registerServiceWorker';
import { initializeFirebase, initializeFirestore, configureFirebase } from '@/services/firebase';

Vue.use(Vuetify);
Vue.config.productionTip = false;

configureFirebase(store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');