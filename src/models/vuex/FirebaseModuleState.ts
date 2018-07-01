import { app, firestore } from 'firebase';

export default interface FirebaseModuleState {
    firebase: app.App | null,
    database: firestore.Firestore | null
}