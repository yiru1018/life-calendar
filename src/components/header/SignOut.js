import React from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase-config';

const Btn = styled.button`
  margin-left: 8px;
  font-size: 14px;
  color: #3c4043;
  background-color: white;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  width: 52px;
  height: 34px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
`;

function SignOut() {
  const logOut = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };
  return <Btn onClick={logOut}>登出</Btn>;
}

export default SignOut;
