import React from 'react';
import styled from 'styled-components';
import DescImg from '../../assets/images/multiline-text.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 20px 0px;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

const Underline = styled.span`
  background-color: #9649c9;
  position: absolute;
  width: 250px;
  height: 1.5px;
  top: 63px;
  left: 50px;
  transition: all 0.5s linear;
  transform: scale(0, 1);
`;

const Input = styled.input`
  width: 280px;
  border-bottom: 1px solid #ccc;
  color: #555;
  font-size: 14px;
  /* margin: 10px 40px; */
  /* &:focus ~ ${Underline} {
    transform: scale(1);
  } */
`;

function Description({ description, setDescription }) {
  return (
    <Div>
      <Img src={DescImg} />
      <Input
        type="text"
        name="description"
        placeholder="新增說明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Div>
  );
}

export default Description;
