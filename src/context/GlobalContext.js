import { createContext } from 'react';

const GlobalContext = createContext({
    monthIdex: 0,
    setMonthIndex: (index) => {},
});

export default GlobalContext;
