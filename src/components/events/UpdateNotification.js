import React from 'react';
import styled from 'styled-components';
import downImg from '../../assets/images/down.png';
import bellImg from '../../assets/images/bell.png';
import closeImg from '../../assets/images/close.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 20px 0px;
  color: #70757a;
  font-size: 14px;
`;

const BellImg = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

const CreateAlertBtn = styled.button`
  color: #70757a;
  background-color: #fff;
  font-size: 14px;
  border-radius: 3px;
  padding: 4px 3px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

const CloseImg = styled.img`
  display: none;
  position: absolute;
  right: 20px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dadce0;
  }
`;

const CreateAlertDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${CloseImg} {
    display: inline-block;
  }
`;

const InputNumber = styled.input.attrs({
  type: 'number',
  min: '1',
  placeholder: '1',
})`
  background-color: #e8eaed;
  text-align: center;
  font-size: 14px;
  height: 25px;
  width: 48px;
  &:out-of-range {
    background-color: #fce8e6;
  }
`;

const TimeUnitSelector = styled.select`
  background-color: #e8eaed;
  width: 48px;
  height: 25px;
  background-image: url(${downImg});
  background-repeat: no-repeat;
  background-position: right 3px top 50%, 0 0;
  background-size: 5px 3px, 100%;
  color: #70757a;
  font-size: 14px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  cursor: pointer;
  margin: 0px 4px;
  padding-left: 3px;
  option {
    background: #fff;
  }
`;

function UpdateNotification({
  notify,
  setNotify,
  createNotify,
  setCreateNotify,
}) {
  const maxNumber = {
    minute: '120',
    hour: '24',
    day: '28',
    week: '4',
  };

  return (
    <Div>
      <BellImg src={bellImg} />
      {!createNotify && (
        <CreateAlertBtn onClick={() => setCreateNotify(true)}>
          新增通知
        </CreateAlertBtn>
      )}
      {createNotify && (
        <CreateAlertDiv>
          <InputNumber
            max={maxNumber[notify.timeUnit]}
            value={notify.number}
            onChange={(e) => setNotify({ ...notify, number: e.target.value })}
          />
          <TimeUnitSelector
            value={notify.timeUnit}
            onChange={(e) => setNotify({ ...notify, timeUnit: e.target.value })}
          >
            <option value="分鐘">分鐘</option>
            <option value="小時">小時</option>
            <option value="天">天</option>
            <option value="週">週</option>
          </TimeUnitSelector>
          <p>前</p>
          <CloseImg src={closeImg} onClick={() => setCreateNotify(false)} />
        </CreateAlertDiv>
      )}
    </Div>
  );
}

export default UpdateNotification;
