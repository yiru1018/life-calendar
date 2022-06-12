import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import demo from '../assets/images/demo.png';
import small from '../assets/images/small.png';

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #9fa4c4;
  background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  color: #ccc;
  padding: 10px;
  h1 {
    font-size: 40px;
  }
`;

const Img = styled.img`
  margin: 30px;
  max-width: 70%;
  height: 400px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  &.small {
    display: none;
  }
  @media screen and (max-width: 600px) {
    &.big {
      display: none;
    }
    &.small {
      display: flex;
    }
  }
`;

const Button = styled.button`
  background-color: #ccc;
  color: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  width: 200px;
  height: 45px;
  border-radius: 3px;
  cursor: pointer;
  p {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 16px;
    font-weight: bold;
    background-color: #9fa4c4;
    background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  }
`;

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Div>
      <GlobalStyle />
      <Background>
        <Text>
          <h1>Life Calendar</h1>
        </Text>
        <Text className="desc">
          <h2>規劃生活的好幫手</h2>
        </Text>

        <Img src={demo} className="big" />
        <Img src={small} className="small" />
        <Button onClick={() => navigate('/Login')}>
          <p>開始體驗</p>
        </Button>
      </Background>
    </Div>
  );
}

export default LandingPage;
