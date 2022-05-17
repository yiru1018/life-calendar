import React from 'react';
import styled from 'styled-components';
import SearchEvent from './SearchEvent';
import Trash from './Trash';
import Avatar from './Avatar';
import Dropdownmenu from './Dropdownmenu';

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
      <Dropdownmenu />
      <Avatar />
    </Div>
  );
}

export default HeaderRight;
