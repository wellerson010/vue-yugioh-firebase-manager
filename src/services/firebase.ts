import Firebase, { app } from 'firebase';
import 'firebase/firestore';
import { Store } from 'vuex';
import RootModuleState from '@/models/vuex/RootModuleState';

export function configureFirebase(store: Store<RootModuleState>){
    const firebase = initializeFirebase();
    const database = initializeFirestore(firebase);
    
    store.commit('firebase/setFirebase', firebase);
    store.commit('firebase/setDatabase', database);
}

export function initializeFirebase(){
    return Firebase.initializeApp({
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
    });
};

export function initializeFirestore(firebase: app.App){
    return firebase.firestore();
}