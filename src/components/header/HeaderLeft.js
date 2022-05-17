import React from 'react';
import styled from 'styled-components';
import SidebarBtn from './SidebarBtn';
import Label from './Label';

const Div = styled.div`
  display: flex;
  align-items: center;
`;

function HeaderLeft() {
  return (
    <Div>
      <SidebarBtn />
      <Label />
    </Div>
  );
}

export default HeaderLeft;
