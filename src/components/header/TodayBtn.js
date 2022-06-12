import React, { useContext } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  margin-right: 10px;
  margin-left: 50px;
  @media screen and (max-width: 621px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 515px) {
    display: none;
  }
`;

const Today = styled.button`
  font-size: 14px;
  color: #3c4043;
  background-color: white;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  width: 52px;
  height: 34px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;
function TodayBtn() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };
  return (
    <Div>
      <Today onClick={handleReset}>今天</Today>
    </Div>
  );
}

export default TodayBtn;
