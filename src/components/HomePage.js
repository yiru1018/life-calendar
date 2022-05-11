import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import MonthContent from './month_content/MonthContent';
import GlobalStyle from '../assets/styles/GlobalStyle';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function HomePage() {
  return (
    <Div>
      <GlobalStyle />
      <Header />
      <MonthContent />
    </Div>
  );
}

export default HomePage;
