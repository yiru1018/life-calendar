import GlobalContext from './GlobalContext';
import { useState } from 'react';
import dayjs from 'dayjs';

function ContextWrapper() {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
}

export default ContextWrapper;
