import React, { createContext } from 'react';

const GlobalContext = createContext({
  monthIdex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
});

export default GlobalContext;
