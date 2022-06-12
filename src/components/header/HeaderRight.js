import React from 'react';
import styled from 'styled-components';
import SearchEvent from './SearchEvent';
import Avatar from './Avatar';
import SignOut from './SignOut';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

function HeaderRight({ searching, setSearching }) {
  return (
    <Div>
      {!searching && <SearchEvent setSearching={setSearching} />}
      <Avatar />
      <SignOut />
    </Div>
  );
}

export default HeaderRight;
