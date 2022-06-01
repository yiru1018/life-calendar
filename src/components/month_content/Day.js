import React, { useContext } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { v4 } from 'uuid';
import GlobalContext from '../../context/GlobalContext';
import Event from '../events/Event';

const Div = styled.div`
  border-bottom: 1px solid #e8eaed;
  border-right: 1px solid #e8eaed;
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
  line-height: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 3px 0px 2px 0px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  ${(props) => props.month !== props.bigMonth && 'color:#70757a;'}
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
        height: 20px;
        border-radius: 45%;
        margin-top: 7px;
    `}
`;

const EventDiv = styled.div`
  /* height: 22px; */
  /* background-color: red; */
  width: 100%;
`;

function Day({ day, rowIdx }) {
  const {
    monthIndex,
    setBigCalendarSlcDay,
    setShowEventModal,
    setFromCreateBtn,
    events,
    user,
  } = useContext(GlobalContext);

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
  // console.log(new Date(day).toDateString());
  const userEvent = events.filter((event) => event.user === user.email);
  // console.log('de', userEvent);
  // events.map((event) => console.log(event.color));
  // console.log(events[0]);

  return (
    <Div
      onClick={() => {
        setBigCalendarSlcDay(day);
        setShowEventModal(true);
        setFromCreateBtn(false);
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
      <EventDiv>
        {userEvent.map(
          (event) =>
            event.start.toDate().toDateString() ===
              new Date(day).toDateString() && (
              <Event
                key={v4()}
                title={event.event}
                desc={event.desc}
                color={event.color}
                id={event.id}
              />
            )
        )}
      </EventDiv>
    </Div>
  );
}

export default Day;
