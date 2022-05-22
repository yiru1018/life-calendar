import React from 'react';
import styled from 'styled-components';
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import avatarImg from '../../assets/images/avatar.png';
import { auth } from '../../../firebase-config';

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &.prev {
    margin-right: 5px;
  }
  &:hover {
    background-color: #e8eaed;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Avatar() {
  const signInWithGoggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button onClick={signInWithGoggle}>
      <Img src={avatarImg} />
    </Button>
  );
}

export default Avatar;
