import React from 'react';
import styled from 'styled-components';
import searchImg from '../../assets/images/search.png';

const Div = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

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
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function SearchEvent({ setSearching }) {
  return (
    <Div>
      <Button onClick={() => setSearching(true)}>
        <Img src={searchImg} />
      </Button>
    </Div>
  );
}

export default SearchEvent;
