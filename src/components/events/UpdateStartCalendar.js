import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import getMonth from '../../utils/getMonth';
import leftImg from '../../assets/images/arrow-left.png';
import rightImg from '../../assets/images/arrow-right.png';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  color: #3c4043;
  padding: 0px 14px 16px 19px;
  width: 283px;
  height: 244px;
  background-color: #fff;
  position: absolute;
  z-index: 5;
  top: 50px;
  left: 0px;
  box-shadow: 0px 5px 8px 2px #cccecf;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  margin-right: 8px;
  cursor: pointer;
  &.prev {
    margin-right: 10px;
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

const DateTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 10px;
  margin-top: 16px;
`;

const Week = styled.p`
  color: #70757a;
  padding-left: 7px;
`;

const Day = styled.p`
  text-align: center;
  line-height: 24px;
  width: 24px;
  height: 24px;
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
  &.nowactive {
    background-color: #6a3da1;
  }
  &.notThisMonth {
    color: #70757a;
  }
`;

function UpdateStartCalendar({
  showStartCalendar,
  setShowStartCalendar,
  eventStartDate,
  setEventStartDate,
}) {
  // click outside of calendar to close it
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowStartCalendar(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showStartCalendar]);

  const week = ['日', '一', '二', '三', '四', '五', '六'];

  const [currentMonth, setCurrentMonth] = useState(getMonth(undefined, 6));

  // only control small calendar month
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx, 6));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth } = useContext(GlobalContext);

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
    const slcDay = dayjs(eventStartDate).format(format);

    const currIdxMonth = dayjs(
      new Date(dayjs().year(), currentMonthIdx)
    ).format('M');
    if (currIdxMonth !== day.format('M') && slcDay === currDay)
      return 'notThisMonth active';
    // if (nowDay === currDay && slcDay === currDay) return 'now nowactive';
    if (currIdxMonth !== day.format('M')) return 'notThisMonth';
    if (nowDay === currDay) return 'now';
    if (slcDay === currDay) return 'active';
    return '';
  };

  const getCurrentMonthIdx = (day) => {
    const currMonth = day.format('M');
    const currIdxMonth = dayjs(
      new Date(dayjs().year(), currentMonthIdx)
    ).format('M');
    if (currIdxMonth > currMonth) setSmallCalendarMonth(currentMonthIdx - 1);
    if (currIdxMonth < currMonth) setSmallCalendarMonth(currentMonthIdx + 1);
    if (currIdxMonth === currMonth) setSmallCalendarMonth(currentMonthIdx);
  };

  return (
    <Div ref={ref}>
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
                className={getClassName(day)}
                onClick={() => {
                  setEventStartDate(day);
                  setShowStartCalendar(false);
                  // getCurrentMonthIdx(day);
                }}
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

export default UpdateStartCalendar;
