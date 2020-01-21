import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import bg_image from 'img/signup_bg.jpg';
import fb_logo from 'img/facebook.svg';
import kakao_logo from 'img/kakao-chat-img.png';
import { URL } from 'config';

const { Kakao } = window;
Kakao.init('11d14372d97f80837f341cfc72a864fe');

const SignUp = ({ history }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    mobile_number: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const onChange = e => {
    const { name, value } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: value,
    };

    setUserInfo(newInfo);
  };

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post(`${URL}/user/signup`, userInfo)
      .then(setShowSuccess(true))
      .then(
        setTimeout(() => {
          history.push('/signin');
        }, 2000),
      )
      .catch(error => console.log(error));
  };

  const handleKakao = () => {
    // Open login popup.
    Kakao.Auth.login({
      success(authObj) {
        console.log(JSON.stringify(authObj));
      },
      fail(err) {
        console.log(JSON.stringify(err));
      },
    });
  };

  return (
    <div>
      {showSuccess && <SuccessBar>회원가입 성공</SuccessBar>}
      {showFailed && <FailBar>회원가입 실패</FailBar>}
      <Wrapper>
        <SlidingBackground />
        <Backdrop />
        <BackdropFadeOut />
        <LoginWrapper>
          <LoginBox>
            <InnerWrap>
              <HeaderText>CASETiFY에 가입하세요</HeaderText>
              <ButtonFacebook>
                <img src={fb_logo} alt="sdf" />
                <ButtonInnerSpan>Login with Facebook</ButtonInnerSpan>
              </ButtonFacebook>
              <ButtonKakao onClick={handleKakao}>
                <KakaoImg src={kakao_logo} alt="dds" />
                <ButtonInnerSpan kakao>Login with Kakao</ButtonInnerSpan>
              </ButtonKakao>
              <LineBreakOuter>
                <Line />
                <LineBreakSpan>or</LineBreakSpan>
                <Line />
              </LineBreakOuter>
              <form onSubmit={onSubmit}>
                <InputBox
                  onChange={onChange}
                  value={userInfo.email}
                  name="email"
                  type="text"
                  placeholder="이메일"
                />
                <InputBox
                  onChange={onChange}
                  value={userInfo.password}
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                />
                <InputBox
                  onChange={onChange}
                  value={userInfo.mobile_number}
                  name="mobile_number"
                  type="text"
                  placeholder="전화번호"
                />
                <ButtonSubmit type="submit">가입하기</ButtonSubmit>
              </form>
              <ButtonLoginWrapper>
                <ButtonLogin>
                  <Link to="/signin">회원이신가요?</Link>
                </ButtonLogin>
              </ButtonLoginWrapper>
            </InnerWrap>
          </LoginBox>
        </LoginWrapper>
      </Wrapper>
    </div>
  );
};

export default withRouter(SignUp);

// Styled Components

const SuccessBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #42e6a4;
  color: white;
  font-size: 16px;
  position: absolute;
  width: 100%;
  animation: fadeIn 4s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const FailBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f0134d;
  color: white;
  font-size: 16px;
  position: absolute;
  width: 100%;
  animation: fadeIn 4s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

const SlidingBackground = styled.div`
  position: absolute;
  z-index: -3;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background-image: url(${bg_image});
  background-size: cover;
  animation: moveUp 35s linear forwards;
  filter: blur(3px);

  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-400px);
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const BackdropFadeOut = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  animation: fadeOut 0.5s linear forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const LoginWrapper = styled.div`
  max-width: 450px;
  margin: auto;
  margin-top: 180px;
  height: 480px;
`;

const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
`;

const InnerWrap = styled.div`
  max-width: 290px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderText = styled.h1`
  max-width: 290px;
  margin: 0 0 14px;
  font-family: 'pangram';
  letter-spacing: 1px;
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

const ButtonKakao = styled.button`
  width: 100%;
  border: none;
  height: 44px;
  background-color: #f7e417;
  color: #3c1d1e;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoImg = styled.img`
  width: 30px;
`;

const ButtonInnerSpan = styled.span`
  color: ${props => (props.kakao ? '#3C1D1E' : 'white')};
  font-size: 14px;
  margin-left: 11px;
`;

const ButtonFacebook = styled.button`
  width: 100%;
  height: 44px;
  background-color: #215fac;
  color: white;
  font-size: 14px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineBreakOuter = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 11px;
`;

const Line = styled.div`
  width: 116px;
  height: 1px;
  border-top: 1px solid #666;
`;

const LineBreakSpan = styled.span`
  color: #666;
`;

const InputBox = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 11px;
  font-size: 14px;
  background-color: #eeeeee;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const ButtonSubmit = styled.button`
  width: 100%;
  height: 44px;
  background-color: #333;
  color: white;
  font-size: 14px;
  border-radius: 3px;
`;

const ButtonLoginWrapper = styled.div`
  width: 100%;
  padding-top: 11px;
  text-align: center;
`;

const ButtonLogin = styled.a`
  font-size: 14px;
  color: #666666;
`;
