import React from 'react';
import styled from 'styled-components';
import TodayBtn from './TodayBtn';
import MonthController from './MonthController';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

function CalendarHeader() {
  return (
    <Div>
      <TodayBtn />
      <MonthController />
    </Div>
  );
}

export default CalendarHeader;
