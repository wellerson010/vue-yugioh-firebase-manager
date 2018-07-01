import { MutationTree } from 'vuex';
import { app, firestore } from 'firebase';

import FirebaseModuleState from '@/models/vuex/FirebaseModuleState';

const mutations: MutationTree<FirebaseModuleState> = {
    setDatabase(state, payload: firestore.Firestore){
        state.database = payload;
    },
    setFirebase(state, payload: app.App){
        state.firebase = payload;
    }
}

export default mutations;