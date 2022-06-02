import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Month from './Month';
import getMonth from '../../utils/getMonth';
import GlobalContext from '../../context/GlobalContext';
import EventModal from '../event_modal/EventModal';
import { db } from '../../../firebase-config';
import getEvents from '../../utils/getEvents';
import EditEvent from '../events/EditEvent';

const Div = styled.div`
  flex: 1 1 auto;
  height: 100%;
  position: relative;
  border-left: 1px solid #e8eaed;
`;

function MonthTable() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, events, setEvents, user } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // const eventsCollectionRef = collection(db, 'event');
  // const getEvents = async () => {
  //   const data = await getDocs(eventsCollectionRef);
  //   setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  useEffect(() => {
    getEvents(setEvents);
  }, []);
  // console.log(events);
  const userEvent = events.filter((event) => event.user === user.email);
  // console.log('de', userEvent);
  // console.log('new', new Date(2022, 6, 1));
  // userEvent.map((event) => console.log(event.start.toDate().toTimeString()));

  return (
    <Div>
      {showEventModal && <EventModal />}
      <Month month={currentMonth} />
    </Div>
  );
}

export default MonthTable;
