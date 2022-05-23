import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import closeImg from '../../assets/images/close.png';
import SetTime from './SetTime';
import Notification from './Notification';
import Description from './Description';
import Color from './Color';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import GlobalContext from '../../context/GlobalContext';

const Underline = styled.span`
  background-color: #9649c9;
  position: absolute;
  width: 364px;
  height: 1.5px;
  top: 89px;
  left: 40px;
  transition: all 0.3s linear;
  transform: scale(0, 1);
`;

const Div = styled.div`
  width: 448px;
  height: 400px;
  box-shadow: 0px 5px 8px 2px #cccecf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  background-color: #fff;
  position: absolute;
  z-index: 5;
  top: 10%;
  left: 20%;
`;

const ExceptTitle = styled.div`
  padding: 5px 10px 5px 15px;
`;

const ClosingTag = styled.div`
  width: 100%;
  height: 36px;
  background-color: #e8eaed;
  border-radius: 5px 5px 0px 0px;
  margin-top: 1.5px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin: 0px 5px 2px auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dadce0;
  }
`;

const TitleInput = styled.input`
  width: 364px;
  border-bottom: 1px solid #ccc;
  color: #555;
  font-size: 22px;
  margin: 20px 40px 10px 40px;
  &:focus ~ ${Underline} {
    transform: scale(1);
  }
`;

const SaveDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 76px;
  height: 36px;
  color: #fff;
  font-size: 14px;
  background-color: #9649c9;
  border-radius: 3px;
`;

function EventModal() {
  const [title, setTitle] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [notifyTime, setNotifyTime] = useState('');
  const [description, setDescription] = useState('');
  const [divColor, setDivColor] = useState('rgb(121, 134, 203)');

  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <Div>
      <GlobalStyle />
      <ClosingTag onClick={() => setShowEventModal(false)}>
        <Img src={closeImg} />
      </ClosingTag>
      <TitleInput
        autoFocus
        placeholder="新增標題"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Underline />
      <ExceptTitle>
        <SetTime
          // startDay={startDay}
          setStartDay={setStartDay}
          // endDay={endDay}
          setEndDay={setEndDay}
        />
        <Notification setNotifyTime={setNotifyTime} />
        <Description
          description={description}
          setDescription={setDescription}
        />
        <Color divColor={divColor} setDivColor={setDivColor} />
        <SaveDiv>
          <Button>儲存</Button>
        </SaveDiv>
      </ExceptTitle>
    </Div>
  );
}

export default EventModal;
