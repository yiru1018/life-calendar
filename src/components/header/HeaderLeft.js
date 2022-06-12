import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Div = styled.div`
  display: flex;
  align-items: center;
`;

function HeaderLeft() {
  return (
    <Div>
      <Label />
    </Div>
  );
}

export default HeaderLeft;
