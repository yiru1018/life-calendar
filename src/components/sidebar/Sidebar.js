import React from 'react';
import styled from 'styled-components';
import CreateEvent from './CreateEvent';
import SmallCalender from './SmallCalender';

const Div = styled.div`
  flex: 0 0 256px;

  @media screen and (max-width: 600px) {
    display: none;
  }
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
