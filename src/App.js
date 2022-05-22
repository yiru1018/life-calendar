import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventModal from './components/event_modal/EventModal';

const Div = styled.div`
  height: 100%;
`;

function App() {
  return (
    <Div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popup" element={<EventModal />} />
        </Routes>
      </Router>
    </Div>
  );
}

export default App;
