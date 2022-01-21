// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAkyOyRQ2bOgvoPYw3FLFUwHw0xG-qg4Wc',
    authDomain: 'resoluteai-task-1.firebaseapp.com',
    projectId: 'resoluteai-task-1',
    storageBucket: 'resoluteai-task-1.appspot.com',
    messagingSenderId: '585012991981',
    appId: '1:585012991981:web:5ceb4fc80ee851e6f0b9e4',
    measurementId: 'G-ZHXX4MTZ2X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
