import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { onAuthStateChanged } from 'firebase/auth';
import GlobalContext from './GlobalContext';
import { auth } from '../../firebase-config';

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [bigCalendarSlcDay, setBigCalendarSlcDay] = useState(dayjs());
  const [fromCreateBtn, setFromCreateBtn] = useState(false);
  const [eventStartDay, setEventStartDay] = useState(dayjs());
  const [eventEndDay, setEventEndDay] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});

  // click date on small calendar change big calendar to that month
  useEffect(() => {
    if (smallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth]);

  const result = fromCreateBtn ? daySelected : bigCalendarSlcDay;
  useEffect(() => {
    setEventStartDay(result);
  }, [result]);
  useEffect(() => {
    setEventEndDay(result);
  }, [result]);

  // get user data
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    // console.log(currentUser);
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        showEditEvent,
        setShowEditEvent,
        bigCalendarSlcDay,
        setBigCalendarSlcDay,
        fromCreateBtn,
        setFromCreateBtn,
        eventStartDay,
        setEventStartDay,
        eventEndDay,
        setEventEndDay,
        events,
        setEvents,
        user,
        setUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
