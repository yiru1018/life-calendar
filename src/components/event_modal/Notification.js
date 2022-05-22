import React, { useState } from 'react';
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
  min: '0',
  max: '28',
  placeholder: '1',
})`
  background-color: #e8eaed;
  text-align: center;
  font-size: 14px;
  height: 25px;
  width: 48px;
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

function Notification() {
  const [createAlert, setCreateAlert] = useState(false);
  return (
    <Div>
      <BellImg src={bellImg} />
      {!createAlert && (
        <CreateAlertBtn onClick={() => setCreateAlert(true)}>
          新增通知
        </CreateAlertBtn>
      )}
      {createAlert && (
        <CreateAlertDiv>
          <InputNumber />
          <TimeUnitSelector>
            <option value="minute">分鐘</option>
            <option value="hour">小時</option>
            <option value="day">天</option>
            <option value="week">週</option>
          </TimeUnitSelector>
          <p>前</p>
          <CloseImg src={closeImg} onClick={() => setCreateAlert(false)} />
        </CreateAlertDiv>
      )}
    </Div>
  );
}

export default Notification;
