import { createContext } from 'react';

const GlobalContext = createContext({
  monthIdex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  bigCalendarSlcDay: null,
  setBigCalendarSlcDay: () => {},
  fromCreateBtn: null,
  setFromCreateBtn: () => {},
  smallCalendarDayClassName: null,
  setSmallCalendarDayClassName: () => {},
});

export default GlobalContext;
