import React, { useContext } from 'react';
import styled from 'styled-components';
import createBtnImg from '../../assets/images/create-btn.png';
import downBtnImg from '../../assets/images/down.png';
import GlobalContext from '../../context/GlobalContext';

const Button = styled.button`
  width: 90px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #e8eaed;
  border-radius: 50px;
  color: #3c4043;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 15px 0px 10px 5px;
  box-shadow: 0px 0.8px 0px #dadce0;
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
  width: 20px;
  height: 20px;
`;
const DownImg = styled.img`
  width: 5px;
  height: 3px;
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
