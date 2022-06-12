import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import avatarImg from '../../assets/images/avatar.png';
import GlobalContext from '../../context/GlobalContext';

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  margin: 0px 5px 0px 5px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function Avatar() {
  const { user } = useContext(GlobalContext);
  const [photo, setPhoto] = useState('');
  // console.log(user);
  useEffect(() => {
    if (user) setPhoto(user.photoURL);
  }, [user]);

  return (
    <Button>
      <Img src={!photo ? avatarImg : photo} />
    </Button>
  );
}

export default Avatar;
