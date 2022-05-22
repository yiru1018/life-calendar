import React, { useContext } from 'react';
import styled from 'styled-components';
import createBtnImg from '../../assets/images/create-btn.png';
import downBtnImg from '../../assets/images/down.png';
import GlobalContext from '../../context/GlobalContext';

const Button = styled.button`
  width: 130px;
  height: 48px;
  background-color: #fff;
  border: 1px solid #e8eaed;
  border-radius: 50px;
  color: #3c4043;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 15px 0px 10px 10px;
  box-shadow: 1px 2px 0px #dadce0;
  cursor: pointer;
  transform: perspective(1px);
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;
  &:hover {
    box-shadow: 0px 5px 8px 2px #cccecf;
    background-color: #f3e3fa;
  }
`;
const CreateImg = styled.img`
  width: 36px;
  height: 36px;
`;
const DownImg = styled.img`
  width: 7px;
  height: 5px;
  margin-top: 3px;
`;
function CreateEvent() {
  const { setShowEventModal, setFromCreateBtn } = useContext(GlobalContext);
  return (
    <div>
      <Button
        onClick={() => {
          setShowEventModal(true);
          setFromCreateBtn(true);
        }}
      >
        <CreateImg src={createBtnImg} />
        <p>建立</p>
        <DownImg src={downBtnImg} />
      </Button>
    </div>
  );
}

export default CreateEvent;
