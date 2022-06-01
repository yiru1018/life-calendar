import { createContext } from 'react';

const GlobalContext = createContext({
  monthIdex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  bigCalendarSlcDay: null,
  setBigCalendarSlcDay: () => {},
  fromCreateBtn: null,
  setFromCreateBtn: () => {},
  eventStartDay: null,
  setEventStartDay: () => {},
  eventEndDay: null,
  setEventEndDay: () => {},
  events: null,
  setEvents: () => {},
  user: null,
  setUser: () => {},
});

export default GlobalContext;
