import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import GlobalContext from './GlobalContext';

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [bigCalendarSlcDay, setBigCalendarSlcDay] = useState(dayjs());
  const [fromCreateBtn, setFromCreateBtn] = useState(false);

  // click date on small calendar change big calendar to that month
  useEffect(() => {
    if (smallCalendarMonth !== null) setMonthIndex(smallCalendarMonth);
  }, [smallCalendarMonth]);

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
        bigCalendarSlcDay,
        setBigCalendarSlcDay,
        fromCreateBtn,
        setFromCreateBtn,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
