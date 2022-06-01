import React from 'react';
import styled from 'styled-components';
import SearchEvent from './SearchEvent';
import Trash from './Trash';
import Avatar from './Avatar';
import SignOut from './SignOut';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

function HeaderRight() {
  return (
    <Div>
      <SearchEvent />
      <Trash />
      <Avatar />
      <SignOut />
    </Div>
  );
}

export default HeaderRight;
