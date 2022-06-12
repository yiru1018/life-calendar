// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyCGzDjguFU3eWNhImvSVxvXFXfvQ0d4X1E',
  authDomain: 'calendar-b6e58.firebaseapp.com',
  projectId: 'calendar-b6e58',
  storageBucket: 'calendar-b6e58.appspot.com',
  messagingSenderId: '17624509751',
  appId: '1:17624509751:web:af4957313480e35e787eb2',
  measurementId: 'G-EVCKVNJEEJ',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
