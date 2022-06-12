const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendNotification = functions.pubsub
  .schedule('* * * * *')
  .onRun(async (context) => {
    const database = admin.firestore();
    const currentTime = admin.firestore.Timestamp.now();
    const data = await database
      .collection('event')
      .where('notifySent', '==', false)
      .where('notifyTime', '<=', currentTime)
      .get();
    data.forEach(async (snapshop) => {
      const { event, token, notify } = snapshop.data();
      sendMessage(event, token, notify);
      console.log(snapshop.data());
      await snapshop.ref.update({ notifySent: true });
    });
    function sendMessage(event, token, notify) {
      const payload = {
        token: token,
        notification: { title: event, body: `${notify}後 即將到來` },
        data: { body: `${notify}後 即將到來` },
      };
      admin
        .messaging()
        .send(payload)
        .then((res) => console.log('success').catch((err) => console.log(err)));
    }
    return console.log('end of send');
  });
