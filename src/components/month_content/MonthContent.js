import React from 'react';
import styled from 'styled-components';
import MonthTable from './MonthTable';
import Sidebar from '../sidebar/Sidebar';

const Div = styled.div`
  display: flex;
  flex-grow: 1;
`;

function MonthContent() {
  return (
    <Div>
      <Sidebar />
      <MonthTable />
    </Div>
  );
}

export default MonthContent;
