import { createStore } from 'redux';
import authReducer from './reducers/authReducer'; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { loginSuccess, logout } from './actions/authActions';

const store = createStore(authReducer);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // 로그인한 경우
        store.dispatch(loginSuccess(user));
    } else {
        // 로그아웃한 경우
        store.dispatch(logout());
    }
});

export default store;