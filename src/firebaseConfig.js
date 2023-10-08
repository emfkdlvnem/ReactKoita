import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 이전 저장소 정보
// export const firebaseConfig = {
//     apiKey: 'AIzaSyBfXC9gasc0NI7bFx-BYN52ULFMjU9LLho',
//     authDomain: 'koita-1c079.firebaseapp.com',
//     databaseURL: 'https://koita-1c079-default-rtdb.asia-southeast1.firebasedatabase.app',
//     projectId: 'koita-1c079',
//     storageBucket: 'koita-1c079.appspot.com',
//     messagingSenderId: '240009170899',
//     appId: '1:240009170899:web:a7184866ddf02275e56926',
//     measurementId: 'G-NHQ6QB7LNY',
// };

// 새로운 저장소 정보
const firebaseConfig = {
    apiKey: 'AIzaSyA8f6BwPlVIDJuUHvb4xW2Q-tfRBCcoiJk',
    authDomain: 'reactkoita.firebaseapp.com',
    projectId: 'reactkoita',
    storageBucket: 'reactkoita.appspot.com',
    messagingSenderId: '1058597611566',
    appId: '1:1058597611566:web:ece23b06e5b45b8fea17bf',
    measurementId: 'G-TQ4PKBSNGG',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
