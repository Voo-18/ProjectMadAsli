// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPwAg--3FSvSx5U0lyx8RBiTn7Xb4244M',
  authDomain: 'madprojek.firebaseapp.com',
  projectId: 'madprojek',
  storageBucket: 'madprojek.firebasestorage.app',
  messagingSenderId: '163978476430',
  appId: '1:163978476430:web:276752a5919013aaff82df',
  databaseURL: 'https://madprojek-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});