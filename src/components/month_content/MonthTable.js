import React, { useState } from 'react';
import styled from 'styled-components';
import Month from './Month';
import { getMonth } from '../../getMonth';

const Div = styled.div`
  flex-grow: 1;
`;

function MonthTable() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <Div>
      <Month month={currentMonth} />
    </Div>
  );
}

export default MonthTable;
