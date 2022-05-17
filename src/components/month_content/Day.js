import React, { useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

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
`;

const Date = styled.p`
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
        width: 30px;
        height: 18px;
        border-radius: 45%;
    `}
    ${(props) => props.month !== dayjs().format('M') && 'color:#70757a;'}
`;

function Day({ day, rowIdx }) {
  const showDate =
    day.format('D') === '1'
      ? `${day.format('M')}月${day.format('D')}日`
      : day.format('D');

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
    <Div>
      <Header>
        {rowIdx === 0 && <Week>{`週${week[day.format('ddd')]}`}</Week>}
        <Date
          currentdate={day.format('D-M-YY')}
          firstDate={day.format('D')}
          month={day.format('M')}
          rowIdx={rowIdx}
        >
          {showDate}
        </Date>
      </Header>
    </Div>
  );
}

export default Day;
