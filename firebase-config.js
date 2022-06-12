import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCGzDjguFU3eWNhImvSVxvXFXfvQ0d4X1E',
  authDomain: 'calendar-b6e58.firebaseapp.com',
  projectId: 'calendar-b6e58',
  storageBucket: 'calendar-b6e58.appspot.com',
  messagingSenderId: '17624509751',
  appId: '1:17624509751:web:af4957313480e35e787eb2',
  measurementId: 'G-EVCKVNJEEJ',
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const requestForToken = (setToken) =>
  getToken(messaging, {
    vapidKey:
      'BFZrkb_M-4iOLZOpZ7FuKo-qN_5QZZQpJHD2f6-ujAjjZZQW4ceg5nYw9sUPIE6YotDj-5Awk4WP_lPcuVw5CHA',
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setToken(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      }
      // console.log(
      //   'No registration token available. Request permission to generate one.'
      // );
      // shows on the UI that permission is required
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      // console.log('receieve');
      resolve(payload);
    });
  });
