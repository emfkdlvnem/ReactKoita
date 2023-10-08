import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyBfXC9gasc0NI7bFx-BYN52ULFMjU9LLho',
    authDomain: 'koita-1c079.firebaseapp.com',
    databaseURL: 'https://koita-1c079-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'koita-1c079',
    storageBucket: 'koita-1c079.appspot.com',
    messagingSenderId: '240009170899',
    appId: '1:240009170899:web:a7184866ddf02275e56926',
    measurementId: 'G-NHQ6QB7LNY',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
