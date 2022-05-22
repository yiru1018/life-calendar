import dayjs from 'dayjs';
import React, { useContext } from 'react';
import styled from 'styled-components';
import leftImg from '../../assets/images/arrow-left.png';
import rightImg from '../../assets/images/arrow-right.png';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  color: #3c4043;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &.prev {
    margin-right: 5px;
  }
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

const P = styled.p`
  margin-left: 15px;
  font-size: 22px;
`;

function MonthController() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  return (
    <Div>
      <Button className="prev" onClick={handlePrevMonth}>
        <Img src={leftImg} />
      </Button>
      <Button onClick={handleNextMonth}>
        <Img src={rightImg} />
      </Button>
      <P>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('YYYY[年]M[月]')}
      </P>
    </Div>
  );
}

export default MonthController;
