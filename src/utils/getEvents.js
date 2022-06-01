import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase-config';

const eventsCollectionRef = collection(db, 'event');
const q = query(eventsCollectionRef, orderBy('start', 'asc'));
const getEvents = async (setEvents) => {
  const data = await getDocs(q);
  setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

export default getEvents;
