import React, { useState } from 'react';
import styled from 'styled-components';
import SearchHeader from './SearchHeader';
import HeaderLeft from './HeaderLeft';
import CalendarHeader from './CalendarHeader';
import HeaderRight from './HeaderRight';

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 0 0 64px;
  padding: 8px;
  border-bottom: 1px solid #e8eaed;
  position: relative;
`;

function Header() {
  const [searching, setSearching] = useState(false);
  return (
    <Div>
      {searching && <SearchHeader setSearching={setSearching} />}
      {!searching && (
        <>
          <HeaderLeft />
          <CalendarHeader />
        </>
      )}
      <HeaderRight searching={searching} setSearching={setSearching} />
    </Div>
  );
}

export default Header;
