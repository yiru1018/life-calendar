import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import closeImg from '../../assets/images/close.png';
import SetTime from './SetTime';
import Alert from './Alert';
import Description from './Description';
import Color from './Color';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import GlobalContext from '../../context/GlobalContext';

const Underline = styled.span`
  background-color: #9649c9;
  position: absolute;
  width: 250px;
  height: 1.5px;
  top: 62px;
  left: 40px;
  transition: all 0.2s linear;
  transform: scale(0, 1);
`;

const Div = styled.div`
  width: 300px;
  height: 340px;
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
  height: 22px;
  background-color: #e8eaed;
  border-radius: 5px 5px 0px 0px;
  margin-top: 1.5px;
  position: relative;
  display: flex;
  align-items: end;
`;

const Img = styled.img`
  margin: 0px 5px 2px auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: #dadce0;
  }
`;

const Input = styled.input`
  width: 250px;
  border-bottom: 1px solid #ccc;
  color: #555;
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
  width: 50px;
  height: 25px;
  color: #fff;
  font-size: 10px;
  background-color: #9649c9;
  border-radius: 3px;
`;

function EventModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <Div>
      <GlobalStyle />
      <ClosingTag onClick={() => setShowEventModal(false)}>
        <Img src={closeImg} />
      </ClosingTag>
      <Input
        placeholder="新增標題"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Underline />
      <ExceptTitle>
        <SetTime />
        <Alert />
        <Description
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Color />
        <SaveDiv>
          <Button>儲存</Button>
        </SaveDiv>
      </ExceptTitle>
    </Div>
  );
}

export default EventModal;
