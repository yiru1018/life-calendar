import React from 'react';
import styled from 'styled-components';
import closeImg from '../../assets/images/close.png';
import editImg from '../../assets/images/edit.png';
import trahImg from '../../assets/images/trash1.png';

const CloseImg = styled.img`
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

function EditEvent() {
  return <div>EditEvent</div>;
}

export default EditEvent;
