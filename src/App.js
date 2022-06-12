import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Notify from './components/Notify/Notify';
import LandingPage from './components/LandingPage';

const Div = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Div>
      <Notify />
      <Router>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </Div>
  );
}

export default App;
