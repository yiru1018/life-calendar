import React from 'react';
import styled from 'styled-components';
import trashImg from '../../assets/images/trash.png';

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  margin: 0px 5px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Trash() {
  return (
    <Button>
      <Img src={trashImg} />
    </Button>
  );
}

export default Trash;
