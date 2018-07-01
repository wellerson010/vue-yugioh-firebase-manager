import { Module } from 'vuex';

import FirebaseModuleState from '@/models/vuex/FirebaseModuleState';
import RootModuleState from '@/models/vuex/RootModuleState';
import mutations from './mutations';

const state: FirebaseModuleState = {
    firebase: null,
    database: null
};

const firebase: Module<FirebaseModuleState, RootModuleState> = {
    namespaced: true,
    state,
    mutations
}

export default firebase;