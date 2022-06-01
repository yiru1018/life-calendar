import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Header from './header/Header';
import MonthContent from './month_content/MonthContent';
import GlobalStyle from '../assets/styles/GlobalStyle';
import { auth } from '../../firebase-config';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null) {
        navigate('/Login');
      }
    });
  }, []);

  return (
    <Div>
      <GlobalStyle />
      <Header />
      <MonthContent />
    </Div>
  );
}

export default HomePage;
