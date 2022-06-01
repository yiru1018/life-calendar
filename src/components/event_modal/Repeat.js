import React from 'react';
import styled from 'styled-components';
import repeatImg from '../../assets/images/repeat.png';
import downImg from '../../assets/images/down.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 20px 0px;
  color: #70757a;
  font-size: 14px;
`;

const RepeatImg = styled.img`
  margin-right: 10px;
  width: 22px;
  height: 22px;
`;

const RepeatSelector = styled.select`
  &:hover {
    background-color: #e8eaed;
  }
  width: 74px;
  height: 36px;
  background-image: url(${downImg});
  background-repeat: no-repeat;
  background-position: right 10px top 50%, 0 0;
  background-size: 6px 4px, 100%;
  color: #70757a;
  font-size: 14px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  cursor: pointer;
  padding-left: 10px;
  option {
    background: #fff;
  }
`;

function Repeat() {
  return (
    <Div>
      <RepeatImg src={repeatImg} />
      <RepeatSelector>
        <option value="notRepeat">不重複</option>
      </RepeatSelector>
    </Div>
  );
}

export default Repeat;
