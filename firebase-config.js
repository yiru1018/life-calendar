import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: 'calendar-b6e58.firebaseapp.com',
  projectId: 'calendar-b6e58',
  storageBucket: 'calendar-b6e58.appspot.com',
  messagingSenderId: '17624509751',
  appId: '1:17624509751:web:af4957313480e35e787eb2',
  measurementId: 'G-EVCKVNJEEJ',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
