import React from 'react';
import styled from 'styled-components';
import labelImg from '../../assets/images/label-icon.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #5f6368;
  width: 100px;
  @media screen and (max-width: 515px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

function Label() {
  return (
    <Div>
      <Logo src={labelImg} />
      月曆
    </Div>
  );
}

export default Label;
