import React from 'react';
import styled from 'styled-components';
import sidebarBtnImg from '../../assets/images/sidebar-btn.png';

const Div = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function SidebarBtn() {
  return (
    <Div>
      <Button src={sidebarBtnImg}>
        <Img src={sidebarBtnImg} />
      </Button>
    </Div>
  );
}

export default SidebarBtn;
