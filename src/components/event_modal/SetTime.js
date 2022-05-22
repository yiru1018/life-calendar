import React, { useContext } from 'react';
import styled from 'styled-components';
import clockImg from '../../assets/images/clock.png';
import GlobalContext from '../../context/GlobalContext';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

const Dates = styled.div`
  width: 280px;
  height: 48px;
  border-radius: 3px;
  padding: 5px;
  color: #3c4043;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

const Period = styled.div`
  display: flex;
`;

const Date = styled.div`
  border-bottom: 1px solid transparent;
  &:hover {
    transition: border-bottom-color 100ms linear;
    border-bottom: 1px solid #70757a;
  }
`;

const NoRepeat = styled.div`
  font-size: 12px;
  color: #70757a;
`;

const AddTimeBtn = styled.button`
  font-size: 12px;
  color: #3c4043;
  background-color: white;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  width: 65px;
  height: 26px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

function SetTime() {
  const { daySelected, bigCalendarSlcDay, fromCreateBtn } =
    useContext(GlobalContext);

  const showDay = () => {
    const week = {
      0: '日',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
    };
    const smallCalendarDay = `${daySelected.format('M[月]D[日]')}（星期${
      week[daySelected.format('d')]
    }）`;
    const bigCalendarDay = `${bigCalendarSlcDay.format('M[月]D[日]')}（星期${
      week[bigCalendarSlcDay.format('d')]
    }）`;
    const result = fromCreateBtn ? smallCalendarDay : bigCalendarDay;
    return result;
  };

  return (
    <Div>
      <Img src={clockImg} />
      <Dates>
        <Period>
          <Date className="start">{showDay()}</Date>
          &nbsp;–&nbsp;
          <Date className="end">{showDay()}</Date>
        </Period>
        <NoRepeat>不重複</NoRepeat>
      </Dates>
      <AddTimeBtn>新增時間</AddTimeBtn>
    </Div>
  );
}

export default SetTime;
