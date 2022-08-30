import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADtg5jN2VsWxwA_z1nBaTF8tc1G-12DBQ",
    authDomain: "auth-1482e.firebaseapp.com",
    projectId: "auth-1482e",
    storageBucket: "auth-1482e.appspot.com",
    messagingSenderId: "375450722834",
    appId: "1:375450722834:web:17153935d33bfb78f86ecb",
    measurementId: "G-R86DHSXRLE"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default {firebase}