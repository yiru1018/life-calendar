import React from 'react';
import styled from 'styled-components';
import CreateEvent from './CreateEvent';
import SmallCalender from './SmallCalender';

const Div = styled.div`
  flex: 0 0 256px;
`;

function Sidebar() {
  return (
    <Div>
      <CreateEvent />
      <SmallCalender />
    </Div>
  );
}

export default Sidebar;
