import React from 'react';
import styled from 'styled-components';
import searchImg from '../../assets/images/search.png';

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function SearchEvent() {
  return (
    <Button>
      <Img src={searchImg} />
    </Button>
  );
}

export default SearchEvent;
