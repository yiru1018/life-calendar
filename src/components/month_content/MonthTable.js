import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Month from './Month';
import { getMonth } from '../../getMonth';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  flex: 1 1 auto;
  height: 100%;
  position: relative;
`;

function MonthTable() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <Div>
      <Month month={currentMonth} />
    </Div>
  );
}

export default MonthTable;
