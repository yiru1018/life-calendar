import React, { useContext } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  border: 0.6px solid #e8eaed;
  font-size: 9px;
  color: #3c4043;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Week = styled.p`
  color: #70757a;
  font-size: 11px;
`;

const SingleDay = styled.p`
  font-size: 12px;
  line-height: 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin: 3px 0px 2px 0px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  ${(props) =>
    props.currentdate === dayjs().format('D-M-YY') &&
    `
        color:white;
        background-color:#9649c9;
        &:hover {
        background-color: #7c3da6;
    }
        `}
  ${(props) =>
    props.firstDate === '1' &&
    `
        line-height: 20px;
        width: 45px;
        height: 18px;
        border-radius: 45%;
    `}
    ${(props) => props.month !== props.bigMonth && 'color:#70757a;'}
`;

const EventDiv = styled.div``;

function Day({ day, rowIdx }) {
  const { monthIndex, setBigCalendarSlcDay, setShowEventModal } =
    useContext(GlobalContext);

  const showDate =
    day.format('D') === '1' ? day.format('M[月]D[日]') : day.format('D');

  const week = {
    Sun: '日',
    Mon: '一',
    Tue: '二',
    Wed: '三',
    Thu: '四',
    Fri: '五',
    Sat: '六',
  };

  return (
    <Div
      onClick={() => {
        setBigCalendarSlcDay(day);
        setShowEventModal(true);
      }}
    >
      <Header>
        {rowIdx === 0 && <Week>{`週${week[day.format('ddd')]}`}</Week>}
        <SingleDay
          currentdate={day.format('D-M-YY')}
          firstDate={day.format('D')}
          month={day.format('M')}
          bigMonth={dayjs(new Date(dayjs().year(), monthIndex)).format('M')}
          rowIdx={rowIdx}
        >
          {showDate}
        </SingleDay>
      </Header>
      <EventDiv />
    </Div>
  );
}

export default Day;
