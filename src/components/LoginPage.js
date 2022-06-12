import React, { useState } from 'react';
import styled from 'styled-components';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import GlobalStyle from '../assets/styles/GlobalStyle';
import LogoImg from '../assets/images/icons8-albanian-lek-50.png';
import { auth } from '../../firebase-config';

const Background = styled.div`
  background-color: #9fa4c4;
  background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
`;

const EditDiv = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputDiv = styled.div`
  margin: 10px;
  &.password {
    position: relative;
  }
`;

const P = styled.p`
  color: #ccc;
  margin: 20px 0px 8px 0px;
  &.signup {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid #ccc;
  width: 300px;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  &::placeholder {
    color: #fff;
  }
  &.forget {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  margin: 20px 0px 0px 0px;
  background-color: #ccc;
  color: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  width: 300px;
  height: 36px;
  border-radius: 3px;
  cursor: pointer;
  p {
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 16px;
    font-weight: bold;
    background-color: #9fa4c4;
    background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  }
  &.google {
    background-color: transparent;
    border: 1px solid #ccc;
    color: #ccc;
  }
  &.forgot {
    position: absolute;
    top: 30px;
    right: 5px;
    width: 25px;
    height: 20px;
    line-height: 20px;
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
  }
  &.message {
    margin-top: 50px;
    width: 50px;
  }
`;

const SingupDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const MessageBox = styled.div`
  background-color: #9fa4c4;
  background-image: linear-gradient(315deg, #9fa4c4 0%, #9e768f 74%);
  width: 350px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border: 2px solid #ccc;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 10px;
  p {
    color: #fff;
    height: 30px;
    padding: 5px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

function LoginPage() {
  const [turnToSingnup, setTurnToSingnup] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('test123@gmail.com');
  const [loginPassword, setLoginPassword] = useState('123123');
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [forget, setForget] = useState(false);
  const [forgetEmail, setForgetEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) navigate('/HomePage');
  });
  // console.log(user.email);

  const register = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((res) => {
        // navigate('/');
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setRegisterEmail('');
        setRegisterPassword('');
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        navigate('/HomePage');
        // console.log(res);
      })
      .catch((error) => {
        setShowMessageBox(true);
        setMessage('信箱或密碼錯誤');
        console.log(error.message);
      })
      .finally(() => {
        setLoginEmail('');
        setLoginPassword('');
      });
  };

  const signInWithGoggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate('/HomePage');
        // console.log(res);
      })
      .catch((err) => {
        setMessage('信箱或密碼有誤 請重新輸入');
        setShowMessageBox(true);
        console.log(err.code);
      });
  };

  const forgetPassword = () => {
    sendPasswordResetEmail(auth, forgetEmail)
      .then(() => {
        setMessage('已發送信件至信箱，請按照信件說明重設密碼');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') setMessage('此為無效信箱');
        console.log(error.code);
      });
  };

  const handleMessageBoxBtnClick = () => {
    if (forget) {
      forgetPassword();
      setForget(false);
    } else {
      setShowMessageBox(false);
      setMessage('');
      setForgetEmail('');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Background>
        {showMessageBox && (
          <MessageBox>
            <div>
              <CloseIcon
                onClick={() => setShowMessageBox(false)}
                sx={{ color: '#ccc', cursor: 'pointer' }}
              />
            </div>
            {forget && (
              <Input
                type="text"
                placeholder="請輸入註冊信箱"
                id="forget"
                className="forget"
                value={forgetEmail}
                onChange={(e) => {
                  setForgetEmail(e.target.value);
                }}
              />
            )}
            {message && <p className="sentComfirm">{message}</p>}
            <Button className="message" onClick={handleMessageBoxBtnClick}>
              <p>確認</p>
            </Button>
          </MessageBox>
        )}
        <Logo src={LogoImg} />
        <EditDiv>
          <InputDiv>
            <P>信箱</P>
            <Input
              type="email"
              value={turnToSingnup ? registerEmail : loginEmail}
              onChange={(event) => {
                if (turnToSingnup) setRegisterEmail(event.target.value);
                else setLoginEmail(event.target.value);
              }}
            />
          </InputDiv>
          <InputDiv className="password">
            <P>密碼</P>
            <Input
              type="password"
              value={turnToSingnup ? registerPassword : loginPassword}
              onChange={(event) => {
                if (turnToSingnup) setRegisterPassword(event.target.value);
                else setLoginPassword(event.target.value);
              }}
            />
            {!turnToSingnup && (
              <Button
                className="forgot"
                onClick={() => {
                  setShowMessageBox(true);
                  setForget(true);
                }}
              >
                <p>?</p>
              </Button>
            )}
          </InputDiv>
          <Button onClick={turnToSingnup ? register : login}>
            <p>{turnToSingnup ? '註冊' : '登入'}</p>
          </Button>
          <SingupDiv>
            <P
              className="signup"
              onClick={() => setTurnToSingnup((prev) => !prev)}
            >
              {turnToSingnup ? '點此登入' : '點此註冊'}
            </P>
          </SingupDiv>
          <P>或</P>
          <Button className="google" onClick={signInWithGoggle}>
            使用 Google 帳戶登入
          </Button>
        </EditDiv>
      </Background>
    </>
  );
}

export default LoginPage;
