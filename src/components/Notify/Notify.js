import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener } from '../../../firebase-config';

function ToastDisplay({ notification }) {
  return (
    <div>
      <p>
        <b>{notification?.title}</b>
      </p>
      <p>{notification?.body}</p>
    </div>
  );
}

function Notification() {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const notify = () => toast(<ToastDisplay notification={notification} />);

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
      console.log('Received');
    })
    .catch((err) => console.log('failed: ', err));

  return <Toaster position="bottom-center" reverseOrder={false} />;
}

export default Notification;
