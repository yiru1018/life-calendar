import React from 'react';
import styled from 'styled-components';
import labelImg from '../../assets/images/label-icon.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #5f6368;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

function Label() {
  return (
    <Div>
      <Logo src={labelImg} />
      日曆
    </Div>
  );
}

export default Label;
