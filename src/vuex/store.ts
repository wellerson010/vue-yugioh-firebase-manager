import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import RootModuleState from '@/models/vuex/RootModuleState';
import firebase from '@/vuex/firebase';

Vue.use(Vuex);

const store: StoreOptions<RootModuleState> = {
  modules: {
    firebase
  }
};

export default new Vuex.Store<RootModuleState>(store);