import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import { getMonth } from '../../getMonth';
import leftImg from '../../assets/images/arrow-left.png';
import rightImg from '../../assets/images/arrow-right.png';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  color: #3c4043;
  padding: 0px 14px 16px 19px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  font-size: 10px;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
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
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DateTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 8px;
  margin-top: 5px;
`;

const Week = styled.p`
  color: #70757a;
  padding-left: 5px;
`;

const Day = styled.p`
  text-align: center;
  line-height: 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  &.active {
    background-color: #dac6f7;
    color: #7c3da6;
  }
  &.now {
    color: white;
    background-color: #9649c9;
    &:hover {
      background-color: #7c3da6;
    }
  }
  &.notThisMonth {
    color: #70757a;
  }
`;

function SmallCalender() {
  const week = ['日', '一', '二', '三', '四', '五', '六'];

  const [currentMonth, setCurrentMonth] = useState(getMonth(undefined, 6));

  // only control small calendar month
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx, 6));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  // control small calendar month via Header's month controller
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  const getClassName = (day) => {
    const format = 'D-M-YYYY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format('D-M-YYYY');
    if (
      dayjs(new Date(dayjs().year(), currentMonthIdx)).format('M') !==
      day.format('M')
    )
      return 'notThisMonth';
    if (nowDay === currDay) return 'now';
    if (slcDay === currDay) return 'active';
    return '';
  };

  return (
    <Div>
      <Header>
        <p>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
            'YYYY[年]M[月]'
          )}
        </p>
        <div>
          <Button className="prev" onClick={handlePrevMonth}>
            <Img src={leftImg} />
          </Button>
          <Button onClick={handleNextMonth}>
            <Img src={rightImg} />
          </Button>
        </div>
      </Header>
      <DateTable>
        {week.map((day) => (
          <Week key={v4()}>{day}</Week>
        ))}
        {currentMonth.map((row) => (
          <React.Fragment key={v4()}>
            {row.map((day) => (
              <Day
                key={v4()}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={getClassName(day)}
              >
                {day.format('D')}
              </Day>
            ))}
          </React.Fragment>
        ))}
      </DateTable>
    </Div>
  );
}

export default SmallCalender;
