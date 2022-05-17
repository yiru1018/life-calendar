import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PopupModal from './components/popup_modal/PopupModal';

const Div = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popup" element={<PopupModal />} />
        </Routes>
      </Router>
    </Div>
  );
}

export default App;
